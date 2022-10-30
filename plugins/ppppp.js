import { generateWAMessageFromContent } from "@adiwajshing/baileys"

let handler  = async (m, { conn }) => {


let menu = ` • Menu Kontol •
ok

ok`

//Name : Xynoz

//Tes

//tes

//tes

let prep = generateWAMessageFromContent(m.chat, { liveLocationMessage: { 

degreesLatitude: 34.672314, degreesLongitude: 135.484802,

caption: menu,

sequenceNumber: 1656662972682001, timeOffset: 8600, jpegThumbnail: null

}}, { quoted: m

					})

return conn.relayMessage(m.chat, prep.message, { messageId: prep.key.id })

}

handler.command = /^loc2$/

handler.owner = false

export default handler