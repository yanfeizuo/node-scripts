
export const NetConfig = [
  {
    name: 'metertest',
    lzEndpointId: 40156,
    lzEndpoint: "0x3E03163f253ec436d4562e5eFd038cf98827B7eC",
    SendUln302: "0x6B946AF0b8F3B4D33a36f90C5227D0054722FF32",
    timelock: '',
    proxyAddr: '0xB41a27CEa6535C8D972607f9Bc81590C409Ab8f2',
    rpc: 'https://rpctest.meter.io',
    tokens: {
      suusd: '0x96159A91291c92dF19983E53E14726b1de3f7c49'
    }
  },
  {
    name: 'sepolia',
    lzEndpointId: 40161,
    lzEndpoint: "0x6EDCE65403992e310A62460808c4b910D972f10f",
    SendUln302: "",
    timelock: '',
    proxyAddr: '0xeEA94706C3F4760c6EED7590a53D8F394685817a',
    rpc: 'https://eth-sepolia.public.blastapi.io',
    tokens: {
      suusd: '0x7215b1853E846dBB6B4F5639563be5E2f1A9489f'
    }
  },
  {
    name: 'arbsepolia',
    lzEndpointId: 40231,
    lzEndpoint: "0x6EDCE65403992e310A62460808c4b910D972f10f",
    SendUln302: "",
    timelock: '',
    proxyAddr: '0xC9B4601178FbEd19210E0CC0EA657dF235B88768',
    rpc: 'https://arbitrum-sepolia-rpc.publicnode.com',
    tokens: {
      suusd: '0x8DBA7Bf9dB7f6b2Cbe7c2CdABe2dF25756E6B5a3'
    }
  },
  {
    name: 'basesepolia',
    lzEndpointId: 40245,
    lzEndpoint: "0x6EDCE65403992e310A62460808c4b910D972f10f",
    SendUln302: "",
    timelock: '',
    proxyAddr: '0x092fa73f599f3CcEa2093d65c9fDcb4A49fa7924',
    rpc: 'https://sepolia.base.org',
    tokens: {
      suusd: '0x3b072FEA46117ac64F7B5baa0E60AfF4F966001b'
    }
  },
  {
    name: 'zksyncsepolia',
    lzEndpointId: 40305,
    lzEndpoint: "0xe2Ef622A13e71D9Dd2BBd12cd4b27e1516FA8a09",
    SendUln302: "",
    timelock: '',
    proxyAddr: '0xE556e5C72a1338cbe6b3906eb94172bA43c7e120',
    rpc: 'https://sepolia.era.zksync.dev',
    tokens: {
      suusd: '0xcBE318137617b352c767D6d0beB860Dd2b6961aE'
    }
  },
  {
    name: 'coretest',
    lzEndpointId: 40153,
    lzEndpoint: "0x6EDCE65403992e310A62460808c4b910D972f10f",
    SendUln302: "0xc8361Fac616435eB86B9F6e2faaff38F38B0d68C",
    timelock: '0x3e546b90aB430a0101177b42A605f96eEED6De08',
    proxyAddr: '0x092fa73f599f3CcEa2093d65c9fDcb4A49fa7924',
    rpc: 'https://rpc.test.btcs.network',
    tokens: {
      suusd: '0x3b072FEA46117ac64F7B5baa0E60AfF4F966001b'
    }
  },
  {
    name: 'bsctest',
    lzEndpointId: 40102,
    lzEndpoint: "0x6EDCE65403992e310A62460808c4b910D972f10f",
    SendUln302: "0x55f16c442907e86D764AFdc2a07C2de3BdAc8BB7",
    timelock: '0x3e546b90aB430a0101177b42A605f96eEED6De08',
    proxyAddr: '0x092fa73f599f3CcEa2093d65c9fDcb4A49fa7924',
    rpc: 'https://bsc-testnet.public.blastapi.io',
    tokens: {
      suusd: '0x3b072FEA46117ac64F7B5baa0E60AfF4F966001b'
    }
  }
]