const items = {
    buy: {
        token: {
            exp: 999
        },
        jointoken: {
            money: 20000000
        },
        potion: {
            money: 1250,
        },
        trash: {
            money: 4,
        }
    },
    sell: {
        potion: {
            money: 1250,
        },
        trash: {
            money: 4
        }
    }
}

let handler = async (m, { command, usedPrefix, args }) => {
    let user = global.db.data.users[m.sender]
    const listItems = Object.fromEntries(Object.entries(items[command.toLowerCase()]).filter(([v]) => v && v in user))
    
    let text = ''
    let footer = ''
    let image = ''
    let buttons = ''
    text = (command.toLowerCase() == 'buy' ?
(`
*––––––––『 BUY 』––––––––*
`.trim()) : 
(`
*––––––––『 SELL 』––––––––*
`.trim())
)
    footer = (command.toLowerCase() == 'buy' ?
(`
🔖 ᴅᴀꜰᴛᴀʀ ʙᴀʀᴀɴɢ :
${Object.keys(listItems).map((v) => {
        let paymentMethod = Object.keys(listItems[v]).find(v => v in user)
        return `⮕ 1 ${global.rpg.emoticon(v)}${v} ﹫ ${listItems[v][paymentMethod]} ${global.rpg.emoticon(paymentMethod)}${paymentMethod}`.trim()
    }).join('\n')}
–––––––––––––––––––––––––
💁🏻‍♂ ᴘᴀɴᴅᴜᴀɴ :
⮕ ᴄᴀʀᴀ ᴍᴇᴍʙᴇʟɪ ʙᴀʀᴀɴɢ:
${usedPrefix}${command} [item] [Jumlah]
★ ᴄᴏɴᴛᴏʜ:
${usedPrefix}${command} potion 10
`.trim()) : 
(`
🔖 ᴅᴀꜰᴛᴀʀ ʙᴀʀᴀɴɢ :
${Object.keys(listItems).map((v) => {
        let paymentMethod = Object.keys(listItems[v]).find(v => v in user)
        return `⮕ 1 ${global.rpg.emoticon(v)}${v} ﹫ ${listItems[v][paymentMethod]} ${global.rpg.emoticon(paymentMethod)}${paymentMethod}`.trim()
    }).join('\n')}
–––––––––––––––––––––––––
💁🏻‍♂ ᴘᴀɴᴅᴜᴀɴ  :
⮕ ᴄᴀʀᴀ ᴊᴜᴀʟ ʙᴀʀᴀɴɢ:
${usedPrefix}${command} [item] [Jumlah]
★ ᴄᴏɴᴛᴏʜ:
${usedPrefix}${command} potion 10
`.trim())
)
    image = (command.toLowerCase() == 'buy' ?
('./media/buy.jpg') : 
('./media/sell.jpg')
)
    buttons = (command.toLowerCase() == 'buy' ?
([
[`ʙᴇʟɪ ᴛᴏᴋᴇɴ`, `${usedPrefix}buy token`],
[`ʙᴇʟɪ ʀᴀᴍᴜᴀɴ`, `${usedPrefix}buy potion`]
]) : 
([
[`ᴊᴜᴀʟ ʀᴀᴍᴜᴀɴ`, `${usedPrefix}sell potion`],
[`ᴊᴜᴀʟ ꜱᴀᴍᴘᴀʜ`, `${usedPrefix}sell trash`]
])
)
    const item = (args[0] || '').toLowerCase()
    const total = Math.floor(isNumber(args[1]) ? Math.min(Math.max(parseInt(args[1]), 1), Number.MAX_SAFE_INTEGER) : 1) * 1
    if (!listItems[item]) return conn.sendButton(m.chat, text, footer, image, buttons, m, {asLocation: true})
    if (command.toLowerCase() == 'buy') {
        let paymentMethod = Object.keys(listItems[item]).find(v => v in user)
        if (user[paymentMethod] < listItems[item][paymentMethod] * total) return conn.sendButton(m.chat,
`*–『 KREDIT TIDAK MENCUKUPI 』–*`, 
`ᴋᴀᴍᴜ ᴍᴇᴍʙᴜᴛᴜʜᴋᴀɴ *${(listItems[item][paymentMethod] * total) - user[paymentMethod]}* ${global.rpg.emoticon(paymentMethod)}${paymentMethod} ᴛᴏ ʙᴜʏ *${total}* ${global.rpg.emoticon(item)}${item}.
ᴋᴀᴍᴜ ʜᴀɴʏᴀ ᴍᴇᴍᴘᴜɴʏᴀɪ *${user[paymentMethod]}* ${global.rpg.emoticon(paymentMethod)}${paymentMethod} ᴅɪ ᴛᴀꜱ.
–––––––––––––––––––––––––
💁🏻‍♂ ᴘᴀɴᴅᴜᴀɴ :
ʙᴜᴋᴀ ᴘᴇᴛɪ & ᴋᴜᴍᴘᴜʟᴋᴀɴ ʜᴀᴅɪᴀʜ.
⮕ ᴜɴᴛᴜᴋ ᴍᴇᴍʙᴜᴋᴀ ᴘᴇᴛɪ:
.open crate
⮕ ᴜɴᴛᴜᴋ ᴍᴇɴɢᴜᴍᴘᴜʟᴋᴀɴ ʜᴀᴅɪᴀʜ:
.adventure | .daily | .monthly
`.trim(), './media/lowcredit.jpg', [
[`ᴛᴀɴʏᴀ ᴋᴇ ꜱᴇᴍᴜᴀ ᴀɴɢɢᴏᴛᴀ ɢʀᴜᴘ`, `${usedPrefix}hidetag ꜱᴇꜱᴇᴏʀᴀɴɢ ᴛᴏʟᴏɴɢ ᴋɪʀɪᴍ *${(listItems[item][paymentMethod] * total) - user[paymentMethod]}* ${global.rpg.emoticon(paymentMethod)}${paymentMethod} ᴛᴏ ᴍᴇ.
⮕ ᴄᴀʀᴀ ᴋɪʀɪᴍ ${paymentMethod}:
${usedPrefix}transfer ${paymentMethod} ${(listItems[item][paymentMethod] * total) - user[paymentMethod]} @${conn.getName(m.sender)}`]
], m, {asLocation: true})
        user[paymentMethod] -= listItems[item][paymentMethod] * total
        user[item] += total
        return conn.sendButton(m.chat,
`*––––––『 DIBELI 』––––––*`,
`ᴋᴀᴍᴜ ᴍᴇᴍʙᴇʟɪ ${total} ${global.rpg.emoticon(item)}${item}*.
`.trim(), `./media/bought.jpg`, [
[`ᴘᴇɴʏɪᴍᴘᴀɴᴀɴ ᴋᴀᴍᴜ`, `${usedPrefix}inventory`]
], m, {asLocation: true})
    } else {
        if (user[item] < total) return m.reply(`Anda tidak punya cukup *${global.rpg.emoticon(item)}${item}* untuk menjual,Anda hanya punya ${user[item]} items`)
        user[item] -= total
        user.money += listItems[item].money * total
        return conn.sendButton(m.chat,
`*–––––––『 SOLD 』–––––––*`,
`ʏᴏᴜ *sᴏʟᴅ ${total} ${global.rpg.emoticon(item)}${item}*.
`.trim(), `./media/sold.jpg`, [
[`ɪɴᴠᴇɴᴛᴏʀʏ`, `${usedPrefix}inventory`]
], m, {asLocation: true})
    }
}

handler.help = ['buy', 'sell'].map(v => v + ' [item] [count]')
handler.tags = ['rpg']
handler.command = /^(buy|sell)$/i

handler.disabled = false

export default handler

function isNumber(number) {
    if (!number) return number
    number = parseInt(number)
    return typeof number == 'number' && !isNaN(number)
}
