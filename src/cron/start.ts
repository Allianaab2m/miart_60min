import Timer from "../timer"
import axios from "axios"
import * as dotenv from "dotenv"

(async() => {
  dotenv.config()
  const TOKEN = process.env.MI_TOKEN
  if (!TOKEN) throw new Error("MI_TOKEN undefined")

  const timer = new Timer()

  await axios.post(
    "https://misskey.art/api/notes/create",
    JSON.stringify({
      i: TOKEN,
      visibility: "followers",
      text: timer.start()
    }),
    { headers: { 
      "Content-Type": "application/json"
    } }
  )
})()
