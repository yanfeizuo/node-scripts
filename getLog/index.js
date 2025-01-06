import { ethers } from "ethers";

// 事件的ABI
const abi = [
  "event LzReceiveAlert(address indexed receiver, address indexed executor, tuple(uint32 srcEid, bytes32 sender, uint64 nonce) origin, bytes32 guid, uint256 gas, uint256 value, bytes message, bytes extraData, bytes reason)"
];


async function getTransactionReceiptAndLogs(txHash, rpcEndpoint) {
  try {
        // 连接到RPC端点
        const provider = new ethers.JsonRpcProvider(rpcEndpoint);
        // 获取交易收据
        const receipt = await provider.getTransactionReceipt(txHash);
        
        // 创建一个Interface实例来解析日志
        const iface = new ethers.Interface(abi);

        // 解析日志
        const events = receipt.logs.map(log => {
            try {
                return iface.parseLog(log);
            } catch (error) {
                return null; // 如果日志不匹配任何已知事件，返回null
            }
        }).filter(event => event !== null); // 过滤掉无法解析的日志

        // 输出解析后的事件
        console.log(events[0].args.toObject());
    } catch (error) {
        console.error('Error:', error);
    }
}

;( async () => {
  // RPC端点
  const rpcEndpoint = 'https://rpctest.meter.io';

  // 交易哈希
  const txHash = '0xf5cd90fdcd799d89840da1c9376f24d51afbfb4549a308283731e849c53835df';
  getTransactionReceiptAndLogs(txHash, rpcEndpoint);
})()