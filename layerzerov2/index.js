import { ethers, zeroPadValue } from 'ethers';
import { Options } from '@layerzerolabs/lz-v2-utilities'
import { LayerZeroV2ABI, LayerZeroV2TimelockABI } from '../ABI/layerzerov2.js'
import { ERC20_ABI } from '../ABI/erc20.js'
import axios from 'axios';

const TPK = "0xc9133c5e42cbf89a21389bcf06595058f7258fedb8834fbff35b608dde7c3161"

const layerzerov2Config = {
  arbitrum: {
    lzEndpointId: 30110,
    lzEndpoint: "0x1a44076050125825900e736c501f859c50fE728c",
  },
  basemain: {
    lzEndpointId: 30184,
    lzEndpoint: "0x1a44076050125825900e736c501f859c50fE728c",
  },
  metermain: {
    lzEndpointId: 30176,
    lzEndpoint: "0xef02BacD67C0AB45510927749009F6B9ffCE0631",
  },
  metertest: {
    lzEndpointId: 40156,
    lzEndpoint: "0x3E03163f253ec436d4562e5eFd038cf98827B7eC",
  },
  ethereum: {
    lzEndpointId: 30101,
    lzEndpoint: "0x1a44076050125825900e736c501f859c50fE728c",
  },
  arbitrumsepolia: {
    lzEndpointId: 421614,
    lzEndpoint: "0x6EDCE65403992e310A62460808c4b910D972f10f",
  },
  basesepolia: {
    lzEndpointId: 84532,
    lzEndpoint: "0x6EDCE65403992e310A62460808c4b910D972f10f",
  },
  sepolia: {
    lzEndpointId: 40161,
    lzEndpoint: "0x6EDCE65403992e310A62460808c4b910D972f10f",
  },
  holesky: {
    lzEndpointId: 40217,
    lzEndpoint: "0x6EDCE65403992e310A62460808c4b910D972f10f",
  },
  berabartio: {
    lzEndpointId: 40291,
    lzEndpoint: "0x6EDCE65403992e310A62460808c4b910D972f10f",
  },
  merlin: {
    lzEndpointId: 30266,
    lzEndpoint: "0x1a44076050125825900e736c501f859c50fE728c",
  },
  core: {
    lzEndpointId: 30153,
    lzEndpoint: "0x1a44076050125825900e736c501f859c50fE728c",
  },
}

// metertest
const proxyAddr = "0xB41a27CEa6535C8D972607f9Bc81590C409Ab8f2"
const rpc = "https://rpctest.meter.io"
const tokenAddress = "0x96159A91291c92dF19983E53E14726b1de3f7c49"  // metertest suusd

// sepolia
// const proxyAddr = "0xeEA94706C3F4760c6EED7590a53D8F394685817a"
// const rpc = "https://eth-sepolia.public.blastapi.io"
// const tokenAddress = "0x7215b1853E846dBB6B4F5639563be5E2f1A9489f"  // sepolia suusd

// arbsepolia
// const proxyAddr = "0xC9B4601178FbEd19210E0CC0EA657dF235B88768"
// const rpc = "https://arbitrum-sepolia-rpc.publicnode.com"
// const tokenAddress = "0x8DBA7Bf9dB7f6b2Cbe7c2CdABe2dF25756E6B5a3"  // sepolia suusd

// basesepolia
// const proxyAddr = "0x092fa73f599f3CcEa2093d65c9fDcb4A49fa7924"
// const rpc = "https://sepolia.base.org"
// const tokenAddress = "0x3b072FEA46117ac64F7B5baa0E60AfF4F966001b"  // sepolia suusd

const amount = BigInt(1e18)
const toAddress = "0x57e7e16A2326DC41d02402103A73b4464A8B3EEb"

const dEid = layerzerov2Config.basesepolia.lzEndpointId

const provider = new ethers.JsonRpcProvider(rpc)

const send = async (key) => {
  const wallet = new ethers.Wallet(key, provider)
  const proxy = new ethers.Contract(proxyAddr, LayerZeroV2ABI, wallet)

  const GAS_LIMIT = 1000000; // Gas limit for the executor
  const MSG_VALUE = 0; // msg.value for the lzReceive() function on destination in wei

  const _options = Options.newOptions().addExecutorLzReceiveOption(
    GAS_LIMIT,
    MSG_VALUE
  );

  const sendParam = {
    dstEid: dEid,
    to: zeroPadValue(toAddress, 32),
    token: tokenAddress,
    amountLD: amount,
    minAmountLD: amount,
    extraOptions: _options.toHex(),
    composeMsg: "0x",
    oftCmd: "0x",
  };
  
  const fee = await proxy.quoteSend(sendParam, false);
  console.log('fee', fee.toObject())

  const _shouldEnterTimelock = await proxy.shouldEnterTimelock(tokenAddress, amount);
  console.log('_shouldEnterTimelock', _shouldEnterTimelock)

  const token = new ethers.Contract(tokenAddress, ERC20_ABI, wallet)
  const allowance = await token.allowance(toAddress, proxyAddr)
  console.log('allowance', allowance)
  if (allowance < amount) {
    const approveTx = await token.approve(proxyAddr, amount)
    await approveTx.wait()
  }

  const myTokenBalance = await token.balanceOf(toAddress)
  console.log('myTokenBalance', myTokenBalance)

  const allLane = await proxy.getAllLane()
  console.log('allLane', allLane.map(a => a.toObject()))
  

  const tx = await proxy.send(
    sendParam,
    { nativeFee: fee.nativeFee, lzTokenFee: fee.lzTokenFee },
    toAddress,
    _shouldEnterTimelock,
    { value: fee.nativeFee }
  );
  const receipt = await tx.wait();
  console.log(`sent ${receipt?.hash}`);
}

const TimelockAddrSepolia = "0x773b5cDf58eaE454ca72DCdBb9B957f0e5b709d8"

const sepoliaRpc = "https://ethereum-sepolia-rpc.publicnode.com"
const providerSepolia = new ethers.JsonRpcProvider(sepoliaRpc)
const walletSepolia = new ethers.Wallet(TPK, providerSepolia)

const timelock = async () => {
  const sepoliaTimelock = new ethers.Contract(TimelockAddrSepolia, LayerZeroV2TimelockABI, walletSepolia)
  const userAgreements = await sepoliaTimelock.userAgreements(toAddress)
  console.log('userAgreements', userAgreements.map(a => a.toObject()))
  const agreementsObj = userAgreements.map(a => a.toObject())
  for (const [idx, agreement] of agreementsObj.entries()) {
    console.log('agreement', agreement, idx)
    const estimateReleaseTime = await sepoliaTimelock.getMinWaitInSeconds(toAddress, idx)
    console.log('estimateReleaseTime', estimateReleaseTime)
  }
}

;( async () => {

  const args = process.argv
  const privateKey = args[2] || TPK
  console.log('pri', privateKey)
  await send(privateKey)
  // await timelock()
})()
