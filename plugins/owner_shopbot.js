let handler = async (m, { conn }) => {
let info = `
*Silahkan Di Pilih Kak*
`
const sections = [
   {
    title: `Owner Menyediakan Jasa`,
	rows: [
	    {title: "SewaBot", rowId: '.sewabot', description: 'SewaBot By Xynoz' },
	    {title: "Up Premium ", rowId: '.premium', description: 'Upgrade Ke Premium Users' },
    {title: "JadiBot Xynoz", rowId: '.jasarun', description: 'Jasa JadiBot Xynoz' },
	{title: "Harga Panel", rowId: '.listpanel', description: 'Harga Panel' },
	{title: "Jasa Upload Github", rowId: '.upgithub', description: 'Jasa Upload SC Ke Github' },
	]
    }, {
    	title: `Main Bot Elaina`,
	rows: [
	    {title: "Owner", rowId: '.owner', description: 'Ownet Elaina Botz' },
	    {title: "Group Bot", rowId: '.gcbot', description: 'Group OfficialBotz' },
    {title: "SC Bot", rowId: '.sc', description: 'SC Bot Elaina' },
	{title: "Runtime", rowId: '.runtime', description: 'Run Time Bot,' },
	{title: "YouTube Bot", rowId: '.ytbot', description: 'Subscribe YouTube Xynoz!!' },
	]
    }, {
    title: `Developer`,
	rows: [
	    {title: "📍 Kontak Xynoz ", rowId: '.owner', description: 'Kontak Xynoz ()' },
	    ]
        },
]

const listMessage = {
  text: 'Xynoz SHOP ',
  footer: info,
  title: null,
  buttonText: "Klick Disini 🛒",
  sections
}
await conn.sendMessage(m.chat, listMessage, { quoted: m})
//conn.sendHydrated(m.chat, info, wm, null, sgc, "ðŸŒŽ Group Official", null,null, [['Owner','.owner']], m)
}
handler.help = ['shop']
handler.tags = ['main', 'info']
handler.command = /^shop$/i
handler.premium = false

export default handler