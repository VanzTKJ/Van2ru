import fetch from 'node-fetch'

//Plugin By Xynoz!!
let handler = async (m, { conn, usedPrefix }) => {

    conn.sendButton(m.chat, '*Format salah! Contoh :*\n*○ .gc close*\n*○ .gc open*\n*○ .gc unlock*\n*○ .gc lock*', wm, 'https://telegra.ph/file/7260e9b6f06f6fddb386d.jpg', [['Open', '.gc open'], ['Close', '.gc close']],m)
}
handler.help = ['group *open / close*']
handler.tags = ['group']
handler.command = /^(group)$/i

handler.admin = true
handler.botAdmin = true

export default handler