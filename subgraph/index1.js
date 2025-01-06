import axios from "axios";

const coreSumerSubgraphUrl = "https://api.studio.thegraph.com/query/50539/sumer-bsc/version/latest"

const sumerPositionQL = `
  query providers($block: Block_height, $first: Int, $skip: Int) {
    accountCTokens(block: $block, first: $first, skip: $skip) {
      cTokenBalance
      market {
        exchangeRate
        symbol
        decimals
        borrowIndex
        id
        underlyingAddress
        reserves
        cash
        totalBorrows
      }
      storedBorrowBalance
      accountBorrowIndex
      account {
        id
      }
    }
  }
`

const lpUrl = "https://graph-meter.voltswap.finance/subgraphs/name/meterio/voltswapv2-subgraph"

const lpPair = `
  query pair($id: String!) {
    pair(id: $id) {
      token0 {
        id,
        derivedETH
      },
      token1 {
        id,
        derivedETH
      }
    }
  }
`

const lpQuery = `
  query lpMints($first: Int, $skip: Int, $pairs: [String!]!) {
    mints(first: $first, skip: $skip, where: {pair_in: $pairs}) {
      to
    }
  }
`

const lpUrlBase = "https://api.studio.thegraph.com/query/50539/listen-base/version/latest"
const lpQueryBase = `
  query lpUsers($first: Int, $skip: Int) {
    users(first: $first, skip: $skip) {
      addr
    }
  }
`

;(async () => {
  const first = 100
  let skip = 0
  const block = 45458395
  try {
    const response = await axios.post(coreSumerSubgraphUrl, {
      query: sumerPositionQL,
      variables: {
        first,
        skip,
        block: {
          number: Number(block)
        },
      }
    });
    // console.log(response.data.errors[0].message)
    if (response.data.errors) {
      const stringfy = JSON.stringify(response.data.errors)
      console.log('response.data.errors', stringfy)
      const errorMessage = stringfy // response.data.errors[0].message
      const regex = /indexed up to block number (\d+)/;
      const match = errorMessage.match(regex);

      if (match) {
        const blockNumber = match[1];
        console.log('blockNumber', blockNumber, typeof blockNumber)
      }
    }
    console.log('12')
    // console.log('response', response.data.data.accountCTokens)

    // const response = await axios.post(lpUrl, {
    //   query: lpQuery,
    //   variables: {
    //     first,
    //     skip,
    //     pairs: ["0x7fc466b277886fd1be0f3b33c4d8197cf323b718", "0xac4c5aa6983ca82b552388b1a889509af746e5c3"]
    //   }
    // });
    // console.log('response', response.data.data.mints)

    // const response = await axios.post(lpUrl, {
    //   query: lpPair,
    //   variables: {
    //     id: "0xd35818ca23c0e9879a13c9be6dd64267006578b9"
    //   }
    // });
    // console.log('response', response.data.data.pair)

    // const response = await axios.post(lpUrlBase, {
    //   query: lpQueryBase,
    //   variables: {
    //     first,
    //     skip
    //   }
    // });
    // console.log('response', response.data.data.users.length)
  } catch(e) {
    console.log(e)
  }
})()