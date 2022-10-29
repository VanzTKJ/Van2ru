import fetch from 'node-fetch'

//Plugin By Xynoz!!
let handler = async (m, { conn, usedPrefix }) => {

    conn.sendButton(m.chat, '* 『 ꜱᴇᴡᴀ ʙᴏᴛ 』 *\n\n⎇ 1 ʙᴜʟᴀɴ 5 ʀɪʙᴜ\n⎇ 4 ʙᴜʟᴀɴ 15 ʀɪʙᴜ\n⎇ 6 ʙᴜʟᴀɴ 20 ʀɪʙᴜ \n *ᴋᴇɴᴀᴘᴀ ʜᴀʀᴜꜱ ꜱᴇᴡᴀ ꜰʀᴏɴʙᴏᴛ ? *\n - ꜰʀᴏɴʙᴏᴛ ᴛᴀᴋ ʟᴀɢɪ ᴍᴇɴɢᴀʟᴀᴍɪ ᴍᴀꜱᴀʟᴀʜ ᴏꜰꜰʟɪɴᴇ \n- ᴀᴅᴍɪɴ ꜰᴀꜱᴛ ʀᴇꜱᴘᴏɴ \n - ᴋᴇᴄᴇᴘᴀᴛᴀɴ ʙᴏᴛ ʀᴇꜱᴘᴏɴ ᴛɪɴɢɢɪ \n ᴀᴘᴀʙɪʟᴀ ᴀᴅᴀ ɢᴀɴɢɢᴜᴀɴ ʙᴏᴛ ᴀᴅᴍɪɴ ᴍᴇᴍʙᴇʀɪ ɢᴀʀᴀɴꜱɪ ᴋᴇᴘᴀᴅᴀ ᴋᴀʟɪᴀɴ\n*ꜱɪꜱᴛᴇᴍ ꜱᴇᴡᴀ : ʙᴀʏᴀʀ - ʙᴏᴛ ᴍᴀꜱᴜᴋ ᴋᴇ ɢʀᴜᴘ - ᴋᴇʟᴜᴀʀ ꜱᴇꜱᴜᴀɪ ᴅᴜʀᴀꜱɪ ꜱᴇᴡᴀ*', wm, null, [['Kontak Admin', '/owner']],m)
}
handler.command = /^(sewabot)$/i
handler.tags = ['info']
handler.help = ['sewabot']
handler.premium = false
handler.limit = false

export default handler
