import fetch from 'node-fetch'

//Plugin By Xynoz!!
let handler = async (m, { conn, usedPrefix }) => {

    conn.sendButton(m.chat, '*❲ Premium User ❳*\n\n⎇ 1ʙᴜʟᴀɴ 7ᴋ\n⎇ 2ʙᴜʟᴀɴ 14ᴋ\n⎇ 6ʙᴜʟᴀɴ 42ᴋ\n⎇ 1ᴛᴀʜᴜɴ 84ᴋ\n\n*Keuntungan?*\n\n- Akses Semua  Fitur\n- Akses Join Limit 1\n- Akes Cheat Limit, Exp, Dan Money\n\n*ᴍɪɴᴀᴛ ᴄʜᴀᴛ ᴏᴡɴᴇʀ*', wm, null, [['Owner', '/owner']],m)
}
handler.command = /^(uppremium|prem|premium)$/i
handler.tags = ['info']
handler.help = ['uppremium']
handler.premium = false
handler.limit = false

export default handler