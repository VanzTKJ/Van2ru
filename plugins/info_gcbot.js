import fetch from 'node-fetch'

//Plugin By Xynoz!!
let handler = async (m, { conn, usedPrefix }) => {

    conn.sendButton(m.chat, '*Group Official Xynoz*\n\n*Link* : https://chat.whatsapp.com/J5qUMoYUrtFKQEzXTg0Fit', wm, null, [['Owner', '/owner']],m)
}
handler.command = /^(gcbot|groupbot)$/i
handler.tags = ['info']
handler.help = ['gcbot']
handler.premium = false
handler.limit = false

export default handler