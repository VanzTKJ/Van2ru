import fs from 'fs'
let handler = async (m, { conn, args, command }) => {
let totalf = Object.values(global.plugins).filter(
    (v) => v.help && v.tags
  ).length;
 await conn.sendButton(m.chat, `*SUBS YT XYNOZ*\n\nhttps://youtube.com/channel/UCm2jNvB02_cejKbLpN574hQ\n\n Jangan Lupa Subscribe Untuk Mengetahui Video Terbaru..`,wm + '\n\n' + botdate, giflogo, [['OK','ok']], m, {
contextInfo: { externalAdReply :{
                        mediaUrl: '',
                        mediaType: 2,
                        description: 'anu',
                        title: bottime,
                        body: '⚘ ᴄʀᴇᴀᴛᴇ ʙʏ xʏɴᴏᴢ',          previewType: 0,
                        thumbnail: fs.readFileSync("./thumbnail.jpg"),
                        sourceUrl: 'https://youtube.com/channel/UCpn5v0YkmK8jJxVWETYU02Q'
                      }}
})
}


handler.help = ['ytbot']
handler.tags = ['info']
handler.command = ['ytbot']
export default handler