import { ethers, zeroPadValue } from 'ethers';
import { Options } from '@layerzerolabs/lz-v2-utilities'
import { LayerZeroV2ABI } from '../ABI/layerzerov2.js'
import { ERC20_ABI } from '../ABI/erc20.js'
import { NetConfig } from "./config.js";
import BigNumber from 'bignumber.js';

const send = async (key, from, to, tokenSym, amount) => {
  const fromNetwork = NetConfig.find(n => n.name === from);
  const toNetwork = NetConfig.find(n => n.name === to);
  if (!fromNetwork) return console.log('unsupport fromNetwork');
  if (!toNetwork) return console.log('unsupport toNetwork');
  const { proxyAddr, rpc, tokens } = fromNetwork;
  const { lzEndpointId } = toNetwork
  const decimalsAmount = new BigNumber(`${amount}e18`).toFixed()
  console.log('decimalsAmount', decimalsAmount)
  const tokenAddress = tokens[tokenSym]
  if (!tokenAddress) return console.log('Cannot find token ', tokenSym)
  const provider = new ethers.JsonRpcProvider(rpc)
  const wallet = new ethers.Wallet(key, provider)
  const toAddr = await wallet.getAddress()
  console.log('toAddr', toAddr)
  const proxy = new ethers.Contract(proxyAddr, LayerZeroV2ABI, wallet)

  const GAS_LIMIT = 1000000; // Gas limit for the executor
  const MSG_VALUE = 0; // msg.value for the lzReceive() function on destination in wei

  const _options = Options.newOptions().addExecutorLzReceiveOption(
    GAS_LIMIT,
    MSG_VALUE
  );

  const sendParam = {
    dstEid: lzEndpointId,
    to: zeroPadValue(toAddr, 32),
    token: tokenAddress,
    amountLD: decimalsAmount,
    minAmountLD: decimalsAmount,
    extraOptions: _options.toHex(),
    composeMsg: "0x",
    oftCmd: "0x",
  };

  const allLane = await proxy.getAllLane()
  console.log('allLane', allLane.map(a => a.toObject()))
  
  const fee = await proxy.quoteSend(sendParam, false);
  console.log('fee', fee.toObject())

  const _shouldEnterTimelock = await proxy.shouldEnterTimelock(tokenAddress, decimalsAmount);
  console.log('_shouldEnterTimelock', _shouldEnterTimelock)

  const token = new ethers.Contract(tokenAddress, ERC20_ABI, wallet)
  const allowance = await token.allowance(toAddr, proxyAddr)
  console.log('allowance', allowance)
  if (allowance < decimalsAmount) {
    const approveTx = await token.approve(proxyAddr, decimalsAmount + 0)
    await approveTx.wait()
  }

  const myTokenBalance = await token.balanceOf(toAddr)
  console.log('myTokenBalance', myTokenBalance)
  

  const tx = await proxy.send(
    sendParam,
    { nativeFee: fee.nativeFee, lzTokenFee: fee.lzTokenFee },
    toAddr,
    _shouldEnterTimelock,
    { value: fee.nativeFee }
  );
  const receipt = await tx.wait();
  console.log(`sent ${receipt?.hash}`);
}

;( async () => {

  const args = process.argv
  if (args.length < 7) {
    return console.log('Need args: <key> <fromNet> <toNet> <tokenSym> <amount>')
  }
  const privateKey = args[2]
  const fromNet = args[3]
  const toNet = args[4]
  const tokenSym = args[5]
  const amount = args[6]
  await send(privateKey, fromNet, toNet, tokenSym, amount)
})()
