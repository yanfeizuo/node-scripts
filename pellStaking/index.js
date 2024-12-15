
const { ethers } = require("ethers")
const axios = require("axios")
const { PellStakingABI } = require("../ABI");
const { default: BigNumber } = require("bignumber.js");
const { MulticallWrapper } = require("ethers-multicall-provider")

const coreRpc = "https://rpc.coredao.org"
const PellStakingContract = "0x57bF5B3492Fef24A4f883135CB2AAD27Ce227183"

const getCoreDaoPellStakingSuBTC = async (accounts, price) => {
  const pell = new ethers.Contract(PellStakingContract, PellStakingABI, MulticallWrapper.wrap(new ethers.JsonRpcProvider(coreRpc)))
  // get shares
  const getSharesCallMap = accounts.map(acc => pell.shares(acc))
  const getSharesRes = await Promise.all(getSharesCallMap)
  console.log('getSharesRes', getSharesRes)

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

;(async () => {
  const accounts = ["0x57e7e16A2326DC41d02402103A73b4464A8B3EEb", "0xd5C20Eb8345F71717c367075c45a3908a0fC1Ce8"]
  const bitcoinPrice = await getBitcoinPrice()
  console.log('bitcoinPrice', bitcoinPrice)
  const val = await getCoreDaoPellStakingSuBTC(accounts, bitcoinPrice)
  console.log('val', val.toFixed())
})()