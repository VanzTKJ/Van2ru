import moment from 'moment-timezone';

export async function before(m) {
    if (m.chat.endsWith('broadcast') || m.fromMe || m.isGroup) return

    let user = global.db.data.users[m.sender]
    let txt = `👋Hai, ${ucapan()}

${user.banned ? '📮Maaf, kamu dibanned & Tidak bisa menggunakan bot ini lagi,hubungin pemilik bot agar di buka kembali' : `💬 Saya Vanzbot Asisten whatsapps siap membantu anda ^-^`}`.trim()

    if (new Date() - user.pc < 21600000) return // waktu ori 21600000 (6 jam)
    await this.sendButton(m.chat, txt, user.banned ? wm : 'PENTING: ᴀᴛᴜʀᴀɴ ᴅɪ ʟᴀʀᴀɴɢ ᴛᴇʟꜰᴏɴ ʙᴏᴛ ᴀᴛᴀᴜ ᴋᴀʟɪᴀɴ ᴀᴋᴀɴ ᴅɪ ʙʟᴏᴋɪʀ ᴏᴛᴏᴍᴀᴛɪꜱ!', [user.banned ? 'ᴘᴇᴍɪʟɪᴋ ʙᴏᴛ' : 'ᴍᴇɴᴜ', user.banned ? '.owner' : '.menu'], m)
    user.pc = new Date * 1
}


function ucapan() {
    const time = moment.tz('Asia/Jakarta').format('HH')
    let res = "Selamat dinihari 🌆"
    if (time >= 4) {
        res = "Selamat pagi 🌄"
    }
    if (time > 10) {
        res = "Selamat siang ☀️"
    }
    if (time >= 15) {
        res = "Selamat sore 🌇"
    }
    if (time >= 18) {
        res = "Selamat malam 🌙"
    }
    return res
}


// jasa buat plugins by FokusDotId (Fokus ID)
