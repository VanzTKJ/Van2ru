import fetch from 'node-fetch'

//Plugin By Xynoz!!
let handler = async (m, { conn, usedPrefix }) => {

    conn.sendButton(m.chat, '*❲ ꜱᴇᴡᴀ ʙᴏᴛ ❳*\n\n⎇ 1ʙᴜʟᴀɴ 6ᴋ\n⎇ 2ʙᴜʟᴀɴ 12ᴋ\n⎇ 6ʙᴜʟᴀɴ 36ᴋ\n⎇ 1ᴛᴀʜᴜɴ 72ᴋ\n\n*ᴍɪɴᴀᴛ ᴄʜᴀᴛ ᴏᴡɴᴇʀ*', wm, null, [['Owner', '/owner']],m)
}
handler.command = /^(sewabot|sewa|belibot)$/i
handler.tags = ['info']
handler.help = ['sewabot']
handler.premium = false
handler.limit = false

export default handler