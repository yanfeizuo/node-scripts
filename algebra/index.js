const { factoryABI } = require('./factoryABI')
const { ethers } = require('ethers');

const c = new ethers.Contract('0xBb61d54844522bD43950a52A680Ba52f1388272c', factoryABI, new ethers.Wallet('c9133c5e42cbf89a21389bcf06595058f7258fedb8834fbff35b608dde7c3161',
  new ethers.providers.JsonRpcProvider('https://rpctest.meter.io')));

(async () => {
  const tx = await c.createPool('0x8a419ef4941355476cf04933e90bf3bbf2f73814', '0x8ae4c669f147737085a23d578c1da94d3e39879f', {
    gasLimit: 100000
  })
  console.log('tx', tx)
  const receipt = await tx.wait()
  console.log('receipt', receipt)
})()
