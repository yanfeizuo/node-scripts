import { Client, fetchExchange } from '@urql/core'
import { ethers } from 'ethers';

const coreSumerSubgraphUrl = "https://thegraph.coredao.org/subgraphs/name/sumer-core"
const coreRpc = "https://rpc.coredao.org"

const client = new Client({
  url: coreSumerSubgraphUrl,
  exchanges: [fetchExchange],
  requestPolicy: "network-only"
})

const sumerPositionQL = (block, first, skip) => {
  return `
    query {
      accountCTokens(block: {number: ${block}}, first: ${first}, skip: ${skip}) {
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
}

;(async () => {
  const first = 100
  let skip = 0
  
  const provider = new ethers.JsonRpcProvider(coreRpc)
  const block = await provider.getBlock('latest')
  console.log('latest block number', block.number)
  const before2Block = await provider.getBlock(block.number - 60000)
  const blockNumber = before2Block.number
  console.log('blockNumber', blockNumber)
  
  const result = await client.query(sumerPositionQL(blockNumber, first, skip), {})
  console.log('result', result)
})()