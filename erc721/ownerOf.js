const { ethers } = require("ethers")
const { ERC721 } = require("./abi")

const Bear_Contract = "0x071363d4cdf58d19b1d2c161631766daf9c1fffb"
const Arb_RPC = "https://arbitrum.blockpi.network/v1/rpc/083360bc8fd326e7089d97e1c1c2a085ad004277"

const bearContract = new ethers.Contract(Bear_Contract, ERC721, new ethers.providers.JsonRpcProvider(Arb_RPC));

(async () => {
  const owner = await bearContract.ownerOf(1)
  console.log('owner', owner)
})();