import { youtubeSearch } from '@bochilteam/scraper'
import fetch from 'node-fetch'
let handler = async (m, { conn, command, text, usedPrefix }) => {
if (!text) throw `*[βππππβ] NOMBRE DE LA CANCION FALTANTE, POR FAVOR INGRESE EL COMANDO MAS EL NOMBRE/TITULO DE UNA CANCIΓN*\n\n*β’ EJEMPLO:*\n*${usedPrefix + command} Phonk*`
try {
let vid = (await youtubeSearch(text)).video[0]
let { title, description, thumbnail, videoId, durationH, viewH, publishedTime } = vid
const urll = 'https://www.youtube.com/watch?v=' + videoId
var doc = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var document = doc[Math.floor(Math.random() * doc.length)]
const buttons = [
{ buttonId: `#ytmp3doc ${urll}`, buttonText: { displayText: 'π΅ ππππππππ π΅' }, type: 1 },
{ buttonId: `#ytmp4doc ${urll}`, buttonText: { displayText: 'π₯ ππππππππ π₯' }, type: 1 },
{ buttonId: `#playlist ${text}`, buttonText: { displayText: 'π πππ ππππππππππ π' }, type: 1 }, ] 
let texto1 = `*ββ ππππ ππππππππ ββ*\nβββββββββ°  *π°*  β±βββββββ¬£
β *TITULO | TITLE*
β ${title}
βββββββββββββββββ
β *DESCRIPCIΓN  | DESCRIPTION*
β ${description}
βββββββββββββββββ
β *PUBLICADO | PUBLISHE*
β ${publishedTime}
βββββββββββββββββ
β *DURACION | DURATION*
β ${durationH}
βββββββββββββββ
β *VISTAS | VIEWS*
β ${viewH}
βββββββββββββββββ
β *URL*
β ${urll}
βββββββββ° *${vs}* β±βββββββ¬£`.trim()

let buttonMessage = { "document": { url: "https://wa.me/593959425714" }, "fileName": 'β πΏ Κα΄α΄Κα΄α΄α΄α΄α΄α΄Κ α΄α΄ Κα΄α΄α΄α΄Κα΄', "mimetype": 'application/vnd.ms-excel', "caption": texto1, "fileLength": '99999999999999', "mentions": [m.sender], "footer": wm, "buttons": buttons, "headerType": 4, contextInfo: { "mentionedJid": [m.sender], "externalAdReply": { "showAdAttribution": true, "title": `${title}`, "mediaType": 2, "previewType": "VIDEO", "thumbnail": await (await fetch(thumbnail)).buffer(), "mediaUrl": `${urll}`, "sourceUrl": `https://github.com/DIEGO-OFC/DORRAT-BOT-MD` }}} 
conn.sendMessage(m.chat, buttonMessage, { quoted: m })
} catch {
try {  
let vid2 = await (await fetch(`https://api.lolhuman.xyz/api/ytsearch?apikey=${lolkeysapi}&query=${text}`)).json()
let { videoId, title, views, published, thumbnail } = await vid2.result[0]
const url = 'https://www.youtube.com/watch?v=' + videoId
let ytLink = await fetch(`https://api.lolhuman.xyz/api/ytplay2?apikey=${lolkeysapi}&query=${text}`)
let jsonn = await ytLink.json()
let aud = await jsonn.result.audio
let capt = `β’ *TITULO:* ${title}\nβ’ *PUBLICADO:* ${published}\nβ’ *VISTAS:* ${views}\nβ’ π *LINK:* ${url}`
const buttons = [{buttonId: `#playlist ${title}`, buttonText: {displayText: 'π πππ ππππππππππ π'}, type: 1}]
const buttonMessage = { image: {url: thumbnail}, caption: capt, footer: '*α΄Ι΄α΄ Ιͺα΄Ι΄α΄α΄ α΄α΄α΄Ιͺα΄, α΄Ι’α΄α΄Κα΄α΄ α΄Ι΄ α΄α΄α΄α΄Ι΄α΄α΄...*', buttons: buttons, headerType: 4 }
let msg = await conn.sendMessage(m.chat, buttonMessage, { quoted: m })
conn.sendMessage(m.chat, { document: { url: aud }, mimetype: 'audio/mpeg', fileName: `${title}.mp3`}, {quoted: msg})
} catch {  
throw '*[βππππβ] ERROR, POR FAVOR VUELVA A INTENTARLO*'}}}
handler.help = ['playdoc', 'play3'].map(v => v + ' <pencarian>')
handler.tags = ['downloader']
handler.command = /^play3|playdoc?$/i
handler.dolares = 5
export default handler
