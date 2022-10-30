let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
*––––| WA MOD |––––*

*Tersedia Wa Mod Unclone, Wa Mod Clone Dan, Wa Businesss Beta Tinggal Download!.*

Link : https://teknosimple.com/UJZjU

*Subscribe YT Xynoz*
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '♨️ WA MOD ♨️', 'status@broadcast')
}
handler.command = /^(wamod)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

export default handler 
 