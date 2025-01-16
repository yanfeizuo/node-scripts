import Sumer from "@meterio/sumer-js";
import { ContractEventPayload } from "ethers";
import { ethers } from "ethers";

;(async () => {
  // const rpc = "wss://wstest.meter.io"
  const rpc = "wss://ws.meter.io"
  // const rpc = "wss://rpc.zklink.io"
  // ethereum
  // const rpc = "wss://ethereum.blockpi.network/v1/ws/b820ea44d5071a57f67e97f585153f5361fa6312"
  // arbitrum
  // const rpc = "wss://arbitrum.blockpi.network/v1/ws/99d7ae24bfb7a0cc74341673f7a8f7caef9a653e"
  const sdrAddr = "0xC211a250FC30122ee107aC9Acf6686110339520f".toLowerCase()
  const provider = new ethers.WebSocketProvider(rpc)
  const contract = new ethers.Contract(sdrAddr, Sumer.abi.CErc20, provider)
  console.log('watch', rpc)
  contract.on("Redeem", async (redeemer, amount, token, event) => {
    console.log({redeemer, amount, token})
    await contract.removeAllListeners()
    console.log('event', event.emitter.target)
    console.log('remove listener')
  })

  console.log('contract.target', contract.target)

  provider.websocket.onerror = (e) => {
    console.log('err', e)
  }

  // const pairs = Sumer.getTokenPairs('metertest')
  // console.log('pairs', pairs.filter(p => p.ctokenSym.startsWith('sdr') && !p.ctokenSym.startsWith('sdrsu')))
})()