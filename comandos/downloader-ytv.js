import fs from 'fs'
import { youtubedl, youtubedlv2, youtubedlv3 } from '@bochilteam/scraper'
import fetch from 'node-fetch'
let handler = async (m, { conn, args }) => {
if (!args[0]) throw '*[βππππβ] πΈπ½ππ΄πππ΄ π΄π» π²πΎπΌπ°π½π³πΎ πΌπ°π π΄π» π΄π½π»π°π²π΄ / π»πΈπ½πΊ π³π΄ ππ½ ππΈπ³π΄πΎ π³π΄ ππΎππππ±π΄*'
let info = `*_β° Enviando video... β°_*\n\n*π SΙͺ Sα΄ α΄ Ιͺα΄α΄α΄ Ι΄α΄ α΄s α΄Ι΄α΄ Ιͺα΄α΄α΄, α΄Κα΄α΄Κα΄ α΄α΄Ι΄ α΄Κ α΄α΄α΄α΄Ι΄α΄α΄ #playdoc α΄ #play.2 α΄ #ytmp4doc β*`
await conn.sendMessage(m.chat,  {image: fs.readFileSync("./galeria/menudorrat5.png"),  caption: info}, {quoted: m})
try {
let qu = args[1] || '360'
let q = qu + 'p'
let v = args[0]
const yt = await youtubedl(v).catch(async _ => await youtubedlv2(v)).catch(async _ => await youtubedlv3(v))
const dl_url = await yt.video[q].download()
const ttl = await yt.title
const size = await yt.video[q].fileSizeH
await await conn.sendMessage(m.chat, { video: { url: dl_url }, fileName: `${ttl}.mp4`, mimetype: 'video/mp4', caption: `π¦ TITULO: ${ttl}\nπ¦ PESO DEL VIDEO: ${size}`, thumbnail: await fetch(yt.thumbnail) }, { quoted: m })
} catch {
try {
let lolhuman = await fetch(`https://api.lolhuman.xyz/api/ytvideo2?apikey=85faf717d0545d14074659ad&url=${args[0]}`)    
let lolh = await lolhuman.json()
let n = lolh.result.title || 'error'
let n2 = lolh.result.link
let n3 = lolh.result.size
let n4 = lolh.result.thumbnail
await conn.sendMessage(m.chat, { video: { url: n2 }, fileName: `${n}.mp4`, mimetype: 'video/mp4', caption: `π ππΈπππ»πΎ: ${n}\nπ¦ πΏπ΄ππΎ π³π΄π» ππΈπ³π΄πΎ: ${n3}`, thumbnail: await fetch(n4) }, { quoted: m })
} catch {
await conn.reply(m.chat, '*[β] π΄πππΎπ π½πΎ π΅ππ΄ πΏπΎππΈπ±π»π΄ π³π΄ππ²π°ππΆπ°π π΄π» ππΈπ³π΄πΎ*', m)}
}}
handler.command = /^getvid|yt(v|mp4)?$/i
export default handler
