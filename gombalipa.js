__path = process.cwd()
module.exports = async (md, m, fetchJson, bot, type, body, budy, prefix, isCommand, command, isGroup, md1, pushname, q, args, content, sender, from, nama, namabot, owner, reply, donasi, isMedia, isQuotedImage, isQuotedVideo, isQuotedSticker, isQuotedAudio) => {  
try{  

var gombal = [
"Kalau ikan tak bisa hidup tanpa air, aku tak bisa hidup tanpamu.",
"Senyum kamu itu seperti glukosa, manis.",
"Aku ingin bertukar tulang denganmu. Aku jadi tulang punggungmu, kamu jadi tulang rusukku.",
"Panjang, masa, dan suhu adalah contoh besaran pokok dalam fisika. Kalau besaran pokok aku ya kamu.",
"Cinta aku ke kamu itu seperti atom, tidak bisa dibagi dengan apa pun.",
"Kita itu layaknya partikel dalam sebuah atom, terikat bersama oleh kekuatan yang kuat.",
"Kamu itu seperti kalsium, nitrogen, titanium dan kalium. Ca-N-Ti-K",
"Kamu tau bedanya rumus kimia dengan kamu? kalau rumus kimia susah dihafal, kalau kamu susah dilupain."
]

md.sendMessage(from, { text: gombal[Math.floor(Math.random() * gombal.length)], mentions: [sender]}, {quoted: md1})
} catch (e) { console.log(e) }
} 
