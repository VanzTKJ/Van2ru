__path = process.cwd()
module.exports = async (md, m, fetchJson, bot, type, body, budy, prefix, isCommand, command, isGroup, md1, pushname, q, args, content, sender, from, nama, namabot, owner, reply, donasi, isMedia, isQuotedImage, isQuotedVideo, isQuotedSticker, isQuotedAudio) => {  
try{  

var gombal = [ 
"Cinta pada Allah sama seperti cahya terang. Tanpanya kamu bagai terombang-ambing di lautan (Ibnu Qayyim)",
"Cinta yang paling membahagiakan dan menyembuhkan adalah cinta kepada Allah. (Habiburrahman El Shirazy)",
"Tidak ada yang bisa mengusir syahwat atau kecintaan pada kesenangan duniawi selain rasa takut kepada Allah yang menggetarkan hati, atau rasa rindu kepada Allah yang membuat hati merana. (Habiburrahman El Shirazy)",
"Bagi orang-orang yang beriman, dimana pun ia bisa rukuk dan sujud kepada Allah, maka ia menemukan bumi cinta. (Habiburrahman El Shirazy)",
"Orang yang marifat kepada Allah, maka ia terikat dengan cintanya, hatinya bisa melihat dan amal ibadahnya selalu bertambah banyak kepada-Nya. (Dzinnun al-Mishry)",
"Ketahuilah, apapun yang menjadikanmu tergetar, itulah yang terbaik untuk. Dan karena itulah, qalbu seorang pecintaNya lebih besar dari singgasanaNya. (Jalaluddin Rumi)",
"Tuhanku, tenggelamkan diriku kedalam lautan keikhlasan mencintaiMu. Hingga tak ada sesuatu yang menyibukkanku selain berdzkir padaMu. (Rabiah Al Adawiyah)",
"Tuhanku, tenggelamkan aku dalam cinta-Mu. Hingga tak ada satupun yang menggangguku dalam jumpa-Mu (Rabiah Al Adawiyah)",
"Jika kau mencintai Allah, engkau tidak akan pernah mengalami kehilangan. Tidak ada yang merebut Allah yang kau cintai dari hatimu. Allah akan setia menyertaimu. Allah tidak akan berpisah darimu, kecuali kamu sendiri yang berpisah dari-Nya. (Habiburrahman El Shirazy)",
"Janganlah kalian menikahi wanita karena kecantikannya, karena mungkin saja kecantikannya akan membinasakannya. Dan jangan pula kalian menikahi wanita karena hartanya, karena mungkin saja hartanya akan menjadikannya bersikap sewenang-wenang. Akan tetapi, nikahilah wanita itu karena agamanya. (Ali bin Abi Thalib)",
"Jangan mencintai orang yang tidak mencintai Allah. Jika mereka bisa meninggalkan Allah, mereka akan meninggalkanmu. (Imam Syafii)",
"Jangan berhenti berdoa untuk yang terbaik bagi orang yang kau cintai. (Ali bin Abi Thalib)",
"Betapa beruntungnya mereka yang mencintai Allah. Mereka tidak akan pernah berpisah dengan kekasih mereka. (Dr. Bilal Philips)",
"Pasangan paling bahagia di dunia ini tidak pernah memiliki sifat yang sama. Mereka hanya saling memahami dengan baik tentang perbedaan yang mereka miliki.",
"Siapa pun bisa jatuh cinta, tapi hanya orang yang kuat yang akan menjaga cinta itu tetap halal.",
"Lelaki yang baik tidak akan bermain-main dengan cinta, sebab dia tahu kata cinta menuntut tanggung jawab.",
"Cinta bukan hanya sekedar ucapan, namun harus dibarengi dengan pengorbanan. Mencintai dan dicintai itu adalah anugerah terindah dari Allah Subhanahu wata’ala.",
"Pasangan paling bahagia di dunia ini tidak pernah memiliki sifat yang sama. Mereka hanya saling memahami dengan baik tentang perbedaan yang mereka miliki.",
"Cinta itu seharusnya melahirkan kasih sayang bukan kasih syahwat. Dan cinta itu seharusnya melahirkan tanggung jawab, bukan lari dari tanggung jawab. Oleh karena itu carilah yang mampu menanggung dan menjawab.",
"Ku titipkan cinta ini hanya pada-Mu, jagalah hatiku dan hatinya dari rasa kecewa hingga waktu itu tiba. Persatukanlah kami dalam restu dan ridha-Mu.",
"Jika aku jatuh cinta, cintakanlah aku pada seseorang yang melebihkan cintanya padamu, agar bertambah kekuatanku untuk lebih mencintaimu.",
"Jika kamu merasa punya Allah, lantas mengapa bersedih terlalu lama hanya karena urusan cinta.",
"Aku mencintaimu itu bukan tanpa alasan, tapi karena kesederhanaanmu yang tiada ku temukan pada orang selain dirimu.",
"Temukan pasangan hidup yang bisa membimbingmu, bukan hanya di dunia, tapi juga di akhirat.",
"Tak pernah terlupa, selalu ku sebut namanya dalam setiap do’aku. Ya Allah jagalah hatinya hanya untukku, meski ada jarak yang memisahkan kita.",
"Mencintai Allah adalah setinggi-tingginya cinta. Sempurnakan cintamu pada Allah sebelum engkau melabuhkan cintamu pada makhluk-Nya.",
"Aku yakin, jika dua orang sudah ditakdirkan untuk bersama, maka dari sudut bumi manapun meraka berasal pastilah mereka akan bertemu.",
"Dalam menjalani hubungan, sakinah berarti mengandung makna ketenangan, mawaddah mengandung arti rasa cinta, rahmah itu mengandung arti kasih sayang. Jika tiga itu ada pada dirimu maka percayalah, keberkahan akan selalu mendampingimu.",
"Cinta kita adalah yang terbaik karena imanku bertambah. Kau membantuku di dunia, dan karena itu aku ingin kembali bertemu denganmu di surga."
]
 

md.sendMessage(from, { text: gombal[Math.floor(Math.random() * gombal.length)], mentions: [sender]}, {quoted: md1})
} catch (e) { console.log(e) }
} 
