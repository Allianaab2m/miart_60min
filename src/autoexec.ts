import WebSocket from "ws"
global.WebSocket = WebSocket
import { timeline, main } from "./misskey"
import axios from "axios"
import * as dotenv from "dotenv"

dotenv.config()
const TOKEN = process.env.MI_TOKEN
if (!TOKEN) throw new Error("MI_TOKEN undefined")

timeline.on('note', async (n) => {
  if (n.text?.includes("#深夜の真剣お絵描き60分一本勝負_art")) {
    await axios.post(
      "https://misskey.art/api/notes/create",
      JSON.stringify({
        i: TOKEN,
        visibility: "followers",
        text: null,
        renoteId: n.id
      }),
      { headers: { 'Content-Type': 'application/json' } }
    )
  } else {
    console.log(n.text)
  }
})

main.on("followed", async (u) => {
  try {
    console.log(u.id)
    await axios.post(
      "https://misskey.art/api/following/create",
      JSON.stringify({
        i: TOKEN,
        userId: u.id
      }),
      { headers: { 'Content-Type': 'application/json' } }
    )
  } catch (e) {
    console.log(e)
  }
})
