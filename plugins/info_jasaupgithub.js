import fetch from 'node-fetch'

//Plugin By Xynoz!!
let handler = async (m, { conn, usedPrefix }) => {

    conn.sendButton(m.chat, '*Jasa Upload Github 10K Ke Akun Pribadi Kamu*\n\n*Minat Chat Owner*', wm, null, [['Owner', '/owner']],m)
}
handler.command = /^(upgithub|uploadgithub)$/i
handler.tags = ['info']
handler.help = ['uploadgithub']
handler.premium = false
handler.limit = false

export default handler