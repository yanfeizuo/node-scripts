const { ethers, zeroPadValue } = require('ethers');
const { Options } = require('@layerzerolabs/lz-v2-utilities')
const { LayerZeroV2ABI, ERC20_ABI, LayerZeroV2TimelockABI } = require('../ABI')

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

const meterOftProxyAddr = "0xB41a27CEa6535C8D972607f9Bc81590C409Ab8f2"
const toAddress = "0x57e7e16A2326DC41d02402103A73b4464A8B3EEb"
const amount = BigInt(1e18)
const tokenAddress = "0x96159A91291c92dF19983E53E14726b1de3f7c49"  // suusd

const provider = new ethers.JsonRpcProvider("https://rpctest.meter.io")
const wallet = new ethers.Wallet(TPK, provider)

const send = async () => {
  const meterOft = new ethers.Contract(meterOftProxyAddr, LayerZeroV2ABI, wallet)

  const GAS_LIMIT = 1000000; // Gas limit for the executor
  const MSG_VALUE = 0; // msg.value for the lzReceive() function on destination in wei

  const _options = Options.newOptions().addExecutorLzReceiveOption(
    GAS_LIMIT,
    MSG_VALUE
  );

  const sendParam = {
    dstEid: layerzerov2Config.sepolia.lzEndpointId,
    to: zeroPadValue(toAddress, 32),
    token: tokenAddress,
    amountLD: amount,
    minAmountLD: amount,
    extraOptions: _options.toHex(),
    composeMsg: "0x",
    oftCmd: "0x",
  };

  const fee = await meterOft.quoteSend(sendParam, false);
  console.log('fee', fee.toObject())

  const _shouldEnterTimelock = await meterOft.shouldEnterTimelock(sendParam);
  console.log('_shouldEnterTimelock', _shouldEnterTimelock)

  const token = new ethers.Contract(tokenAddress, ERC20_ABI, wallet)
  const allowance = await token.allowance(toAddress, meterOftProxyAddr)
  console.log('allowance', allowance)
  if (allowance < amount) {
    const approveTx = await token.approve(meterOftProxyAddr, amount)
    await approveTx.wait()
  }

  const myTokenBalance = await token.balanceOf(toAddress)
  console.log('myTokenBalance', myTokenBalance)

  const allLane = await meterOft.getAllLane()
  console.log('allLane', allLane.map(a => a.toObject()))

  // const tx = await meterOft.send(
  //   sendParam,
  //   { nativeFee: fee.nativeFee, lzTokenFee: fee.lzTokenFee },
  //   toAddress,
  //   _shouldEnterTimelock,
  //   { value: fee.nativeFee }
  // );
  // const receipt = await tx.wait();
  // console.log(`sent ${receipt?.hash}`);
}

const meterTimelockAddr = "0xF7Ad5941f9AE81Ba396b95079c59Ab766C2bB34e"
const timelock = async () => {
  const meterTimelock = new ethers.Contract(meterTimelockAddr, LayerZeroV2TimelockABI, wallet)
  const userAgreements = await meterTimelock.userAgreements(toAddress, 1)
  console.log('userAgreements', userAgreements)
}

;( async () => {
  // await send()
  await timelock()
})()
