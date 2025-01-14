import { ethers } from "ethers";
import { LayerZeroV2ABI, EndpointABI } from "../ABI/layerzerov2.js";
import { NetConfig } from "./config.js";

const setTimelock = async (key, net) => {
  const network = NetConfig.find(n => n.name === net);
  if (!network) return console.log('unsupport network');
  const { proxyAddr, timelock, rpc } = network;
  const provider = new ethers.JsonRpcProvider(rpc)
  const wallet = new ethers.Wallet(key, provider)
  const proxy = new ethers.Contract(proxyAddr, LayerZeroV2ABI, wallet)
  const tx = await proxy.setTimelock(timelock)
  const receipt = await tx.wait()
  console.log('receipt', receipt.hash)
}

const setSendLibrary = async (key, net) => {
  const network = NetConfig.find(n => n.name === net);
  if (!network) return console.log('unsupport network');
  const { lzEndpoint, lzEndpointId, proxyAddr, rpc, SendUln302 } = network;
  const provider = new ethers.JsonRpcProvider(rpc)
  const wallet = new ethers.Wallet(key, provider)
  const endpoint = new ethers.Contract(lzEndpoint, EndpointABI, wallet)
  const tx = await endpoint.setSendLibrary(proxyAddr, lzEndpointId, SendUln302)
  const receipt = await tx.wait()
  console.log('receipt', receipt.hash)
}

;( async () => {

  const args = process.argv
  if (args.length < 4) {
    return console.log('Need args: <key> <network>')
  }
  const privateKey = args[2]
  const network= args[3]
  // await setTimelock(privateKey, network)

  await setSendLibrary(privateKey, network)
})()