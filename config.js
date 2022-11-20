//follow tiktok :@nafronanjay2
//selamat memakai
//kasih jangan lupa kasih star kak ^-^

import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import moment from 'moment-timezone'

/*============= WAKTU =============*/
let wibh = moment.tz('Asia/Jakarta').format('HH')
    let wibm = moment.tz('Asia/Jakarta').format('mm')
    let wibs = moment.tz('Asia/Jakarta').format('ss')
    let wktuwib = `${wibh} H ${wibm} M ${wibs} S`
    
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
      

/*============== INFO OWNER ==============*/
global.sig = 'https://instagram.com/nafronam'// instagram kamu
global.sgh = '-' //github kamu
global.sgc = 'https://chat.whatsapp.com/EY4qJSyz3W8CsjAxpPcfoI'//grubwa kamu
global.swa = 'wa.me/6281252733108'//nomor kamu

/*============== PAYMENT ==============*/
global.pdana = '081252733108'//pembayaran kalau ada yang mau beli
global.povo = '081252733108'
global.pgopay = '081252733108'
global.ppulsa = '081252733108'
global.ppulsa2 = '081252733108'
global.psaweria = 'https://saweria.co/nafron'//saweria kamu,kalau gak punya kosongin tidak apa"

/*============== NOMOR ==============*/
global.nomorbot = '082233236077'
global.nomorown = '6281252733108'
global.namebot = 'Ŧ𝖗𝖔𝖓𝖇𝖔𝖙'
global.nameown = '𝐌𝐮𝐡𝐚𝐦𝐦𝐚𝐝 𝐍𝐚𝐟𝐫𝐨𝐧'


/*============== STAFF ==============*/
global.owner = [
  ['6281252733108', '𝐌𝐮𝐡𝐚𝐦𝐦𝐚𝐝 𝐍𝐚𝐟𝐫𝐨𝐧', 'true']
  // [number, dia creator/owner?, dia developer?]
] // Put your number here
global.mods = [] // Want some help?
global.prems = [] // Premium user bukan disini nambahinnya, ketik .addprem @user 10

global.lolkey = 'FiikrahMD'
global.xkey = 'your api'

/*============== API ==============*/
global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',
  rey: 'https://server-api-rey.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  lol: 'https://api.lolhuman.xyz',
  dhnjing: 'https://dhnjing.xyz',
  neoxr: 'https://neoxr-api.herokuapp.com',
  zeks: 'https://api.zeks.me',
  pencarikode: 'https://pencarikode.xyz',
  ana: 'https://anabotofc.herokuapp.com/',
  amel: 'https://melcanz.com',
  hardianto: 'https://hardianto.xyz',
  botstyle: 'https://botstyle-api.herokuapp.com',
adiisus: 'https://adiixyzapi.herokuapp.com',
  LeysCoder: 'https://leyscoders-api.herokuapp.com',
  kanx: 'https://kannxapi.herokuapp.com/',
 males : 'https://malesin.xyz'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'cristian9407',
  'https://anabotofc.herokuapp.com/': 'AnaBot',
  'https://api.lolhuman.xyz': 'Xynoz',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.me': 'apivinz',
  'https://pencarikode.xyz': 'pais',
  'https://melcanz.com': 'wEDTUsWj',
  'https://neoxr-api.herokuapp.com': 'yntkts',
  'https://server-api-rey.herokuapp.com': 'apirey',
  'https://botstyle-api.herokuapp.com': 'Eyar749L',
  'https://hardianto.xyz': 'hardianto',
  'https://leyscoders-api.herokuapp.com': 'dappakntlll'
}

