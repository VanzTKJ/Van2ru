import fetch from "node-fetch"

import { generateWAMessageFromContent } from "@adiwajshing/baileys"

let handler  = async (m, { conn }) => {

 let pp = 'wa.me/6283839200413'

  try {

    pp = await conn.profilePictureUrl(m.sender, 'image')

  } catch (e) {

  }

let msg = await generateWAMessageFromContent(m.chat, { locationMessage: {

  degreesLatitude: 0,

  degreesLongitude: 0,

  name: '𝗠𝗨𝗟𝗧𝗜 𝗗𝗘𝗩𝗜𝗖𝗘 𝗕𝗢𝗧',

  address: `178-9 Yeonji-dong, Busanjin-gu, Busan, Korea Selatan`,

  url: 'wa.me/6283839200413',

  isLive: true,

  accuracyInMeters: 2,

  speedInMps: 2,

  degreesClockwiseFromMagneticNorth: 2,

  comment: '',

  jpegThumbnail: await( await fetch(pp)).buffer()

}}, { quoted: m })

return conn.relayMessage(m.chat, msg.message, {})

}

handler.command = /^loc1$/

handler.owner = false

export default handler