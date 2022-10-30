import fs from 'fs'
import fetch from 'node-fetch'
import moment from 'moment-timezone'
let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `_👋Hallo Ganteng/Cantik_\n\n╰► *єƖαɪηα-ʙᴏᴛᴢ | ʙу xуηᴏᴢ*
╲╲╭━━━━╮
╭╮┃▆┈┈▆┃╭╮
┃╰┫▽▽▽┣╯┃
╰━┫△△△┣━╯
╲╲┃┈┈┈┈┃
╲╲┃┈┏┓┈┃
▔▔╰━╯╰━╯
`

let audioName = "PTT-20220913-WA0639.opus";
let audioPTT = fs.readFileSync('./mp3/' + audioName)

        conn.sendFile(m.chat, audioPTT, '', '', m, true, { ptt: true })
await conn.sendButton(m.chat, `┅┅┅┅┅┅╢Elaina-Botz╟┅┅┅┅┅┅\n\nHai Kak ${wish()}\n\nJangan Spam Bot Yah Kak ^_^\n\n𝙘𝙡𝙞𝙘𝙠 𝙩𝙝𝙚 𝙗𝙪𝙩𝙩𝙤𝙣 𝙗𝙚𝙡𝙤𝙬 𝙩𝙤 𝙙𝙞𝙨𝙥𝙡𝙖𝙮 𝙩𝙝𝙚 𝙢𝙚𝙣𝙪 ⇩\n`,wm + '\n\n' + botdate, thumb, [['• Click Here •','/menu']], m, {
contextInfo: { externalAdReply :{
                        mediaUrl: '',
                        mediaType: 2,
                        description: 'anu',
                        title: bottime,
                        body: 'єƖαɪηα-ʙᴏᴛᴢ | ʙу xуηᴏᴢ',          previewType: 0,
                        thumbnail: fs.readFileSync("./thumbnail.jpg"),
                        sourceUrl: sgh
                      }}
})
}
handler.tags = ['info', 'main']
handler.customPrefix = /^(help|?|p|tes|test|bot|bang)$/i
handler.command = new RegExp

handler.register = false
handler.exp = 3

export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function wish() {
    let wishloc = ''
  const time = moment.tz('Asia/Kolkata').format('HH')
  wishloc = ('Hi')
  if (time >= 0) {
    wishloc = ('Selamat Malam🌃')
  }
  if (time >= 4) {
    wishloc = ('Selamat Pagi🌄')
  }
  if (time >= 12) {
    wishloc = ('Selamat Siang☀️')
  }
  if (time >= 16) {
    wishloc = ('️ Selamat Malam🌇')
  }
  if (time >= 23) {
    wishloc = ('Selamat Malam🌙')
  }
  return wishloc
}

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}