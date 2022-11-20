const { WAMessageStubType } = (await import('@adiwajshing/baileys')).default
import { format } from 'util';

const isNumber = x => typeof x === 'number' && !isNaN(x)
const delay = ms => isNumber(ms) && new Promise(resolve => setTimeout(function () {
    clearTimeout(this)
    resolve()
}, ms))

export async function all(m) {
	if (m.fromMe && m.isBaileys) return !0
	let text;
	let setting = global.db.data.settings[this.user.jid]
	if(!setting.anticall) return 
	
	if (m.messageStubType === (WAMessageStubType.CALL_MISSED_VOICE || WAMessageStubType.CALL_MISSED_VIDEO)) {
		await this.reply(m.chat, '𝐒𝐢𝐬𝐭𝐞𝐦 𝐚𝐮𝐭𝐨  𝐛𝐥𝐨𝐜𝐤𝐢𝐫 𝐨𝐥𝐞𝐡 𝐛𝐨𝐭 𝐤𝐚𝐫𝐞𝐧𝐚 𝐭𝐞𝐥𝐚𝐡 𝐦𝐞𝐥𝐚𝐧𝐠𝐠𝐚𝐫 𝐚𝐭𝐮𝐫𝐚𝐧 𝐛𝐨𝐭\𝐧\𝐧*📮𝐃𝐢𝐥𝐚𝐫𝐚𝐧𝐠 𝐦𝐞𝐧𝐞𝐥𝐞𝐩𝐨𝐧 𝐛𝐨𝐭!*,Hubungin pemilik wa.me/6281252733108/text=kena+blokir', null)
		await delay(1000)
		await this.updateBlockStatus(m.chat, "block")
	}
}




































/*

JANGAN DI HAPUS!!


Made By FokusDotId (Fokus ID)

https://github.com/FokusDotId

*/
