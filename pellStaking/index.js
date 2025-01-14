
import axios from 'axios';
import { ethers } from 'ethers'
import { PellStakingABI } from '../ABI/pellStaking.js'
import BigNumber from 'bignumber.js';
// import { MulticallWrapper } from 'ethers-multicall-provider';

const coreRpc = "https://rpc.coredao.org"
const PellStakingContract = "0x57bF5B3492Fef24A4f883135CB2AAD27Ce227183"

const getCoreDaoPellStakingSuBTC = async (accounts, price) => {
  // const pell = new ethers.Contract(PellStakingContract, PellStakingABI, MulticallWrapper.wrap(new ethers.JsonRpcProvider(coreRpc)))
  const pell = new ethers.Contract(PellStakingContract, PellStakingABI, new ethers.JsonRpcProvider(coreRpc))
  // get shares
  const getSharesCallMap = accounts.map(acc => pell.shares(acc))
  const getSharesRes = await Promise.all(getSharesCallMap)
  console.log('getSharesRes', getSharesRes)
  const withAccounts = {}
  accounts.forEach((acc, index) => {
    withAccounts[acc] = getSharesRes[index]
  });
  console.log('with account', withAccounts)

  const allShares = getSharesRes.reduce((acc, cur) => acc.plus(cur), new BigNumber(0))
  console.log('allShares', allShares)
  // if (allShares.isZero(0)) {
  //   return BigNumber(0)
  // }

  const sharesToUnderlyingViewCallMap = []
  getSharesRes.map(s => {
    // if (s > 0) {
      sharesToUnderlyingViewCallMap.push(pell.sharesToUnderlyingView(s))
    // }
  })
  
  const sharesToUnderlyingViewCallRes = await Promise.all(sharesToUnderlyingViewCallMap)
  console.log('sharesToUnderlyingViewCallRes', sharesToUnderlyingViewCallRes)
  const totalUnderlying = sharesToUnderlyingViewCallRes.reduce((acc, cur) => acc.plus(cur), new BigNumber(0))
  console.log('totalUnderlying', totalUnderlying)

  return totalUnderlying.div(1e18).times(price)
}

const getBitcoinPrice = async () => {
  const priceData = await axios.get('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd')
  const btcPrice = priceData.data?.bitcoin?.usd || 97165
  return btcPrice
}

export const getCoreDaoPellStakingSuBTCShares = async (accounts) => {
  const pell = new ethers.Contract(PellStakingContract, PellStakingABI, new ethers.JsonRpcProvider(coreRpc))
  // get shares
  const getSharesCallMap = accounts.map(acc => pell.shares(acc))
  const sharesRes = await Promise.all(getSharesCallMap)

  const withAccountsZeroShares = {}
  const withAccountsNoZeroShares = {}
  accounts.forEach((acc, index) => {
    const shares = sharesRes[index]
    if (shares > 0n) {
      withAccountsNoZeroShares[acc] = shares
    } else {
      withAccountsZeroShares[acc] = shares
    }
  });

  const noSharesAcc = Object.keys(withAccountsNoZeroShares)
  // if (!noSharesAcc.length) {
  //   return withAccountsZeroShares
  // }

  const sharesToUnderlyingViewCallMap = []
  for(const key in withAccountsNoZeroShares) {
    const val = withAccountsNoZeroShares[key]
    sharesToUnderlyingViewCallMap.push(pell.sharesToUnderlyingView(val))
  }
  
  const sharesToUnderlyingViewCallRes = await Promise.all(sharesToUnderlyingViewCallMap)

  noSharesAcc.forEach((acc, index) => {
    const underlyBalance = sharesToUnderlyingViewCallRes[index]
    withAccountsNoZeroShares[acc] = underlyBalance
  });
  
  return { ...withAccountsNoZeroShares, ...withAccountsZeroShares }
}

;(async () => {
  const accounts = ["0x57e7e16A2326DC41d02402103A73b4464A8B3EEb", "0xd5C20Eb8345F71717c367075c45a3908a0fC1Ce8"]
  const res = await getCoreDaoPellStakingSuBTCShares(accounts)
  console.log(res)
  // const bitcoinPrice = await getBitcoinPrice()
  // console.log('bitcoinPrice', bitcoinPrice)
  // const val = await getCoreDaoPellStakingSuBTC(accounts, bitcoinPrice)
  // console.log('val', val.toFixed())
})()