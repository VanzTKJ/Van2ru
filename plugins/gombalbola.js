__path = process.cwd()
module.exports = async (md, m, fetchJson, bot, type, body, budy, prefix, isCommand, command, isGroup, md1, pushname, q, args, content, sender, from, nama, namabot, owner, reply, donasi, isMedia, isQuotedImage, isQuotedVideo, isQuotedSticker, isQuotedAudio) => {  
try{  

var gombal = [
"Garuda di dadaku!! Kamu di hatiku!!",
"Aku kangen kamu, sama kayak Torres kangen mencetak gol",
"*Press Confence* Ibra: saya senang bisa berlabuh ke PSG, tapi saya lebih senang lagi kalo bsa berlabuh ke hati kamu",
"Indonesia memang cuma bisa cetak 4 gol malam ini, tapi kamu tetep bisa cetak gol hati aku tiap hari",
"Aku nggak suka bola,, Aku sukanya kamu",
"Aku bukan Lionel Messi yang bisa menjadi pemain terbaik dunia, tapi aku berusaha menjadi yg terbaik di hatimu",
"Tidak apa-apa neng, kamu suka Barcelona, saya suka Manchester United, tapi hati kita tetap 1 kok",
"Kalo aku lagi main bola, aku mau cepet-cepat kena kartu merah, supaya bisa keluar lapangan trus ketemu sama kamu",
"Markus Horison bermain bagus, Menganggap bola seperti kekasihnya, Diraih, dirangkul, dan takkan mungkin dilepaskan",
"Bang, bapaknya pelatih bola ya? Soalnya abang jago banget ngegol'in cinta ke hati eneng",
"Bang, bang,, walaupun semalem Chelsea kalah, tapi tenang aja,, Kamu tetap pemenang di hatiku",
"Kamu bekas penjaga gawang ya? Soalnya kamu kok jago banget sih menjaga hati aku biar engga kebobolan",
"Entah kenapa tiap kali liat gol selalu teringat kamu yang udah membobol hatiku",
"Terlalu sering aku jatuh cinta padamu, Sesering Sturridge cedera",
"Cintaku ke kamu seperti Messi dan Ronaldo,,selalu membikin perdebatan yang panas",
"Cristiano Ronaldo boleh saja pindah ke Juventus, tapi aku tak akan pindah ke lain hati",
"Ronaldo selalu jago buat penggemarnya kagum dengan gocekannya, Sama seperti kamu jago buat aku kagum akan keindahannya",
"Walaupun Ronaldo nomor 7 dan Messi nomor 10, kamu tetep nomor 1 kok buat aku",
"Pacaran tuh sama kiper! Gawang aja dijagain mati-matian apalagi kamu",
"Kalau aku jadi pacar kamu, aku bakal jadi Steven Gerrard atau Giggs, atau Zanetti nya hati kamu",
"Kamu tuh kaya pertandingan El Classico ,,, Bikin tegang",
"Pengennya sih selalu marking atau pressing kamu, biar bisa deket trus gitu",
"Ibarat di sepak bola, kamu itu bola dan aku pemainnya, intinya aku bakalan mengejar-kejar kamu sampai dapet pokoknya",
"Biarpun posisi Real Madrid naik turun di klasemen, sayang aku ke kamu kukuh di puncak klasemen",
"Kamu itu sama kaya bola | ko bola? | iya, sama sama dikejar banyak orang dan susah buat didapetinnya",
"Nanti ada pertandingan bola siaran tunda, tapi rasa sayang aku ke kamu tak pernah ditunda-tunda",
"Neng, kok mirip sama Sir Alex Ferguson ya ? | kok bisa ? | habis eneng telah memformasi hatiku",
"Aku ingin cinta kita seperti Sir Alex Ferguson dan Manchester United, karena hanya waktu yang memisahkan",
"Aku rasa kamu cocok jadi pemain Barcelona deh yang, kan kamu sering 'diving' di pikiranku",
"AC Milan punya Donnarumma yang selalu menjaga gawangnya, tapi aku punya hati yang selalu menjaga cinta ini",
"Jangan menyamakan aku dengan Arsenal, Arsenal mungkin bisa bertahun-tahun tanpa gelar, tapi aku enggak mungkin bisa bertahun-tahun tanpa kamu",
"Sekalipun aku enggak tahu banget tentang bola, tapi aku amat sangat mengerti kamu",
"Walaupun kita jauh, aku dan kamu sama-sama lihat bola, Jadi kerasa deket ya kita,",
"Bapak kamu Lionel Messi ya?| kok tau?| karna kamu telah mencungkil hati aku ke hati kamu"
]

md.sendMessage(from, { text: gombal[Math.floor(Math.random() * gombal.length)], mentions: [sender]}, {quoted: md1})
} catch (e) { console.log(e) }
} 
