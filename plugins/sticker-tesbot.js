import fetch from 'node-fetch'
import fs from 'fs'

export async function all(m) {

  //Kalo mau menggokil pake ini
  let pp = await this.profilePictureUrl(m.sender, 'image').catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png')

  let vr = ['1']
  let num = vr.getRandom()
  let stc = await fs.readFileSync('./sticker/apasidek' + num + '.webp')

if (m.isBaileys) return
    if (m.chat.endsWith('broadcast')) return
    try {
    let TandaTanya = /^(xynoz|noz|fik|pikra|bot|tes)$/i.test(m.text)
        if (TandaTanya && m.isGroup) {
            await this.sendMessage(m.chat, { sticker : stc, thumbnail: await( await fetch(pp)).buffer() , contextInfo:{  externalAdReply: { showAdAttribution: true,
mediaType:  1,
mediaUrl: sig,
title: 'Apasiii Dek❗',
body: bottime,
sourceUrl: 'https://chat.whatsapp.com/J5qUMoYUrtFKQEzXTg0Fit',
thumbnail: await( await fetch(pp)).buffer()
  }
 }}, { quoted: m })
        }
    } catch (e) {
        return
    }
}

 function pickRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min
}