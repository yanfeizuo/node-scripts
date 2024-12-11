
const { ethers } = require("ethers")
const axios = require("axios")
const { PellStakingABI } = require("../ABI");
const { default: BigNumber } = require("bignumber.js");
const { MulticallWrapper } = require("ethers-multicall-provider")

const coreRpc = "https://rpc.coredao.org"
const PellStakingContract = "0x57bF5B3492Fef24A4f883135CB2AAD27Ce227183"

const getCoreDaoPellStakingSuBTC = async (accounts) => {
  const pell = new ethers.Contract(PellStakingContract, PellStakingABI, MulticallWrapper.wrap(new ethers.JsonRpcProvider(coreRpc)))
  // get shares
  const getSharesCallMap = accounts.map(acc => pell.shares(acc))
  const getSharesRes = await Promise.all(getSharesCallMap)
  console.log('getSharesRes', getSharesRes)

  const allShares = getSharesRes.reduce((acc, cur) => acc.plus(cur), new BigNumber(0))
  if (allShares.isZero(0)) {
    return BigNumber(0)
  }

  const sharesToUnderlyingViewCallMap = []
  getSharesRes.map(s => {
    if (s > 0) {
      sharesToUnderlyingViewCallMap.push(pell.sharesToUnderlyingView(s))
    }
  })
  
  const sharesToUnderlyingViewCallRes = await Promise.all(sharesToUnderlyingViewCallMap)
  const totalUnderlying = sharesToUnderlyingViewCallRes.reduce((acc, cur) => acc.plus(cur), new BigNumber(0))

  const priceData = await axios.get('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd')
  const btcPrice = priceData.data?.bitcoin?.usd || 97165

  return totalUnderlying.div(1e18).times(btcPrice)
}

;(async () => {
  const accounts = ["0x57e7e16A2326DC41d02402103A73b4464A8B3EEb"]
  const val = await getCoreDaoPellStakingSuBTC(accounts)
  console.log('val', val)
})()