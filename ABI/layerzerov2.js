export const LayerZeroV2ABI = [
  {
    inputs: [
      {
        internalType: "uint8",
        name: "_localDecimals",
        type: "uint8",
      },
      {
        internalType: "address",
        name: "_lzEndpoint",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "InvalidDelegate",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidEndpointCall",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidInitialization",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidLocalDecimals",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "options",
        type: "bytes",
      },
    ],
    name: "InvalidOptions",
    type: "error",
  },
  {
    inputs: [],
    name: "LaneExisted",
    type: "error",
  },
  {
    inputs: [],
    name: "LaneNotExist",
    type: "error",
  },
  {
    inputs: [],
    name: "LzTokenUnavailable",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "eid",
        type: "uint32",
      },
    ],
    name: "NoPeer",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "msgValue",
        type: "uint256",
      },
    ],
    name: "NotEnoughNative",
    type: "error",
  },
  {
    inputs: [],
    name: "NotInitializing",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
    ],
    name: "NotSupportedToken",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "srcEid",
        type: "uint256",
      },
      {
        internalType: "bytes32",
        name: "sender",
        type: "bytes32",
      },
    ],
    name: "NotTrustedSender",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "addr",
        type: "address",
      },
    ],
    name: "OnlyEndpoint",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "eid",
        type: "uint32",
      },
      {
        internalType: "bytes32",
        name: "sender",
        type: "bytes32",
      },
    ],
    name: "OnlyPeer",
    type: "error",
  },
  {
    inputs: [],
    name: "OnlySelf",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "OwnableInvalidOwner",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "OwnableUnauthorizedAccount",
    type: "error",
  },
  {
    inputs: [],
    name: "OwnerIsNotSender",
    type: "error",
  },
  {
    inputs: [],
    name: "Paused",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
    ],
    name: "SafeERC20FailedOperation",
    type: "error",
  },
  {
    inputs: [],
    name: "SendAmountMustGreaterThanZero",
    type: "error",
  },
  {
    inputs: [],
    name: "ShouldEnterTimelockMismatch",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "result",
        type: "bytes",
      },
    ],
    name: "SimulationResult",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amountLD",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "minAmountLD",
        type: "uint256",
      },
    ],
    name: "SlippageExceeded",
    type: "error",
  },
  {
    inputs: [],
    name: "TimelockNotAvailable",
    type: "error",
  },
  {
    inputs: [],
    name: "ZeroAddressNotAllowed",
    type: "error",
  },
  {
    inputs: [],
    name: "ZeroValueNotAllowed",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        components: [
          {
            internalType: "uint32",
            name: "eid",
            type: "uint32",
          },
          {
            internalType: "uint16",
            name: "msgType",
            type: "uint16",
          },
          {
            internalType: "bytes",
            name: "options",
            type: "bytes",
          },
        ],
        indexed: false,
        internalType: "struct EnforcedOptionParam[]",
        name: "_enforcedOptions",
        type: "tuple[]",
      },
    ],
    name: "EnforcedOptionSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint64",
        name: "version",
        type: "uint64",
      },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "inspector",
        type: "address",
      },
    ],
    name: "MsgInspectorSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "guid",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint32",
        name: "srcEid",
        type: "uint32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "toAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amountReceivedLD",
        type: "uint256",
      },
    ],
    name: "OFTReceived",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "guid",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint32",
        name: "dstEid",
        type: "uint32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "fromAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amountSentLD",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amountReceivedLD",
        type: "uint256",
      },
    ],
    name: "OFTSent",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint32",
        name: "eid",
        type: "uint32",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "peer",
        type: "bytes32",
      },
    ],
    name: "PeerSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "preCrimeAddress",
        type: "address",
      },
    ],
    name: "PreCrimeSet",
    type: "event",
  },
  {
    inputs: [],
    name: "SEND",
    outputs: [
      {
        internalType: "uint16",
        name: "",
        type: "uint16",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "SEND_AND_CALL",
    outputs: [
      {
        internalType: "uint16",
        name: "",
        type: "uint16",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "srcEid",
        type: "uint32",
      },
      {
        internalType: "address",
        name: "srcToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "dstToken",
        type: "address",
      },
    ],
    name: "addTokenMapping",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint32",
            name: "srcEid",
            type: "uint32",
          },
          {
            internalType: "bytes32",
            name: "sender",
            type: "bytes32",
          },
          {
            internalType: "uint64",
            name: "nonce",
            type: "uint64",
          },
        ],
        internalType: "struct Origin",
        name: "origin",
        type: "tuple",
      },
    ],
    name: "allowInitializePath",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "approvalRequired",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_eid",
        type: "uint32",
      },
      {
        internalType: "uint16",
        name: "_msgType",
        type: "uint16",
      },
      {
        internalType: "bytes",
        name: "_extraOptions",
        type: "bytes",
      },
    ],
    name: "combineOptions",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimalConversionRate",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "endpoint",
    outputs: [
      {
        internalType: "contract ILayerZeroEndpointV2",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_eid",
        type: "uint32",
      },
      {
        internalType: "uint16",
        name: "_msgType",
        type: "uint16",
      },
    ],
    name: "enforcedOptions",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getAllLane",
    outputs: [
      {
        components: [
          {
            internalType: "uint32",
            name: "srcEid",
            type: "uint32",
          },
          {
            internalType: "address",
            name: "srcToken",
            type: "address",
          },
          {
            internalType: "address",
            name: "dstToken",
            type: "address",
          },
        ],
        internalType: "struct OFTAdapterMultiTokenUpgradeable.LaneDetail[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "endpointDelegate",
        type: "address",
      },
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint32",
            name: "srcEid",
            type: "uint32",
          },
          {
            internalType: "bytes32",
            name: "sender",
            type: "bytes32",
          },
          {
            internalType: "uint64",
            name: "nonce",
            type: "uint64",
          },
        ],
        internalType: "struct Origin",
        name: "",
        type: "tuple",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
      {
        internalType: "address",
        name: "_sender",
        type: "address",
      },
    ],
    name: "isComposeMsgSender",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_eid",
        type: "uint32",
      },
      {
        internalType: "bytes32",
        name: "_peer",
        type: "bytes32",
      },
    ],
    name: "isPeer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "srcEid",
        type: "uint32",
      },
      {
        internalType: "address",
        name: "srcToken",
        type: "address",
      },
    ],
    name: "laneExist",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint32",
            name: "srcEid",
            type: "uint32",
          },
          {
            internalType: "bytes32",
            name: "sender",
            type: "bytes32",
          },
          {
            internalType: "uint64",
            name: "nonce",
            type: "uint64",
          },
        ],
        internalType: "struct Origin",
        name: "_origin",
        type: "tuple",
      },
      {
        internalType: "bytes32",
        name: "_guid",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "_message",
        type: "bytes",
      },
      {
        internalType: "address",
        name: "_executor",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "_extraData",
        type: "bytes",
      },
    ],
    name: "lzReceive",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            components: [
              {
                internalType: "uint32",
                name: "srcEid",
                type: "uint32",
              },
              {
                internalType: "bytes32",
                name: "sender",
                type: "bytes32",
              },
              {
                internalType: "uint64",
                name: "nonce",
                type: "uint64",
              },
            ],
            internalType: "struct Origin",
            name: "origin",
            type: "tuple",
          },
          {
            internalType: "uint32",
            name: "dstEid",
            type: "uint32",
          },
          {
            internalType: "address",
            name: "receiver",
            type: "address",
          },
          {
            internalType: "bytes32",
            name: "guid",
            type: "bytes32",
          },
          {
            internalType: "uint256",
            name: "value",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "executor",
            type: "address",
          },
          {
            internalType: "bytes",
            name: "message",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "extraData",
            type: "bytes",
          },
        ],
        internalType: "struct InboundPacket[]",
        name: "_packets",
        type: "tuple[]",
      },
    ],
    name: "lzReceiveAndRevert",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint32",
            name: "srcEid",
            type: "uint32",
          },
          {
            internalType: "bytes32",
            name: "sender",
            type: "bytes32",
          },
          {
            internalType: "uint64",
            name: "nonce",
            type: "uint64",
          },
        ],
        internalType: "struct Origin",
        name: "_origin",
        type: "tuple",
      },
      {
        internalType: "bytes32",
        name: "_guid",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "_message",
        type: "bytes",
      },
      {
        internalType: "address",
        name: "_executor",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "_extraData",
        type: "bytes",
      },
    ],
    name: "lzReceiveSimulate",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "msgInspector",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "nextNonce",
    outputs: [
      {
        internalType: "uint64",
        name: "nonce",
        type: "uint64",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "oApp",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "oAppVersion",
    outputs: [
      {
        internalType: "uint64",
        name: "senderVersion",
        type: "uint64",
      },
      {
        internalType: "uint64",
        name: "receiverVersion",
        type: "uint64",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "oftVersion",
    outputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
      {
        internalType: "uint64",
        name: "version",
        type: "uint64",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "paused",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_eid",
        type: "uint32",
      },
    ],
    name: "peers",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "preCrime",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint32",
            name: "dstEid",
            type: "uint32",
          },
          {
            internalType: "bytes32",
            name: "to",
            type: "bytes32",
          },
          {
            internalType: "address",
            name: "token",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "amountLD",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "minAmountLD",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "extraOptions",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "composeMsg",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "oftCmd",
            type: "bytes",
          },
        ],
        internalType: "struct SendParam",
        name: "_sendParam",
        type: "tuple",
      },
    ],
    name: "quoteOFT",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "minAmountLD",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxAmountLD",
            type: "uint256",
          },
        ],
        internalType: "struct OFTLimit",
        name: "oftLimit",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "int256",
            name: "feeAmountLD",
            type: "int256",
          },
          {
            internalType: "string",
            name: "description",
            type: "string",
          },
        ],
        internalType: "struct OFTFeeDetail[]",
        name: "oftFeeDetails",
        type: "tuple[]",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "amountSentLD",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "amountReceivedLD",
            type: "uint256",
          },
        ],
        internalType: "struct OFTReceipt",
        name: "oftReceipt",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint32",
            name: "dstEid",
            type: "uint32",
          },
          {
            internalType: "bytes32",
            name: "to",
            type: "bytes32",
          },
          {
            internalType: "address",
            name: "token",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "amountLD",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "minAmountLD",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "extraOptions",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "composeMsg",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "oftCmd",
            type: "bytes",
          },
        ],
        internalType: "struct SendParam",
        name: "_sendParam",
        type: "tuple",
      },
      {
        internalType: "bool",
        name: "_payInLzToken",
        type: "bool",
      },
    ],
    name: "quoteSend",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "nativeFee",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "lzTokenFee",
            type: "uint256",
          },
        ],
        internalType: "struct MessagingFee",
        name: "msgFee",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "rateLimits",
    outputs: [
      {
        internalType: "uint256",
        name: "amountInFlight",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "lastDepositTime",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "limit",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "window",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "srcEid",
        type: "uint32",
      },
      {
        internalType: "address",
        name: "srcToken",
        type: "address",
      },
    ],
    name: "removeTokenMapping",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint32",
            name: "dstEid",
            type: "uint32",
          },
          {
            internalType: "bytes32",
            name: "to",
            type: "bytes32",
          },
          {
            internalType: "address",
            name: "token",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "amountLD",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "minAmountLD",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "extraOptions",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "composeMsg",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "oftCmd",
            type: "bytes",
          },
        ],
        internalType: "struct SendParam",
        name: "_sendParam",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "nativeFee",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "lzTokenFee",
            type: "uint256",
          },
        ],
        internalType: "struct MessagingFee",
        name: "_fee",
        type: "tuple",
      },
      {
        internalType: "address",
        name: "_refundAddress",
        type: "address",
      },
      {
        internalType: "bool",
        name: "_shouldEnterTimelock",
        type: "bool",
      },
    ],
    name: "send",
    outputs: [
      {
        components: [
          {
            internalType: "bytes32",
            name: "guid",
            type: "bytes32",
          },
          {
            internalType: "uint64",
            name: "nonce",
            type: "uint64",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "nativeFee",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "lzTokenFee",
                type: "uint256",
              },
            ],
            internalType: "struct MessagingFee",
            name: "fee",
            type: "tuple",
          },
        ],
        internalType: "struct MessagingReceipt",
        name: "msgReceipt",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "amountSentLD",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "amountReceivedLD",
            type: "uint256",
          },
        ],
        internalType: "struct OFTReceipt",
        name: "oftReceipt",
        type: "tuple",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint32",
            name: "dstEid",
            type: "uint32",
          },
          {
            internalType: "bytes32",
            name: "to",
            type: "bytes32",
          },
          {
            internalType: "address",
            name: "token",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "amountLD",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "minAmountLD",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "extraOptions",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "composeMsg",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "oftCmd",
            type: "bytes",
          },
        ],
        internalType: "struct SendParam",
        name: "_sendParam",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "nativeFee",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "lzTokenFee",
            type: "uint256",
          },
        ],
        internalType: "struct MessagingFee",
        name: "_fee",
        type: "tuple",
      },
      {
        internalType: "address",
        name: "_refundAddress",
        type: "address",
      },
      {
        internalType: "bool",
        name: "_shouldEnterTimelock",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "permitDeadline",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "permitSignature",
        type: "bytes",
      },
    ],
    name: "sendWithPermit",
    outputs: [
      {
        components: [
          {
            internalType: "bytes32",
            name: "guid",
            type: "bytes32",
          },
          {
            internalType: "uint64",
            name: "nonce",
            type: "uint64",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "nativeFee",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "lzTokenFee",
                type: "uint256",
              },
            ],
            internalType: "struct MessagingFee",
            name: "fee",
            type: "tuple",
          },
        ],
        internalType: "struct MessagingReceipt",
        name: "msgReceipt",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "amountSentLD",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "amountReceivedLD",
            type: "uint256",
          },
        ],
        internalType: "struct OFTReceipt",
        name: "oftReceipt",
        type: "tuple",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_delegate",
        type: "address",
      },
    ],
    name: "setDelegate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint32",
            name: "eid",
            type: "uint32",
          },
          {
            internalType: "uint16",
            name: "msgType",
            type: "uint16",
          },
          {
            internalType: "bytes",
            name: "options",
            type: "bytes",
          },
        ],
        internalType: "struct EnforcedOptionParam[]",
        name: "_enforcedOptions",
        type: "tuple[]",
      },
    ],
    name: "setEnforcedOptions",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_msgInspector",
        type: "address",
      },
    ],
    name: "setMsgInspector",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_eid",
        type: "uint32",
      },
      {
        internalType: "bytes32",
        name: "_peer",
        type: "bytes32",
      },
    ],
    name: "setPeer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_preCrime",
        type: "address",
      },
    ],
    name: "setPreCrime",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "token",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "limit",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "window",
            type: "uint256",
          },
        ],
        internalType: "struct DecayRateLimiter.RateLimitConfig[]",
        name: "configs",
        type: "tuple[]",
      },
    ],
    name: "setRateLimits",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_timelock",
        type: "address",
      },
    ],
    name: "setTimelock",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "sharedDecimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amountLD",
        type: "uint256",
      },
    ],
    name: "shouldEnterTimelock",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "timelock",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "srcEid",
        type: "uint32",
      },
      {
        internalType: "address",
        name: "srcToken",
        type: "address",
      },
    ],
    name: "tokenMapping",
    outputs: [
      {
        components: [
          {
            internalType: "uint32",
            name: "srcEid",
            type: "uint32",
          },
          {
            internalType: "address",
            name: "srcToken",
            type: "address",
          },
          {
            internalType: "address",
            name: "dstToken",
            type: "address",
          },
        ],
        internalType: "struct OFTAdapterMultiTokenUpgradeable.LaneDetail",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "unPause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "srcEid",
        type: "uint32",
      },
      {
        internalType: "address",
        name: "srcToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "dstToken",
        type: "address",
      },
    ],
    name: "updateTokenMapping",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "version",
    outputs: [
      {
        internalType: "enum OFTAdapterMultiTokenUpgradeable.VERSION",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
]

export const LayerZeroV2TimelockABI = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "AccessControlBadConfirmation",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "neededRole",
        type: "bytes32",
      },
    ],
    name: "AccessControlUnauthorizedAccount",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "agreementId",
        type: "bytes32",
      },
    ],
    name: "AgreementIsFrozen",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "agreementId",
        type: "bytes32",
      },
    ],
    name: "AgreementNotFrozen",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "agreementId",
        type: "bytes32",
      },
    ],
    name: "AgreementNotMature",
    type: "error",
  },
  {
    inputs: [],
    name: "IndexOutOfBounds",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidInitialization",
    type: "error",
  },
  {
    inputs: [],
    name: "NativeTransferFailed",
    type: "error",
  },
  {
    inputs: [],
    name: "NotInitializing",
    type: "error",
  },
  {
    inputs: [],
    name: "OnlyAdmin",
    type: "error",
  },
  {
    inputs: [],
    name: "OnlyEmergencyAdmin",
    type: "error",
  },
  {
    inputs: [],
    name: "OnlyExecutor",
    type: "error",
  },
  {
    inputs: [],
    name: "OnlyProposer",
    type: "error",
  },
  {
    inputs: [],
    name: "OverThreshold",
    type: "error",
  },
  {
    inputs: [],
    name: "ReentrancyGuardReentrantCall",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
    ],
    name: "SafeERC20FailedOperation",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "agreementId",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "beneficiary",
        type: "address",
      },
    ],
    name: "SenderIsNotBeneficiary",
    type: "error",
  },
  {
    inputs: [],
    name: "TimelockFrozen",
    type: "error",
  },
  {
    inputs: [],
    name: "TimelockIsFrozen",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "minWaitInSeconds",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "available",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "tokenAddress",
        type: "address",
      },
    ],
    name: "TokenRateLimitReached",
    type: "error",
  },
  {
    inputs: [],
    name: "ZeroAddressNotAllowed",
    type: "error",
  },
  {
    inputs: [],
    name: "ZeroValueNotAllowed",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "agreementId",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "beneficiary",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "asset",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "AgreementClaimed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "agreementId",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "beneficiary",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "asset",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    name: "AgreementCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "agreementId",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "beneficiary",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "asset",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "value",
        type: "bool",
      },
    ],
    name: "AgreementFrozen",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "agreementId",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "originalBeneficiary",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "asset",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "AgreementRescued",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        components: [
          {
            internalType: "bool",
            name: "isEnabled",
            type: "bool",
          },
          {
            internalType: "uint256",
            name: "capacity",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "rate",
            type: "uint256",
          },
        ],
        indexed: false,
        internalType: "struct RefillRateLimiter.Config",
        name: "config",
        type: "tuple",
      },
    ],
    name: "ConfigChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint64",
        name: "version",
        type: "uint64",
      },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "asset",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "oldRate",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newRate",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "oldCapacity",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newCapacity",
        type: "uint256",
      },
    ],
    name: "NewAssetLimiter",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint48",
        name: "oldWindow",
        type: "uint48",
      },
      {
        indexed: false,
        internalType: "uint48",
        name: "newWindow",
        type: "uint48",
      },
    ],
    name: "NewLimitWindow",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint48",
        name: "oldValue",
        type: "uint48",
      },
      {
        indexed: false,
        internalType: "uint48",
        name: "newValue",
        type: "uint48",
      },
    ],
    name: "NewMaxDelay",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bool",
        name: "value",
        type: "bool",
      },
    ],
    name: "TimeLockFrozen",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "tokens",
        type: "uint256",
      },
    ],
    name: "TokensConsumed",
    type: "event",
  },
  {
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "EMERGENCY_ADMIN",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "EXECUTOR_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "PROPOSER_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "agreements",
    outputs: [
      {
        internalType: "bool",
        name: "isFrozen",
        type: "bool",
      },
      {
        internalType: "address",
        name: "asset",
        type: "address",
      },
      {
        internalType: "uint48",
        name: "timestamp",
        type: "uint48",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "indexes",
        type: "uint256[]",
      },
    ],
    name: "claim",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "asset",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "consumeValue",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "asset",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "consumeValueNoRevert",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "asset",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "consumeValuePreview",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "asset",
        type: "address",
      },
      {
        internalType: "address",
        name: "beneficiary",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "createAgreement",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "asset",
        type: "address",
      },
    ],
    name: "currentState",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "tokens",
            type: "uint256",
          },
          {
            internalType: "uint32",
            name: "lastUpdated",
            type: "uint32",
          },
          {
            internalType: "bool",
            name: "isEnabled",
            type: "bool",
          },
          {
            internalType: "uint256",
            name: "capacity",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "rate",
            type: "uint256",
          },
        ],
        internalType: "struct RefillRateLimiter.TokenBucket",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "beneficiary",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "indexes",
        type: "uint256[]",
      },
    ],
    name: "executeAgreement",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "freeze",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "beneficiary",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "freezeAgreement",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "frozen",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "beneficiary",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "getMinWaitInSeconds",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleAdmin",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "getRoleMember",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleMemberCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleMembers",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasRole",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_admin",
        type: "address",
      },
      {
        internalType: "address",
        name: "_proposer",
        type: "address",
      },
      {
        internalType: "address",
        name: "_executor",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_admin",
        type: "address",
      },
      {
        internalType: "address",
        name: "_proposer",
        type: "address",
      },
      {
        internalType: "address",
        name: "_executor",
        type: "address",
      },
      {
        internalType: "uint48",
        name: "_limitWindow",
        type: "uint48",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "beneficiary",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "isAgreementMature",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "limitWindow",
    outputs: [
      {
        internalType: "uint48",
        name: "",
        type: "uint48",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "maxDelay",
    outputs: [
      {
        internalType: "uint48",
        name: "",
        type: "uint48",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "callerConfirmation",
        type: "address",
      },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "beneficiary",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "indexes",
        type: "uint256[]",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "rescueAgreement",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "asset",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "capacity",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "isEnabled",
            type: "bool",
          },
        ],
        internalType: "struct IRoledTimelock.AssetLimiterConfig[]",
        name: "configs",
        type: "tuple[]",
      },
    ],
    name: "setAssetLimiter",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "executor",
        type: "address",
      },
    ],
    name: "setExecutor",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint48",
        name: "newWindow",
        type: "uint48",
      },
    ],
    name: "setLimitWindow",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint48",
        name: "newMaxDelayInSeconds",
        type: "uint48",
      },
    ],
    name: "setMaxDelay",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "proposer",
        type: "address",
      },
    ],
    name: "setProposer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "unfreeze",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "beneficiary",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "unfreezeAgreement",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "userAgreements",
    outputs: [
      {
        components: [
          {
            internalType: "bool",
            name: "isFrozen",
            type: "bool",
          },
          {
            internalType: "address",
            name: "asset",
            type: "address",
          },
          {
            internalType: "uint48",
            name: "timestamp",
            type: "uint48",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
        ],
        internalType: "struct IRoledTimelock.Agreement[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
]

export const EndpointABI = [
  {
    "inputs": [
      {
        "internalType": "uint32",
        "name": "_eid",
        "type": "uint32"
      },
      {
        "internalType": "address",
        "name": "_owner",
        "type": "address"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "inputs": [],
    "name": "LZ_AlreadyRegistered",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "LZ_ComposeExists",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "expected",
        "type": "bytes32"
      },
      {
        "internalType": "bytes32",
        "name": "actual",
        "type": "bytes32"
      }
    ],
    "name": "LZ_ComposeNotFound",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "LZ_DefaultReceiveLibUnavailable",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "LZ_DefaultSendLibUnavailable",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "requiredNative",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "suppliedNative",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "requiredLzToken",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "suppliedLzToken",
        "type": "uint256"
      }
    ],
    "name": "LZ_InsufficientFee",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "LZ_InvalidExpiry",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "uint64",
        "name": "nonce",
        "type": "uint64"
      }
    ],
    "name": "LZ_InvalidNonce",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "LZ_InvalidPayloadHash",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "LZ_InvalidReceiveLibrary",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "LZ_LzTokenUnavailable",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "LZ_OnlyNonDefaultLib",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "LZ_OnlyReceiveLib",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "LZ_OnlyRegisteredLib",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "LZ_OnlyRegisteredOrDefaultLib",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "LZ_OnlySendLib",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "LZ_PathNotInitializable",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "LZ_PathNotVerifiable",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "expected",
        "type": "bytes32"
      },
      {
        "internalType": "bytes32",
        "name": "actual",
        "type": "bytes32"
      }
    ],
    "name": "LZ_PayloadHashNotFound",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "LZ_SameValue",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "LZ_SendReentrancy",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "LZ_Unauthorized",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "LZ_UnsupportedEid",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "LZ_UnsupportedInterface",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "LZ_ZeroLzTokenFee",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "_value",
        "type": "uint256"
      }
    ],
    "name": "Transfer_NativeFailed",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "Transfer_ToAddressIsZero",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "bytes32",
        "name": "guid",
        "type": "bytes32"
      },
      {
        "indexed": false,
        "internalType": "uint16",
        "name": "index",
        "type": "uint16"
      }
    ],
    "name": "ComposeDelivered",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "bytes32",
        "name": "guid",
        "type": "bytes32"
      },
      {
        "indexed": false,
        "internalType": "uint16",
        "name": "index",
        "type": "uint16"
      },
      {
        "indexed": false,
        "internalType": "bytes",
        "name": "message",
        "type": "bytes"
      }
    ],
    "name": "ComposeSent",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint32",
        "name": "eid",
        "type": "uint32"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "newLib",
        "type": "address"
      }
    ],
    "name": "DefaultReceiveLibrarySet",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint32",
        "name": "eid",
        "type": "uint32"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "oldLib",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "expiry",
        "type": "uint256"
      }
    ],
    "name": "DefaultReceiveLibraryTimeoutSet",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint32",
        "name": "eid",
        "type": "uint32"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "newLib",
        "type": "address"
      }
    ],
    "name": "DefaultSendLibrarySet",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "sender",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "delegate",
        "type": "address"
      }
    ],
    "name": "DelegateSet",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint32",
        "name": "srcEid",
        "type": "uint32"
      },
      {
        "indexed": false,
        "internalType": "bytes32",
        "name": "sender",
        "type": "bytes32"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "receiver",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint64",
        "name": "nonce",
        "type": "uint64"
      }
    ],
    "name": "InboundNonceSkipped",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "newLib",
        "type": "address"
      }
    ],
    "name": "LibraryRegistered",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "executor",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "bytes32",
        "name": "guid",
        "type": "bytes32"
      },
      {
        "indexed": false,
        "internalType": "uint16",
        "name": "index",
        "type": "uint16"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "gas",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "value",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "bytes",
        "name": "message",
        "type": "bytes"
      },
      {
        "indexed": false,
        "internalType": "bytes",
        "name": "extraData",
        "type": "bytes"
      },
      {
        "indexed": false,
        "internalType": "bytes",
        "name": "reason",
        "type": "bytes"
      }
    ],
    "name": "LzComposeAlert",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "receiver",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "executor",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint32",
            "name": "srcEid",
            "type": "uint32"
          },
          {
            "internalType": "bytes32",
            "name": "sender",
            "type": "bytes32"
          },
          {
            "internalType": "uint64",
            "name": "nonce",
            "type": "uint64"
          }
        ],
        "indexed": false,
        "internalType": "struct Origin",
        "name": "origin",
        "type": "tuple"
      },
      {
        "indexed": false,
        "internalType": "bytes32",
        "name": "guid",
        "type": "bytes32"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "gas",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "value",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "bytes",
        "name": "message",
        "type": "bytes"
      },
      {
        "indexed": false,
        "internalType": "bytes",
        "name": "extraData",
        "type": "bytes"
      },
      {
        "indexed": false,
        "internalType": "bytes",
        "name": "reason",
        "type": "bytes"
      }
    ],
    "name": "LzReceiveAlert",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "token",
        "type": "address"
      }
    ],
    "name": "LzTokenSet",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "previousOwner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "OwnershipTransferred",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint32",
        "name": "srcEid",
        "type": "uint32"
      },
      {
        "indexed": false,
        "internalType": "bytes32",
        "name": "sender",
        "type": "bytes32"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "receiver",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint64",
        "name": "nonce",
        "type": "uint64"
      },
      {
        "indexed": false,
        "internalType": "bytes32",
        "name": "payloadHash",
        "type": "bytes32"
      }
    ],
    "name": "PacketBurnt",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint32",
            "name": "srcEid",
            "type": "uint32"
          },
          {
            "internalType": "bytes32",
            "name": "sender",
            "type": "bytes32"
          },
          {
            "internalType": "uint64",
            "name": "nonce",
            "type": "uint64"
          }
        ],
        "indexed": false,
        "internalType": "struct Origin",
        "name": "origin",
        "type": "tuple"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "receiver",
        "type": "address"
      }
    ],
    "name": "PacketDelivered",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint32",
        "name": "srcEid",
        "type": "uint32"
      },
      {
        "indexed": false,
        "internalType": "bytes32",
        "name": "sender",
        "type": "bytes32"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "receiver",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint64",
        "name": "nonce",
        "type": "uint64"
      },
      {
        "indexed": false,
        "internalType": "bytes32",
        "name": "payloadHash",
        "type": "bytes32"
      }
    ],
    "name": "PacketNilified",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bytes",
        "name": "encodedPayload",
        "type": "bytes"
      },
      {
        "indexed": false,
        "internalType": "bytes",
        "name": "options",
        "type": "bytes"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "sendLibrary",
        "type": "address"
      }
    ],
    "name": "PacketSent",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint32",
            "name": "srcEid",
            "type": "uint32"
          },
          {
            "internalType": "bytes32",
            "name": "sender",
            "type": "bytes32"
          },
          {
            "internalType": "uint64",
            "name": "nonce",
            "type": "uint64"
          }
        ],
        "indexed": false,
        "internalType": "struct Origin",
        "name": "origin",
        "type": "tuple"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "receiver",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "bytes32",
        "name": "payloadHash",
        "type": "bytes32"
      }
    ],
    "name": "PacketVerified",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "receiver",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint32",
        "name": "eid",
        "type": "uint32"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "newLib",
        "type": "address"
      }
    ],
    "name": "ReceiveLibrarySet",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "receiver",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint32",
        "name": "eid",
        "type": "uint32"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "oldLib",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "timeout",
        "type": "uint256"
      }
    ],
    "name": "ReceiveLibraryTimeoutSet",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "sender",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint32",
        "name": "eid",
        "type": "uint32"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "newLib",
        "type": "address"
      }
    ],
    "name": "SendLibrarySet",
    "type": "event"
  },
  {
    "inputs": [],
    "name": "EMPTY_PAYLOAD_HASH",
    "outputs": [
      {
        "internalType": "bytes32",
        "name": "",
        "type": "bytes32"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "NIL_PAYLOAD_HASH",
    "outputs": [
      {
        "internalType": "bytes32",
        "name": "",
        "type": "bytes32"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "blockedLibrary",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_oapp",
        "type": "address"
      },
      {
        "internalType": "uint32",
        "name": "_srcEid",
        "type": "uint32"
      },
      {
        "internalType": "bytes32",
        "name": "_sender",
        "type": "bytes32"
      },
      {
        "internalType": "uint64",
        "name": "_nonce",
        "type": "uint64"
      },
      {
        "internalType": "bytes32",
        "name": "_payloadHash",
        "type": "bytes32"
      }
    ],
    "name": "burn",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_oapp",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint32",
            "name": "srcEid",
            "type": "uint32"
          },
          {
            "internalType": "bytes32",
            "name": "sender",
            "type": "bytes32"
          },
          {
            "internalType": "uint64",
            "name": "nonce",
            "type": "uint64"
          }
        ],
        "internalType": "struct Origin",
        "name": "_origin",
        "type": "tuple"
      },
      {
        "internalType": "bytes32",
        "name": "_guid",
        "type": "bytes32"
      },
      {
        "internalType": "bytes",
        "name": "_message",
        "type": "bytes"
      }
    ],
    "name": "clear",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "bytes32",
        "name": "guid",
        "type": "bytes32"
      },
      {
        "internalType": "uint16",
        "name": "index",
        "type": "uint16"
      }
    ],
    "name": "composeQueue",
    "outputs": [
      {
        "internalType": "bytes32",
        "name": "messageHash",
        "type": "bytes32"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint32",
        "name": "srcEid",
        "type": "uint32"
      }
    ],
    "name": "defaultReceiveLibrary",
    "outputs": [
      {
        "internalType": "address",
        "name": "lib",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint32",
        "name": "srcEid",
        "type": "uint32"
      }
    ],
    "name": "defaultReceiveLibraryTimeout",
    "outputs": [
      {
        "internalType": "address",
        "name": "lib",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "expiry",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint32",
        "name": "dstEid",
        "type": "uint32"
      }
    ],
    "name": "defaultSendLibrary",
    "outputs": [
      {
        "internalType": "address",
        "name": "lib",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "oapp",
        "type": "address"
      }
    ],
    "name": "delegates",
    "outputs": [
      {
        "internalType": "address",
        "name": "delegate",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "eid",
    "outputs": [
      {
        "internalType": "uint32",
        "name": "",
        "type": "uint32"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_oapp",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "_lib",
        "type": "address"
      },
      {
        "internalType": "uint32",
        "name": "_eid",
        "type": "uint32"
      },
      {
        "internalType": "uint32",
        "name": "_configType",
        "type": "uint32"
      }
    ],
    "name": "getConfig",
    "outputs": [
      {
        "internalType": "bytes",
        "name": "config",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_receiver",
        "type": "address"
      },
      {
        "internalType": "uint32",
        "name": "_srcEid",
        "type": "uint32"
      }
    ],
    "name": "getReceiveLibrary",
    "outputs": [
      {
        "internalType": "address",
        "name": "lib",
        "type": "address"
      },
      {
        "internalType": "bool",
        "name": "isDefault",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getRegisteredLibraries",
    "outputs": [
      {
        "internalType": "address[]",
        "name": "",
        "type": "address[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getSendContext",
    "outputs": [
      {
        "internalType": "uint32",
        "name": "",
        "type": "uint32"
      },
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_sender",
        "type": "address"
      },
      {
        "internalType": "uint32",
        "name": "_dstEid",
        "type": "uint32"
      }
    ],
    "name": "getSendLibrary",
    "outputs": [
      {
        "internalType": "address",
        "name": "lib",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_receiver",
        "type": "address"
      },
      {
        "internalType": "uint32",
        "name": "_srcEid",
        "type": "uint32"
      },
      {
        "internalType": "bytes32",
        "name": "_sender",
        "type": "bytes32"
      }
    ],
    "name": "inboundNonce",
    "outputs": [
      {
        "internalType": "uint64",
        "name": "",
        "type": "uint64"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "receiver",
        "type": "address"
      },
      {
        "internalType": "uint32",
        "name": "srcEid",
        "type": "uint32"
      },
      {
        "internalType": "bytes32",
        "name": "sender",
        "type": "bytes32"
      },
      {
        "internalType": "uint64",
        "name": "inboundNonce",
        "type": "uint64"
      }
    ],
    "name": "inboundPayloadHash",
    "outputs": [
      {
        "internalType": "bytes32",
        "name": "payloadHash",
        "type": "bytes32"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint32",
            "name": "srcEid",
            "type": "uint32"
          },
          {
            "internalType": "bytes32",
            "name": "sender",
            "type": "bytes32"
          },
          {
            "internalType": "uint64",
            "name": "nonce",
            "type": "uint64"
          }
        ],
        "internalType": "struct Origin",
        "name": "_origin",
        "type": "tuple"
      },
      {
        "internalType": "address",
        "name": "_receiver",
        "type": "address"
      }
    ],
    "name": "initializable",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_sender",
        "type": "address"
      },
      {
        "internalType": "uint32",
        "name": "_dstEid",
        "type": "uint32"
      }
    ],
    "name": "isDefaultSendLibrary",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "lib",
        "type": "address"
      }
    ],
    "name": "isRegisteredLibrary",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "isSendingMessage",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint32",
        "name": "_eid",
        "type": "uint32"
      }
    ],
    "name": "isSupportedEid",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_receiver",
        "type": "address"
      },
      {
        "internalType": "uint32",
        "name": "_srcEid",
        "type": "uint32"
      },
      {
        "internalType": "address",
        "name": "_actualReceiveLib",
        "type": "address"
      }
    ],
    "name": "isValidReceiveLibrary",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "receiver",
        "type": "address"
      },
      {
        "internalType": "uint32",
        "name": "srcEid",
        "type": "uint32"
      },
      {
        "internalType": "bytes32",
        "name": "sender",
        "type": "bytes32"
      }
    ],
    "name": "lazyInboundNonce",
    "outputs": [
      {
        "internalType": "uint64",
        "name": "nonce",
        "type": "uint64"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_from",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "_to",
        "type": "address"
      },
      {
        "internalType": "bytes32",
        "name": "_guid",
        "type": "bytes32"
      },
      {
        "internalType": "uint16",
        "name": "_index",
        "type": "uint16"
      },
      {
        "internalType": "bytes",
        "name": "_message",
        "type": "bytes"
      },
      {
        "internalType": "bytes",
        "name": "_extraData",
        "type": "bytes"
      }
    ],
    "name": "lzCompose",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_from",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "_to",
        "type": "address"
      },
      {
        "internalType": "bytes32",
        "name": "_guid",
        "type": "bytes32"
      },
      {
        "internalType": "uint16",
        "name": "_index",
        "type": "uint16"
      },
      {
        "internalType": "uint256",
        "name": "_gas",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_value",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "_message",
        "type": "bytes"
      },
      {
        "internalType": "bytes",
        "name": "_extraData",
        "type": "bytes"
      },
      {
        "internalType": "bytes",
        "name": "_reason",
        "type": "bytes"
      }
    ],
    "name": "lzComposeAlert",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint32",
            "name": "srcEid",
            "type": "uint32"
          },
          {
            "internalType": "bytes32",
            "name": "sender",
            "type": "bytes32"
          },
          {
            "internalType": "uint64",
            "name": "nonce",
            "type": "uint64"
          }
        ],
        "internalType": "struct Origin",
        "name": "_origin",
        "type": "tuple"
      },
      {
        "internalType": "address",
        "name": "_receiver",
        "type": "address"
      },
      {
        "internalType": "bytes32",
        "name": "_guid",
        "type": "bytes32"
      },
      {
        "internalType": "bytes",
        "name": "_message",
        "type": "bytes"
      },
      {
        "internalType": "bytes",
        "name": "_extraData",
        "type": "bytes"
      }
    ],
    "name": "lzReceive",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint32",
            "name": "srcEid",
            "type": "uint32"
          },
          {
            "internalType": "bytes32",
            "name": "sender",
            "type": "bytes32"
          },
          {
            "internalType": "uint64",
            "name": "nonce",
            "type": "uint64"
          }
        ],
        "internalType": "struct Origin",
        "name": "_origin",
        "type": "tuple"
      },
      {
        "internalType": "address",
        "name": "_receiver",
        "type": "address"
      },
      {
        "internalType": "bytes32",
        "name": "_guid",
        "type": "bytes32"
      },
      {
        "internalType": "uint256",
        "name": "_gas",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_value",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "_message",
        "type": "bytes"
      },
      {
        "internalType": "bytes",
        "name": "_extraData",
        "type": "bytes"
      },
      {
        "internalType": "bytes",
        "name": "_reason",
        "type": "bytes"
      }
    ],
    "name": "lzReceiveAlert",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "lzToken",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "nativeToken",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_sender",
        "type": "address"
      },
      {
        "internalType": "uint32",
        "name": "_dstEid",
        "type": "uint32"
      },
      {
        "internalType": "bytes32",
        "name": "_receiver",
        "type": "bytes32"
      }
    ],
    "name": "nextGuid",
    "outputs": [
      {
        "internalType": "bytes32",
        "name": "",
        "type": "bytes32"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_oapp",
        "type": "address"
      },
      {
        "internalType": "uint32",
        "name": "_srcEid",
        "type": "uint32"
      },
      {
        "internalType": "bytes32",
        "name": "_sender",
        "type": "bytes32"
      },
      {
        "internalType": "uint64",
        "name": "_nonce",
        "type": "uint64"
      },
      {
        "internalType": "bytes32",
        "name": "_payloadHash",
        "type": "bytes32"
      }
    ],
    "name": "nilify",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "sender",
        "type": "address"
      },
      {
        "internalType": "uint32",
        "name": "dstEid",
        "type": "uint32"
      },
      {
        "internalType": "bytes32",
        "name": "receiver",
        "type": "bytes32"
      }
    ],
    "name": "outboundNonce",
    "outputs": [
      {
        "internalType": "uint64",
        "name": "nonce",
        "type": "uint64"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "owner",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint32",
            "name": "dstEid",
            "type": "uint32"
          },
          {
            "internalType": "bytes32",
            "name": "receiver",
            "type": "bytes32"
          },
          {
            "internalType": "bytes",
            "name": "message",
            "type": "bytes"
          },
          {
            "internalType": "bytes",
            "name": "options",
            "type": "bytes"
          },
          {
            "internalType": "bool",
            "name": "payInLzToken",
            "type": "bool"
          }
        ],
        "internalType": "struct MessagingParams",
        "name": "_params",
        "type": "tuple"
      },
      {
        "internalType": "address",
        "name": "_sender",
        "type": "address"
      }
    ],
    "name": "quote",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "nativeFee",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "lzTokenFee",
            "type": "uint256"
          }
        ],
        "internalType": "struct MessagingFee",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "receiver",
        "type": "address"
      },
      {
        "internalType": "uint32",
        "name": "srcEid",
        "type": "uint32"
      }
    ],
    "name": "receiveLibraryTimeout",
    "outputs": [
      {
        "internalType": "address",
        "name": "lib",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "expiry",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_token",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "_to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "_amount",
        "type": "uint256"
      }
    ],
    "name": "recoverToken",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_lib",
        "type": "address"
      }
    ],
    "name": "registerLibrary",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "renounceOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint32",
            "name": "dstEid",
            "type": "uint32"
          },
          {
            "internalType": "bytes32",
            "name": "receiver",
            "type": "bytes32"
          },
          {
            "internalType": "bytes",
            "name": "message",
            "type": "bytes"
          },
          {
            "internalType": "bytes",
            "name": "options",
            "type": "bytes"
          },
          {
            "internalType": "bool",
            "name": "payInLzToken",
            "type": "bool"
          }
        ],
        "internalType": "struct MessagingParams",
        "name": "_params",
        "type": "tuple"
      },
      {
        "internalType": "address",
        "name": "_refundAddress",
        "type": "address"
      }
    ],
    "name": "send",
    "outputs": [
      {
        "components": [
          {
            "internalType": "bytes32",
            "name": "guid",
            "type": "bytes32"
          },
          {
            "internalType": "uint64",
            "name": "nonce",
            "type": "uint64"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "nativeFee",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "lzTokenFee",
                "type": "uint256"
              }
            ],
            "internalType": "struct MessagingFee",
            "name": "fee",
            "type": "tuple"
          }
        ],
        "internalType": "struct MessagingReceipt",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_to",
        "type": "address"
      },
      {
        "internalType": "bytes32",
        "name": "_guid",
        "type": "bytes32"
      },
      {
        "internalType": "uint16",
        "name": "_index",
        "type": "uint16"
      },
      {
        "internalType": "bytes",
        "name": "_message",
        "type": "bytes"
      }
    ],
    "name": "sendCompose",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_oapp",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "_lib",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint32",
            "name": "eid",
            "type": "uint32"
          },
          {
            "internalType": "uint32",
            "name": "configType",
            "type": "uint32"
          },
          {
            "internalType": "bytes",
            "name": "config",
            "type": "bytes"
          }
        ],
        "internalType": "struct SetConfigParam[]",
        "name": "_params",
        "type": "tuple[]"
      }
    ],
    "name": "setConfig",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint32",
        "name": "_eid",
        "type": "uint32"
      },
      {
        "internalType": "address",
        "name": "_newLib",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "_gracePeriod",
        "type": "uint256"
      }
    ],
    "name": "setDefaultReceiveLibrary",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint32",
        "name": "_eid",
        "type": "uint32"
      },
      {
        "internalType": "address",
        "name": "_lib",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "_expiry",
        "type": "uint256"
      }
    ],
    "name": "setDefaultReceiveLibraryTimeout",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint32",
        "name": "_eid",
        "type": "uint32"
      },
      {
        "internalType": "address",
        "name": "_newLib",
        "type": "address"
      }
    ],
    "name": "setDefaultSendLibrary",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_delegate",
        "type": "address"
      }
    ],
    "name": "setDelegate",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_lzToken",
        "type": "address"
      }
    ],
    "name": "setLzToken",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_oapp",
        "type": "address"
      },
      {
        "internalType": "uint32",
        "name": "_eid",
        "type": "uint32"
      },
      {
        "internalType": "address",
        "name": "_newLib",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "_gracePeriod",
        "type": "uint256"
      }
    ],
    "name": "setReceiveLibrary",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_oapp",
        "type": "address"
      },
      {
        "internalType": "uint32",
        "name": "_eid",
        "type": "uint32"
      },
      {
        "internalType": "address",
        "name": "_lib",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "_expiry",
        "type": "uint256"
      }
    ],
    "name": "setReceiveLibraryTimeout",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_oapp",
        "type": "address"
      },
      {
        "internalType": "uint32",
        "name": "_eid",
        "type": "uint32"
      },
      {
        "internalType": "address",
        "name": "_newLib",
        "type": "address"
      }
    ],
    "name": "setSendLibrary",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_oapp",
        "type": "address"
      },
      {
        "internalType": "uint32",
        "name": "_srcEid",
        "type": "uint32"
      },
      {
        "internalType": "bytes32",
        "name": "_sender",
        "type": "bytes32"
      },
      {
        "internalType": "uint64",
        "name": "_nonce",
        "type": "uint64"
      }
    ],
    "name": "skip",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "transferOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint32",
            "name": "srcEid",
            "type": "uint32"
          },
          {
            "internalType": "bytes32",
            "name": "sender",
            "type": "bytes32"
          },
          {
            "internalType": "uint64",
            "name": "nonce",
            "type": "uint64"
          }
        ],
        "internalType": "struct Origin",
        "name": "_origin",
        "type": "tuple"
      },
      {
        "internalType": "address",
        "name": "_receiver",
        "type": "address"
      }
    ],
    "name": "verifiable",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint32",
            "name": "srcEid",
            "type": "uint32"
          },
          {
            "internalType": "bytes32",
            "name": "sender",
            "type": "bytes32"
          },
          {
            "internalType": "uint64",
            "name": "nonce",
            "type": "uint64"
          }
        ],
        "internalType": "struct Origin",
        "name": "_origin",
        "type": "tuple"
      },
      {
        "internalType": "address",
        "name": "_receiver",
        "type": "address"
      },
      {
        "internalType": "bytes32",
        "name": "_payloadHash",
        "type": "bytes32"
      }
    ],
    "name": "verify",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
]