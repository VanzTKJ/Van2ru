import fetch from 'node-fetch'

//Plugin By Xynoz!!
let handler = async (m, { conn, usedPrefix }) => {

   conn.sendButton(m.chat, ' *PANELKU HOST*\n\n*MINI*\n1GB RAM, 2GB DISK, 40% CPU Rp.12.000\n*KLASIK*\n2GB RAM, 3GB DISK, 50% CPU Rp.18.000\n*MEDIUM*\n3GB RAM, 3GB DISK, 70% CPU Rp.24.000\n*HARD*\n4GB RAM, 4GB DISK, 100% CPU Rp.36.000\n*PAYMENT :*\n_- ( DANA | QRIS ) -_', wm, null, [['Owner',`/owner`]],m)
}
handler.command = /^(listpanel)$/i
handler.tags = ['info']
handler.help = ['listpanel']
handler.premium = false
handler.limit = false

export default handler