import fetch from 'node-fetch'

//Plugin By Xynoz!!
let handler = async (m, { conn, usedPrefix }) => {

    conn.sendButton(m.chat, '*Coming Soon*', wm, null, [['Owner', '/owner']],m)
}
handler.command = /^(jasarun)$/i
handler.tags = ['info']
handler.help = ['jasarun']
handler.premium = false
handler.limit = false

export default handler