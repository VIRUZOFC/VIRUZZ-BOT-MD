import { googleImage } from '@bochilteam/scraper'
let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw `*[βππππβ] π΄πΉπ΄πΌπΏπ»πΎ π³π΄ πππΎ π³π΄π» π²πΎπΌπ°π½π³πΎ ${usedPrefix + command} Minecraft*`
const res = await googleImage(text)
let image = await res.getRandom()
let link = image
let captionn = `π *ππ΄πππ»ππ°π³πΎ π³π΄:* ${text}\nπ *π»πΈπ½πΊ* ${link}\nπ *π±πππ²π°π³πΎπ:* Google`
await conn.sendButton(m.chat, captionn, author, link, [['π ππΈπΆππΈπ΄π½ππ΄ π', `#imagen ${text}`]], m)}
handler.help = ['gimage <query>', 'imagen <query>']
handler.tags = ['internet', 'tools']
handler.command = /^(gimage|image|imagen)$/i
handler.dolares = 5
export default handler
