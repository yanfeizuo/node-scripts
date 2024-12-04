const { ethers } = require("ethers")
const { ERC20_ABI, VaultTemplateABI } = require("../ABI")

const thetaRpc = "https://eth-rpc-api.thetatoken.org/rpc"

const tfuel_busd = "0x743e7034652b7555Ed96c280Ae89f5EC0383696f"

const users = [
  {
    wallet: "0xE7eCE3aF2F8100B2e6844D5Be8a07eCCe8D4864a",
    geyser: {
      "id": "0x743e7034652b7555ed96c280ae89f5ec0383696f",
      "rewardToken": "0xe6a991ffa8cfe62b0bf6bf72959a3d4f11b2e0f5",
      "stakingToken": "0xf5819ccc999057618f6bb1102aa2913eaeda8d6c",
    }
  }
]

;(async () => {
  const jsonRpcProvider = new ethers.providers.JsonRpcProvider(thetaRpc)
  for (const u of users) {
    console.log('u', u)
    const { id, rewardToken, stakingToken } = u.geyser
    const rewardTokenContract = new ethers.Contract(rewardToken, ERC20_ABI, jsonRpcProvider)
    const stakingTokenContract = new ethers.Contract(stakingToken, ERC20_ABI, jsonRpcProvider)
    
    const vaultContract = new ethers.Contract(id, VaultTemplateABI, jsonRpcProvider)

    // user reward token
    // balanceOf
    const rewardBalance = await rewardTokenContract.balanceOf(id)
    console.log('rewardBalance', rewardBalance)

    // locked balance
    const rewardLockedBalance = await vaultContract.getBalanceLocked(rewardToken)
    console.log('reward token locked balance', rewardLockedBalance)

    // user staking token
    // balanceOf
    const stakingBalance = await stakingTokenContract.balanceOf(id)
    console.log('stakingBalance', stakingBalance)

    // locked balance
    const stakingLockedBalance = await vaultContract.getBalanceLocked(stakingToken)
    console.log('staking token locked balance', stakingLockedBalance)
  }
})();