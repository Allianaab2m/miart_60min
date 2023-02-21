import * as dotenv from "dotenv"
import WebSocket from "ws"
global.WebSocket = WebSocket
import * as Misskey from "misskey-js"

dotenv.config()

const TOKEN = process.env.MI_TOKEN

if (!TOKEN) throw new Error("MI_TOKEN undefined")
const stream = new Misskey.Stream("https://misskey.art", { token: TOKEN })

export const misskey = new Misskey.api.APIClient({
  origin: "https://misskey.art",
  credential: TOKEN
})

export const timeline = stream.useChannel("homeTimeline")
export const main = stream.useChannel("main")
