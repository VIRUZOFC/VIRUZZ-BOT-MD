
import axios from "axios"
let handler = async (m, {command, conn}) => {
if (!db.data.chats[m.chat].modohorny && m.isGroup) throw '*[βππππβ] π»πΎπ π²πΎπΌπ°π½π³πΎπ +π·πΎ π΄πππ°π½ π³π΄ππ°π²ππΈππ°π³πΎπ π΄π½ π΄πππ΄ πΆπππΏπΎ, ππΈ π΄π π°π³πΌπΈπ½ π π³π΄ππ΄π° π°π²ππΈππ°ππ»πΎπ πππ΄ π΄π» π²πΎπΌπ°π½π³πΎ #enable modohorny*'

if (command == 'nsfwloli') {
let res = (await axios.get(`https://raw.githubusercontent.com/VIRUZOFC/VIRUZZ-BOT-MD/master/galeria/JSON/nsfwloli.json`)).data  
let url = await res[Math.floor(res.length * Math.random())]
conn.sendButton(m.chat, `_${command}_`.trim(), author, url, [['π siguiente π', `/${command}`]], m)}
  
if (command == 'nsfwfoot') {
let res = (await axios.get(`https://raw.githubusercontent.com/VIRUZOFC/VIRUZZ-BOT-MD/master/galeria/JSON/nsfwfoot.json`)).data  
let url = await res[Math.floor(res.length * Math.random())]
conn.sendButton(m.chat, `_${command}_`.trim(), author, url, [['π siguiente π', `/${command}`]], m)}
  
if (command == 'nsfwass') {
let res = (await axios.get(`https://raw.githubusercontent.com/VIRUZOFC/VIRUZZ-BOT-MD/master/galeria/JSON/nsfwass.json`)).data  
let url = await res[Math.floor(res.length * Math.random())]
conn.sendButton(m.chat, `_${command}_`.trim(), author, url, [['π siguiente π', `/${command}`]], m)}
  
if (command == 'nsfwbdsm') {
let res = (await axios.get(`https://raw.githubusercontent.com/VIRUZOFC/VIRUZZ-BOT-MD/master/galeria/JSON/nsfwbdsm.json`)).data  
let url = await res[Math.floor(res.length * Math.random())]
conn.sendButton(m.chat, `_${command}_`.trim(), author, url, [['π siguiente π', `/${command}`]], m)}
  
if (command == 'nsfwcum') {
let res = (await axios.get(`https://raw.githubusercontent.com/VIRUZOFC/VIRUZZ-BOT-MD/master/galeria/JSON/nsfw-cum.json`)).data  
let url = await res[Math.floor(res.length * Math.random())]
conn.sendButton(m.chat, `_${command}_`.trim(), author, url, [['π siguiente π', `/${command}`]], m)}
  
if (command == 'nsfwero') {
let res = (await axios.get(`https://raw.githubusercontent.com/VIRUZOFC/VIRUZZ-BOT-MD/master/galeria/JSON/nsfw-ero.json`)).data  
let url = await res[Math.floor(res.length * Math.random())]
conn.sendButton(m.chat, `_${command}_`.trim(), author, url, [['π siguiente π', `/${command}`]], m)}
  
if (command == 'nsfwglass') {
let res = (await axios.get(`https://raw.githubusercontent.com/VIRUZOFC/VIRUZZ-BOT-MD/master/galeria/JSON/nsfw-glass.json`)).data  
let url = await res[Math.floor(res.length * Math.random())]
conn.sendButton(m.chat, `_${command}_`.trim(), author, url, [['π siguiente π', `/${command}`]], m)}
  
if (command == 'hentai') {
let haha = await conn.getFile(`https://server-api-rey.herokuapp.com/api/nsfw/hentai?apikey=apirey`)
conn.sendButton(m.chat, `_${command}_`.trim(), author, haha.data, [['π ππΈπΆππΈπ΄π½ππ΄ π', `/${command}`]], m)}
  
if (command == 'nsfworgy') {
let haha = await conn.getFile(`https://api.xteam.xyz/randomimage/orgy?APIKEY=29d4b59a4aa687ca`)
conn.sendButton(m.chat, `_${command}_`.trim(), author, haha.data, [['π ππΈπΆππΈπ΄π½ππ΄ π', `/${command}`]], m)}
 
if (command == 'yuri') {
let res = (await axios.get(`https://raw.githubusercontent.com/VIRUZOFC/VIRUZZ-BOT-MD/master/galeria/JSON/yuri.json`)).data  
let url = await res[Math.floor(res.length * Math.random())]
conn.sendButton(m.chat, `_${command}_`.trim(), author, url, [['π siguiente π', `/${command}`]], m)}

if (command == 'tetas') {
let res = (await axios.get(`https://raw.githubusercontent.com/VIRUZOFC/VIRUZZ-BOT-MD/master/galeria/JSON/tetas.json`)).data  
let url = await res[Math.floor(res.length * Math.random())]
conn.sendButton(m.chat, `_${command}_`.trim(), author, url, [['π siguiente π', `/${command}`]], m)}

if (command == 'booty') {
let res = (await axios.get(`https://raw.githubusercontent.com/DIEGO-OFC/DORRAT-BOT-MD/master/galeria/JSON/booty.json`)).data  
let url = await res[Math.floor(res.length * Math.random())]
conn.sendButton(m.chat, `_${command}_`.trim(), author, url, [['π ππΈπΆππΈπ΄π½ππ΄ π', `/${command}`]], m)}
  
if (command == 'ecchi') {
let res = (await axios.get(`https://raw.githubusercontent.com/DIEGO-OFC/DORRAT-BOT-MD/master/galeria/JSON/ecchi.json`)).data  
let url = await res[Math.floor(res.length * Math.random())]
conn.sendButton(m.chat, `_${command}_`.trim(), author, url, [['π ππΈπΆππΈπ΄π½ππ΄ π', `/${command}`]], m)}
  
//if (command == 'furro') {
//let res = (await axios.get(`https://raw.githubusercontent.com/VIRUZOFC/VIRUZZ-BOT-MD/master/galerΓ­a/JSON/furro.json`)).data  
//let url = await res[Math.floor(res.length * Math.random())]
//conn.sendButton(m.chat, `_${command}_`.trim(), author, url, [['π ππΈπΆππΈπ΄π½ππ΄ π', `/${command}`]], m)} 
  
if (command == 'trapito') {
let res = (await axios.get(`https://raw.githubusercontent.com/DIEGO-OFC/DORRAT-BOT-MD/master/galeria/JSON/trapito.json`)).data  
let url = await res[Math.floor(res.length * Math.random())]
conn.sendButton(m.chat, `_${command}_`.trim(), author, url, [['π ππΈπΆππΈπ΄π½ππ΄ π', `/${command}`]], m)} 
  
if (command == 'imagenlesbians') {
let res = (await axios.get(`https://raw.githubusercontent.com/DIEGO-OFC/DORRAT-BOT-MD/master/galerΓ­a/JSON/imagenlesbians.json`)).data  
let url = await res[Math.floor(res.length * Math.random())]
conn.sendButton(m.chat, `_${command}_`.trim(), author, url, [['π ππΈπΆππΈπ΄π½ππ΄ π', `/${command}`]], m)}  
  
if (command == 'panties') {
let res = (await axios.get(`https://raw.githubusercontent.com/DIEGO-OFC/DORRAT-BOT-MD/master/galeria/JSON/panties.json`)).data  
let url = await res[Math.floor(res.length * Math.random())]
conn.sendButton(m.chat, `_${command}_`.trim(), author, url, [['π ππΈπΆππΈπ΄π½ππ΄ π', `/${command}`]], m)}
  
if (command == 'pene') {
let res = (await axios.get(`https://raw.githubusercontent.com/DIEGO-OFC/DORRAT-BOT-MD/master/galeria/JSON/pene.json`)).data  
let url = await res[Math.floor(res.length * Math.random())]
conn.sendButton(m.chat, `_${command}_`.trim(), author, url, [['π ππΈπΆππΈπ΄π½ππ΄ π', `/${command}`]], m)}
  
if (command == 'porno') {
let res = (await axios.get(`https://raw.githubusercontent.com/DIEGO-OFC/DORRAT-BOT-MD/master/galeria/JSON/porno.json`)).data  
let url = await res[Math.floor(res.length * Math.random())]
conn.sendButton(m.chat, `_${command}_`.trim(), author, url, [['π ππΈπΆππΈπ΄π½ππ΄ π', `/${command}`]], m)}
  
if (command == 'randomxxx') {
let res = (await axios.get(`https://raw.githubusercontent.com/DIEGO-OFC/DORRAT-BOT-MD/master/galeria/JSON/randomxxx.json`)).data  
let url = await res[Math.floor(res.length * Math.random())]
conn.sendButton(m.chat, `_${command}_`.trim(), author, url, [['π ππΈπΆππΈπ΄π½ππ΄ π', `/${command}`]], m)}
  
if (command == 'pechos') {
let res = (await axios.get(`https://raw.githubusercontent.com/DIEGO-OFC/DORRAT-BOT-MD/master/galeria/JSON/pechos.json`)).data  
let url = await res[Math.floor(res.length * Math.random())]
conn.sendButton(m.chat, `_${command}_`.trim(), author, url, [['π ππΈπΆππΈπ΄π½ππ΄ π', `/${command}`]], m)}
  
if (command == 'yaoi') {
let res = (await axios.get(`https://raw.githubusercontent.com/DIEGO-OFC/DORRAT-BOT-MD/master/galeria/JSON/yaoi.json`)).data  
let url = await res[Math.floor(res.length * Math.random())]
conn.sendButton(m.chat, `_${command}_`.trim(), author, url, [['π ππΈπΆππΈπ΄π½ππ΄ π', `/${command}`]], m)}
  
if (command == 'yaoi2') {
let res = (await axios.get(`https://raw.githubusercontent.com/DIEGO-OFC/DORRAT-BOT-MD/master/galeria/JSON/yaoi2.json`)).data  
let url = await res[Math.floor(res.length * Math.random())]
conn.sendButton(m.chat, `_${command}_`.trim(), author, url, [['π ππΈπΆππΈπ΄π½ππ΄ π', `/${command}`]], m)}
  
if (command == 'yuri') {
let res = (await axios.get(`https://raw.githubusercontent.com/DIEGO-OFC/DORRAT-BOT-MD/master/galeria/JSON/yuri.json`)).data  
let url = await res[Math.floor(res.length * Math.random())]
conn.sendButton(m.chat, `_${command}_`.trim(), author, url, [['π ππΈπΆππΈπ΄π½ππ΄ π', `/${command}`]], m)}
  
if (command == 'yuri2') {
let res = (await axios.get(`https://raw.githubusercontent.com/DIEGO-OFC/DORRAT-BOT-MD/master/galeria/JSON/yuri2.json`)).data  
let url = await res[Math.floor(res.length * Math.random())]
conn.sendButton(m.chat, `_${command}_`.trim(), author, url, [['π ππΈπΆππΈπ΄π½ππ΄ π', `/${command}`]], m)}
  
  
  
}  
handler.help = ['nsfwloli', 'nsfwfoot', 'nsfwass', 'nsfwbdsm', 'nsfwcum', 'nsfwero', 'nsfwfemdom', 'nsfwfoot', 'nsfwglass', 'nsfworgy', 'yuri', 'yuri2', 'yaoi', 'yaoi2', 'panties', 'tetas', 'booty', 'ecchi', 'furro', 'hentai', 'trapito', 'imagenlesbians', 'pene', 'porno', 'randomxxx', 'pechos']
handler.command = ['nsfwloli', 'nsfwfoot', 'nsfwass', 'nsfwbdsm', 'nsfwcum', 'nsfwero', 'nsfwfemdom', 'nsfwfoot', 'nsfwglass', 'nsfworgy', 'yuri', 'yuri2', 'yaoi', 'yaoi2', 'panties', 'tetas', 'booty', 'ecchi', 'furro', 'hentai', 'trapito', 'imagenlesbians', 'pene', 'porno', 'randomxxx', 'pechos']
handler.limit = 5
handler.tags = ['nsfw']
export default  handler