/*============== WATERMARK ==============*/
global.wm = '𝐌𝐮𝐡𝐚𝐦𝐦𝐚𝐝 𝐍𝐚𝐟𝐫𝐨𝐧 | ʙʏ Ŧ𝖗𝖔𝖓𝖇𝖔𝖙' //Main Watermark
global.wm2 = '𝐌𝐮𝐡𝐚𝐦𝐦𝐚𝐝 𝐍𝐚𝐟𝐫𝐨𝐧'
global.wm3 = '𝐌𝐮𝐡𝐚𝐦𝐦𝐚𝐝 𝐍𝐚𝐟𝐫𝐨𝐧 | ʙʏ Ŧ𝖗𝖔𝖓𝖇𝖔𝖙'
global.botdate = `⻝ 𝗗𝗮𝘁𝗲: ${week} ${date}\n⻝ 𝗧𝗶𝗺𝗲: ${wktuwib}`
global.bottime = `⻝ 𝗧 𝗜 𝗠 𝗘 : ${wktuwib}`
global.titlebot = `Ŧ𝖗𝖔𝖓𝖇𝖔𝖙 | By ${global.nameown}` // isi bebas
global.author = '𝐌𝐮𝐡𝐚𝐦𝐦𝐚𝐝 𝐍𝐚𝐟𝐫𝐨𝐧' // pemilik?
global.packname = 'ᴛɪᴋᴛᴏᴋ : 𝐧𝐚𝐟𝐫𝐨𝐧𝐚𝐧𝐣𝐚𝐲𝟐'//bebas

/*============== LOGO ==============*/
global.thumb = 'https://telegra.ph/file/a94ebededebcbc792a12a.jpg' //Main Thumbnail
global.imagebot = 'https://telegra.ph/file/b61bb71086eca8107155c.jpg'
global.giflogo = 'https://telegra.ph/file/a94ebededebcbc792a12a.jpg'
global.thumbs = ['https://telegra.ph/file/a94ebededebcbc792a12a.jpg']
global.fla = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text='

/*============== TEXT ==============*/
global.wait = '```𝙇𝙤𝙖𝙙𝙞𝙣𝙜...```'
global.eror = '```𝙉𝙤𝙩 𝙁𝙤𝙪𝙣𝙙 𝟰𝟬𝟰 𝙀𝙧𝙤𝙧```'

/*=========== TYPE DOCUMENT ===========*/
global.dpptx = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.ddocx = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.dxlsx = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.dpdf = 'application/pdf'
global.drtf = 'text/rtf'

global.thumbdoc = 'https://telegra.ph/file/b61bb71086eca8107155c.jpg'

/*=========== FAKE SIZE ===========*/
global.fsizedoc = '99999999999999' // default 10TB
global.fpagedoc = '999'

/*=========== HIASAN ===========*/
// DEFAULT MENU
global.dmenut = '❏═┅═━–〈' //top
global.dmenub = '┊•' //body
global.dmenub2 = '┊' //body for info cmd on Default menu
global.dmenuf = '┗––––––––––✦' //footer
global.hiasan = '꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷ ͝ ꒦'

// COMMAND MENU
global.cmenut = '––––––『' //top
global.cmenuh = '』––––––' //header
global.cmenub = '┊☃︎ ' //body
global.cmenuf = '┗━═┅═━––––––๑\n' //footer
global.cmenua = '' //after
global.pmenus = '☃︎' //pembatas menu selector

global.htki = '––––––『' //hiasan title kiri
global.htka = '』––––––' //hiasan title kanan
global.lopr = 'Ⓟ'
global.lolm = 'Ⓛ'
global.htjava = '❃' //hiasan Doang :v

/*============== STICKER WM ==============*/
global.stickpack = 'ᴛɪᴋᴛᴏᴋ : 𝐧𝐚𝐟𝐫𝐨𝐧𝐚𝐧𝐣𝐚𝐲𝟐'//stiker watermark
global.stickauth = `ʙʏ Ŧ𝖗𝖔𝖓𝖇𝖔𝖙 | wa.me/6282233236077`//sama aja

global.multiplier = 38 // The higher, The harder levelup

/*============== EMOJI ==============*/
global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      level: '📊',
      limit: '🎫',
      health: '❤️',
      exp: '✨',
      money: '💹',
      bank: '🏦',
      potion: '🥤',
      diamond: '💎',
      common: '📦',
      uncommon: '🛍️',
      mythic: '🎁',
      legendary: '🗃️',
      superior: '💼',
      pet: '🔖',
      trash: '🗑',
      armor: '🥼',
      sword: '⚔️',
      pickaxe: '⛏️',
      fishingrod: '🎣',
      wood: '🪵',
      rock: '🪨',
      string: '🕸️',
      horse: '🐴',
      cat: '🐱',
      dog: '🐶',
      fox: '🦊',
      petFood: '🍖',
      iron: '⛓️',
      gold: '🪙',
      emerald: '❇️',
      upgrader: '🧰'
      
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}

//------ JANGAN DIUBAH -----
let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
