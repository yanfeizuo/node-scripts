exports.Pell_Staking_ABI = [
  {
    "inputs": [
      {
        "name": "_strategyManager",
        "internalType": "contract IStrategyManager",
        "type": "address"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "indexed": false,
        "name": "version",
        "internalType": "uint8",
        "type": "uint8"
      }
    ],
    "name": "Initialized",
    "anonymous": false,
    "type": "event"
  },
  {
    "inputs": [
      {
        "indexed": false,
        "name": "previousValue",
        "internalType": "uint256",
        "type": "uint256"
      },
      {
        "indexed": false,
        "name": "newValue",
        "internalType": "uint256",
        "type": "uint256"
      }
    ],
    "name": "MaxPerDepositUpdated",
    "anonymous": false,
    "type": "event"
  },
  {
    "inputs": [
      {
        "indexed": false,
        "name": "previousValue",
        "internalType": "uint256",
        "type": "uint256"
      },
      {
        "indexed": false,
        "name": "newValue",
        "internalType": "uint256",
        "type": "uint256"
      }
    ],
    "name": "MaxTotalDepositsUpdated",
    "anonymous": false,
    "type": "event"
  },
  {
    "inputs": [
      {
        "indexed": true,
        "name": "account",
        "internalType": "address",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "newPausedStatus",
        "internalType": "uint256",
        "type": "uint256"
      }
    ],
    "name": "Paused",
    "anonymous": false,
    "type": "event"
  },
  {
    "inputs": [
      {
        "indexed": false,
        "name": "pauserRegistry",
        "internalType": "contract IPauserRegistry",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "newPauserRegistry",
        "internalType": "contract IPauserRegistry",
        "type": "address"
      }
    ],
    "name": "PauserRegistrySet",
    "anonymous": false,
    "type": "event"
  },
  {
    "inputs": [
      {
        "indexed": true,
        "name": "account",
        "internalType": "address",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "newPausedStatus",
        "internalType": "uint256",
        "type": "uint256"
      }
    ],
    "name": "Unpaused",
    "anonymous": false,
    "type": "event"
  },
  {
    "outputs": [
      {
        "name": "newShares",
        "internalType": "uint256",
        "type": "uint256"
      }
    ],
    "inputs": [
      {
        "name": "token",
        "internalType": "contract IERC20",
        "type": "address"
      },
      {
        "name": "amount",
        "internalType": "uint256",
        "type": "uint256"
      }
    ],
    "name": "deposit",
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "outputs": [
      {
        "name": "",
        "internalType": "string",
        "type": "string"
      }
    ],
    "inputs": [],
    "name": "explanation",
    "stateMutability": "pure",
    "type": "function"
  },
  {
    "outputs": [
      {
        "name": "",
        "internalType": "uint256",
        "type": "uint256"
      },
      {
        "name": "",
        "internalType": "uint256",
        "type": "uint256"
      }
    ],
    "inputs": [],
    "name": "getTVLLimits",
    "stateMutability": "view",
    "type": "function"
  },
  {
    "outputs": [],
    "inputs": [
      {
        "name": "_maxPerDeposit",
        "internalType": "uint256",
        "type": "uint256"
      },
      {
        "name": "_maxTotalDeposits",
        "internalType": "uint256",
        "type": "uint256"
      },
      {
        "name": "_underlyingToken",
        "internalType": "contract IERC20",
        "type": "address"
      },
      {
        "name": "_pauserRegistry",
        "internalType": "contract IPauserRegistry",
        "type": "address"
      }
    ],
    "name": "initialize",
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "outputs": [],
    "inputs": [
      {
        "name": "_underlyingToken",
        "internalType": "contract IERC20",
        "type": "address"
      },
      {
        "name": "_pauserRegistry",
        "internalType": "contract IPauserRegistry",
        "type": "address"
      }
    ],
    "name": "initializeBase",
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "outputs": [
      {
        "name": "",
        "internalType": "uint256",
        "type": "uint256"
      }
    ],
    "inputs": [],
    "name": "maxPerDeposit",
    "stateMutability": "view",
    "type": "function"
  },
  {
    "outputs": [
      {
        "name": "",
        "internalType": "uint256",
        "type": "uint256"
      }
    ],
    "inputs": [],
    "name": "maxTotalDeposits",
    "stateMutability": "view",
    "type": "function"
  },
  {
    "outputs": [],
    "inputs": [
      {
        "name": "newPausedStatus",
        "internalType": "uint256",
        "type": "uint256"
      }
    ],
    "name": "pause",
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "outputs": [],
    "inputs": [],
    "name": "pauseAll",
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "outputs": [
      {
        "name": "",
        "internalType": "bool",
        "type": "bool"
      }
    ],
    "inputs": [
      {
        "name": "index",
        "internalType": "uint8",
        "type": "uint8"
      }
    ],
    "name": "paused",
    "stateMutability": "view",
    "type": "function"
  },
  {
    "outputs": [
      {
        "name": "",
        "internalType": "uint256",
        "type": "uint256"
      }
    ],
    "inputs": [],
    "name": "paused",
    "stateMutability": "view",
    "type": "function"
  },
  {
    "outputs": [
      {
        "name": "",
        "internalType": "contract IPauserRegistry",
        "type": "address"
      }
    ],
    "inputs": [],
    "name": "pauserRegistry",
    "stateMutability": "view",
    "type": "function"
  },
  {
    "outputs": [],
    "inputs": [
      {
        "name": "newPauserRegistry",
        "internalType": "contract IPauserRegistry",
        "type": "address"
      }
    ],
    "name": "setPauserRegistry",
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "outputs": [],
    "inputs": [
      {
        "name": "newMaxPerDeposit",
        "internalType": "uint256",
        "type": "uint256"
      },
      {
        "name": "newMaxTotalDeposits",
        "internalType": "uint256",
        "type": "uint256"
      }
    ],
    "name": "setTVLLimits",
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "outputs": [
      {
        "name": "",
        "internalType": "uint256",
        "type": "uint256"
      }
    ],
    "inputs": [
      {
        "name": "user",
        "internalType": "address",
        "type": "address"
      }
    ],
    "name": "shares",
    "stateMutability": "view",
    "type": "function"
  },
  {
    "outputs": [
      {
        "name": "",
        "internalType": "uint256",
        "type": "uint256"
      }
    ],
    "inputs": [
      {
        "name": "amountShares",
        "internalType": "uint256",
        "type": "uint256"
      }
    ],
    "name": "sharesToUnderlying",
    "stateMutability": "view",
    "type": "function"
  },
  {
    "outputs": [
      {
        "name": "",
        "internalType": "uint256",
        "type": "uint256"
      }
    ],
    "inputs": [
      {
        "name": "amountShares",
        "internalType": "uint256",
        "type": "uint256"
      }
    ],
    "name": "sharesToUnderlyingView",
    "stateMutability": "view",
    "type": "function"
  },
  {
    "outputs": [
      {
        "name": "",
        "internalType": "contract IStrategyManager",
        "type": "address"
      }
    ],
    "inputs": [],
    "name": "strategyManager",
    "stateMutability": "view",
    "type": "function"
  },
  {
    "outputs": [
      {
        "name": "",
        "internalType": "uint256",
        "type": "uint256"
      }
    ],
    "inputs": [],
    "name": "totalShares",
    "stateMutability": "view",
    "type": "function"
  },
  {
    "outputs": [
      {
        "name": "",
        "internalType": "uint256",
        "type": "uint256"
      }
    ],
    "inputs": [
      {
        "name": "amountUnderlying",
        "internalType": "uint256",
        "type": "uint256"
      }
    ],
    "name": "underlyingToShares",
    "stateMutability": "view",
    "type": "function"
  },
  {
    "outputs": [
      {
        "name": "",
        "internalType": "uint256",
        "type": "uint256"
      }
    ],
    "inputs": [
      {
        "name": "amountUnderlying",
        "internalType": "uint256",
        "type": "uint256"
      }
    ],
    "name": "underlyingToSharesView",
    "stateMutability": "view",
    "type": "function"
  },
  {
    "outputs": [
      {
        "name": "",
        "internalType": "contract IERC20",
        "type": "address"
      }
    ],
    "inputs": [],
    "name": "underlyingToken",
    "stateMutability": "view",
    "type": "function"
  },
  {
    "outputs": [],
    "inputs": [
      {
        "name": "newPausedStatus",
        "internalType": "uint256",
        "type": "uint256"
      }
    ],
    "name": "unpause",
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "outputs": [
      {
        "name": "",
        "internalType": "uint256",
        "type": "uint256"
      }
    ],
    "inputs": [
      {
        "name": "user",
        "internalType": "address",
        "type": "address"
      }
    ],
    "name": "userUnderlying",
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "outputs": [
      {
        "name": "",
        "internalType": "uint256",
        "type": "uint256"
      }
    ],
    "inputs": [
      {
        "name": "user",
        "internalType": "address",
        "type": "address"
      }
    ],
    "name": "userUnderlyingView",
    "stateMutability": "view",
    "type": "function"
  },
  {
    "outputs": [],
    "inputs": [
      {
        "name": "recipient",
        "internalType": "address",
        "type": "address"
      },
      {
        "name": "token",
        "internalType": "contract IERC20",
        "type": "address"
      },
      {
        "name": "amountShares",
        "internalType": "uint256",
        "type": "uint256"
      }
    ],
    "name": "withdraw",
    "stateMutability": "nonpayable",
    "type": "function"
  }
]