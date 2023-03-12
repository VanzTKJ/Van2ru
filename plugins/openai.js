import { Configuration, OpenAIApi } from "openai";
import fetch from "node-fetch"
import { generateWAMessageFromContent } from "@adiwajshing/baileys"

import fs from 'fs'
let handler = async (m, { conn, text }) => {
if (!text) throw "Hay adakah yang bisa saya bantu??"
const configuration = new Configuration({
    apiKey: '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'
});
const openai = new OpenAIApi(configuration);
        const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: text,
            temperature: 0,
            max_tokens: 2000,
            top_p: 1,
            frequency_penalty: 0.5,
            presence_penalty: 0
        });
m.reply(response.data.choices[0].text)
    }
handler.help = ['openai']
handler.tags = ['Tool']
 handler.command = /^(yus|ai|openai)$/i
export default handler
