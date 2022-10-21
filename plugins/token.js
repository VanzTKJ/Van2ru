let handler = async (m) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    if (typeof db.data.users[who] == 'undefined') throw 'Pengguna tidak ada didalam data base'
    m.reply(`*${global.db.data.users[who].token}* *ꜱɪꜱᴀ ᴛᴏᴋᴇɴ ᴋᴀᴍᴜ* =͟͟͞͞🏀
    ᴋᴇᴛɪᴋ ᴘᴇʀɪɴᴛᴀʜ #token ᴜɴᴛᴜᴋ ᴄᴇᴋ ᴛᴏᴋᴇɴ ᴋᴀᴍᴜ`)
}
handler.help = ['token [@user]']
handler.tags = ['xp']
handler.command = /^(token)$/i
export default handler 
