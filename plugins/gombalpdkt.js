__path = process.cwd()
module.exports = async (md, m, fetchJson, bot, type, body, budy, prefix, isCommand, command, isGroup, md1, pushname, q, args, content, sender, from, nama, namabot, owner, reply, donasi, isMedia, isQuotedImage, isQuotedVideo, isQuotedSticker, isQuotedAudio) => {  
try{  

var gombal = [
"Cintaku ke kamu tuh kaya kecoa. Ga punah dimakan zaman",
"Kamu pakek bedak merek apa sih? Kok cantiknya kebangetan gitu, sampai-sampai aku sulit untuk melupakanmu",
"Aku bakalan berhenti mencintai kamu kalau unta sudah bisa terbang sendiri",
"Cintaku ke kamu tuh kaya utang, awalnya kecil, didiemin tau-tau gede sendiri",
"Daripada daftar jadi boyband mending aku daftar jadi boyfriend kamu aja",
"Katanya kalo sering hujan itu bisa bikin seseorang terhanyut, kalo aku sekarang sedang terhanyut di dalam cintamu",
"Tahu, nggak? Orang kurus itu setia. Makan aja nggak pernah nambah, apalagi pasangan",
"Aku nggak sedih besok hari Senin, aku sedihnya kalo besok nggak ketemu kamu",
"Sayang, tadi pagi aku nggak bisa makan karena merindukanmu. Siangnya juga nggak makan karena mikirin kamu. Dan malamnya aku jadi nggak bisa tidur karena kelaparan",
"Saat di sampingmu, aku seperti mentega yang jatuh di wajan panas. Langsung meleleh",
"Aku sudah siap kalo Senin harus bangun pagi, apalagi bangun rumah tangga sama kamu",
"Aku rela jadi abang nasi goreng atau tukang cilok asalkan setiap malam dan setiap hari bisa lewat depan rumah kamu",
"Orang yang nyasar biasanya rugi banyak. Rugi waktu, rugi tenaga, dan rugi bensin. Tapi, aku nggak merasa rugi karena udah nyasar ke hati bidadari, yaitu kamu",
"Walaupun tanggal merah, aku tidak libur. Aku tidak pernah berhenti atau istirahat dalam mencintaimu",
"Kalau ponsel saja mampu menyimpan foto sampai beribu-ribu, masa aku nggak sanggup untuk menyimpan kamu yang hanya satu di dalam hatiku?",
"Kalau kamu tanya berapa kali kamu ada di pikiranku, akan kujawab dengan jujur, cuma sekali. Soalnya sekali datang, kamu nggak pergi-pergi",
"Kalau kamu itu upil, maka aku adalah jari kelingking. Apa pun yang terjadi aku nggak akan berhenti mencari sampai mendapatkanmu",
"Hari minggu itu weekend. Kalau aku dan kamu, kita will never end",
"Kamu tahu nggak kenapa pelangi selalu hanya terlihat dengan bentuk setengah lingkaran? Itu karena setengahnya lagi ada di mata kamu",
"Kalau ada yang menyuruhku untuk melupakanmu, yang pertama kulakukan adalah pergi ke kelurahan. Iya, karena aku harus minta dibuatkan surat keterangan tidak mampu",
"Aku kesamber petir kok biasa aja yaa? Cuma kalo udah kesamber getar-getaran cinta dari kamu pasti hati aku langsung meleleh",
"Cinta adalah perasaan romantis dan menghiasi perasaan dengan beberapa kata-kata cinta yang terbaik dan kutipan romantis dapat memperkuat hubungan Anda",
"Memang sih di rumah sakit banyak sekali tabung oksigen, namun pas aku sakit sesak, aku bilang kepada susternya, aku hanya butuh kamu, soalnya kamu adalah oksigen aku",
"Katanya sih dia hanya teman, namun di balik itu, hubungan seorang teman makin lebih spesial dibandingkan dengan pacarnya",
"Aku ingin sekali jalanin hidup bersama kamu lagi. Namun, kamu telah ada yang punya, aku nikung sedikit boleh ya",
"Sayang? Kamu tau gak, kemarin aku nggak bisa bangun dari tidur karena terus memimpikanmu",
"Pengetahuanku tentang bunga sangat terbatas, kalau seindah kamu namanya apa ya?",
"Kalau udah malem, perut aku itu suka keroncongan loh, tapi lebih keroncongan lagi kalau kamu ngak ada di hati aku",
"Katanya orang bisa jadi bodoh karna cinta, tapi aku gak peduli itu. Aku cuma mikir betapa bodohnya mantanmu yang berhenti mencintaimu",
"Kenapa kamu lebih memilih untuk menjauh. Sementara aku sendiri masih saja menjaga hati ini untukmu. Bahkan hingga detik ini",
"Masih sangat banyak hal menyenangkan yang masih bisa kamu lakukan, daripada kamu harus membuang-buang waktu untuk meratapi kisah cinta dan penyesalan di masa lalu",
"Kamu gak usah percaya ramalan tentang perjodohan, kamu cukup percaya aja kalo kita berjodoh nantinya",
"Aku gak pernah merasakan ketakutan sedikit pun ketika berada didekat kamu, karena kamulah kekuatanku",
"Jangan pernah kamu mengatakan sulit karena tidak ada yang sulit apabila dikerjakan dengan sepenuh hati",
"Mungkin kamu tidak pernah tau bahwa Tuhan beri kekuatan bagiku untuk tegar menghadapi setiap cobaan dari kamu",
"Aku harap kamu tidak menanyakan hal terindah yang pernah singgah di kehidupanku, karena jawabannya adalah kamu"
]

md.sendMessage(from, { text: gombal[Math.floor(Math.random() * gombal.length)], mentions: [sender]}, {quoted: md1})
} catch (e) { console.log(e) }
} 
