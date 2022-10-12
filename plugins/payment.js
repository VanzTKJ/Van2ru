import fetch from 'node-fetch'

//Plugin By Xynoz!!
let handler = async (m, { conn, usedPrefix }) => {
	let url = 'https://telegra.ph/file/53d9930959ca0de7f42db.jpg'
	conn.sendButton(m.chat, '╭─「_• Pulsa •_」\n│ • Axis [-]\n╰────\n\n╭─「_• Dana/Gopay •_」\n│ • Dana [081336519225]\n│ • Gopay [081336519225]\n╰────\n\n_Note : Krm Bukti Transfer Ke Owner Jika Sudah Melakukan Pembayaran!!_', wm, await(await fetch(url)).buffer(), [['Owner',`/owner`]], m, {
		contextInfo: {
			forwardingScore: global.fsizedoc,
			isForwarded: pickRandom([true, false, true, false])
			externalAdReply: {
				showAdAttribution: true,
				title: global.ucapan,
				body: '👋 Hay Kak :> ' + name,
				thumbnail: await (await fetch(pp)).buffer(),
				previewType: 'PHOTO',
				sourceUrl: global.sgh
			}
		}
	})
}
handler.command = /^(pay|payment|bayar)$/i
handler.tags = ['info']
handler.help = ['payment']
handler.premium = false
handler.limit = false

export default handler
