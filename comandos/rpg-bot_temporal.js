let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i
import fetch from 'node-fetch';

let handler = async (m, { conn, args, usedPrefix, command, isPrems, isOwner, isROwner}) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let grupos = [md]
let gata = [imagen1, imagen4]
let dos = [md]  

let texto0 = `${ag}*La funciรณn de "bottemporal" esta restringida por el creador, intentalo mas tarde o use la funciรณn ${usedPrefix}serbot*`
let texto1 = `${mg}Use el comando como este ejemplo\n*${usedPrefix + command} enlace de Grupo y el tiempo*\n*${usedPrefix + command} ${grupos.getRandom()} 20*\n\n*20* BitCoin ๐ช = *30* minutos`
let texto2 = `${ag}ยกNo tienes BitCoins ๐ช\n\nObten BitCoins para unir a THE VIRUZZ-BOT MD a Tu grupo con el comando:\n*${usedPrefix}minarbitcoin*`
let texto3 = `${fg}El enlace no funciona o el bot fue eliminado de el grupo, compruebe que el comando sea similar a el ejemplo\n*${usedPrefix + command} ${grupos.getRandom()} 20*`
let texto4 = `${mg}Ingrese el tiempo de estadia de el bot\n*20* BitCoin ๐ช = *30* minutos`
let texto5 = `${fg}Minimo *20* BitCoins para unir a VIRUZZ-BOT`
let texto6 = `${fg}Maximo ** BitCoin para unir a VIRUZZ-BOT`

let texto7 = `โ Se ah unido correctamente, el bot se saldra automรกticamente cuando se agote el tiempo`

let img1 = 'https://img.freepik.com/vector-premium/animacion-monedas-pixeles-imagenes-animacion-moneda-oro-ilustracion-vectorial_350225-3.jpg?w=2000'
let img2 ='https://img.freepik.com/premium-vector/set-8bit-pixel-graphics-icons-game-art-coins-gold-animation_534389-12.jpg?w=2000'

if (!global.db.data.settings[conn.user.jid].temporal) return conn.sendButton( m.chat, wm, texto0, null, [[`๐๐๐๐๐พ๐๐๐ผ๐ ๐พ๐๐๐ผ๐๐ฟ๐`, `.reporte *Quiero unir a VIRUZZ-BOT en mรญ Grupo. Por favor Active la funciรณn #botemporal*`], [`MENร`, `.menu`]], fkontak, m) 

if (!args[0]) return conn.sendButton( m.chat, wm, texto1, null, [[`MENร`, `.menu`]], fkontak, m)
let [_, code] = args[0].match(linkRegex) || []

if (!linkRegex.test(args[0])) return conn.sendButton( m.chat, wm, texto3, null, [[`MENร`, `.menu`]], fkontak, m)
let user = db.data.users[m.sender]

if (!(isPrems || isOwner || isROwner)) { //Para Usuarios
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
let username = conn.getName(who)
//if (!args[1]) throw `${mg}*USE EL COMANDO COMO ESTE EJEMPLO*\n*${usedPrefix + command} enlace y Nรบmero de BitCoins*\n\n*EJEMPLO*\n*${usedPrefix + command} ${nn} 20*\n\n*20 BitCoin ๐ช = 30 MINUTOS*`
//if (!linkRegex.test(args[0])) throw `${fg}๐๐๐๐ผ๐พ๐ ๐๐ ๐๐ผ๐๐๐ฟ๐.` //Aquรญ 
if (user.bitcoins <= 1) return conn.sendButton( m.chat, wm, texto2, img1, [[`MINAR BITCOIN : ${rpgshopp.emoticon('bitcoins')}`, `.minarbc`]], fkontak, m)
if (isNaN(args[1])) return conn.sendButton( m.chat, wm, texto4, img1, [[`MENร`, `.menu`]], fkontak, m)
if (args[1] < 20) return conn.sendButton( m.chat, wm, texto5, img2, [[`MENร`, `.menu`]], fkontak, m)
if (args[1] > 20) return conn.sendButton( m.chat, wm, texto6, img2, [[`MENร`, `.menu`]], fkontak, m) //Solo ingresarรก si tiene 3 Token(s)
 
let res = await conn.groupAcceptInvite(code)
await conn.sendButton( m.chat, texto7, `${await conn.getName(res)} | ` + wm, null, [[`MENร`, `.menu`]], fkontak, m).then(async() => { 
user.bitcoins -= args[1] 
var jumlahHari = 600000 * args[1] // 10 minutos | Usuarios
var now = new Date() * 1
 
if (now < global.db.data.chats[res].expired) global.db.data.chats[res].expired += jumlahHari
else global.db.data.chats[res].expired = now + jumlahHari
await conn.sendButton( m.chat, wm, `โ ๐๐ ๐๐ผ ๐๐๐๐ฟ๐ ๐ผ๐ ๐๐๐๐๐!!!\n${await conn.getName(res)}\n\n๐๐๐พ๐๐๐๐ฟ๐ ๐๐๐ ๐๐ โณ ๐๐๐๐๐๐๐ผ๐, ๐๐๐ ๐๐ ๐พ๐๐๐ผ๐๐ฟ๐ *${usedPrefix}menu* ๐๐ผ๐๐ผ ๐๐๐ ๐๐ ๐๐๐๐\n\n๐ช ๐๐ ๐๐ผ๐๐ฟ๐๐ ๐ผ๐๐๐๐๐ผ๐๐๐พ๐ผ๐๐๐๐๐ ๐๐:\n${msToDate(global.db.data.chats[res].expired - now)}\n\n*${username}* ๐๐ ๐๐๐๐ฟ๐ผ *${user.bitcoins}* BitCoins๐ช\n\nโ ๐๐๐๐ฟ๐ ๐๐๐ผ๐ ๐๐ ๐พ๐๐๐ผ๐๐ฟ๐ *${usedPrefix + command}* ๐๐ผ๐๐ฝ๐๐๐ ๐๐ ๐๐ ๐๐๐๐๐ ๐๐๐๐๐๐๐ผ๐ ๐๐๐๐ ๐๐\n\nโ\n*${usedPrefix + command}*\n\nโ ๐๐ผ๐๐ผ ๐๐๐ผ ๐๐๐๐๐ ๐๐๐๐๐๐๐๐๐พ๐๐ผ, ๐ฟ๐๐ฝ๐ ๐ฟ๐ ๐๐๐ ๐ผ๐ฟ๐๐๐\n\nโ ๐๐ ๐พ๐ผ๐๐ ๐๐๐ ๐๐ ๐ผ๐ฟ๐๐๐ ๐๐ ๐๐๐๐๐๐๐ ๐ฟ๐๐ ๐๐๐๐๐ ๐ ๐๐๐๐๐๐ผ ๐๐๐ ๐๐๐๐๐๐ผ ๐๐ ๐๐ ๐๐ผ ๐๐๐ฟ๐๐`, null, [[`+30 ๐๐๐๐๐๐๐ ๐๐ ๐๐๐๐๐`, `${usedPrefix + command} ${args[0]} 3`], [`MENร`, `.menu`]], fkontak, m)
await conn.sendButton( m.chat, botdate, `${igfg} ๐๐ ๐๐ ๐ฝ๐๐ ๐ฟ๐ ๐๐๐ผ๐๐๐ผ๐๐ ๐๐๐ ๐๐ ๐ผ๐๐๐ฟ๐ผ๐๐ผ ๐๐๐ผ๐๐๐๐ผ๐ ๐ฟ๐๐๐๐๐๐๐๐๐ ๐ผ๐พ๐๐๐๐๐ฟ๐ผ๐ฟ๐๐ ๐ช ๐ผ๐ ๐๐๐๐๐ผ๐ฟ๐ ๐ ๐๐๐๐๐ ๐ ๐๐ผ๐๐ฝ๐๐๐ ๐๐ ๐๐ผ๐ ๐ผ ๐ฟ๐๐๐๐๐๐๐ ๐ ๐พ๐๐ ๐๐๐ ๐๐๐๐๐๐๐๐๐ ๐๐๐๐พ๐๐๐๐๐, ๐ฟ๐๐๐๐๐๐๐ผ ๐ฟ๐ *VIRUZZ-BOT*!!!  ๐\n\๐ฃ๐? *VIRUZZ-BOT-MD* ๐๐๐ ๐๐๐๐๐๐ผ๐ฟ๐ ๐๐๐:\n*${username}*`, gata.getRandom(), [[`MENร COMPLETO`, `.allmenu`]], fkontak, m)
//for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
//let data = (await conn.onWhatsApp(jid))[0] || {}
  //if (data.exists) 
    //conn.reply(m.chat, `@${m.sender.split`@`[0]} adicional ${conn.user.name} a ${await conn.getName(res)}\njid: ${res}, el bot se apagarรก a tiempo: ${msToDate(global.db.data.chats[res].expired - now)}`, data.jid, m) 
})

       
} else if ((isOwner || !isPrems || isROwner)) { //Para Owner
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
let username = conn.getName(who)
  
if (user.bitcoins === 0 ) throw `${ag}*ยกYA NO TIENES BitCoins! ๐ช*\n\n*MINA BITCOIN PARA PODER INVITAR A THE VIRUZZ-BOT MD A Tร GRUPO CON EL COMANDO *${usedPrefix}minarbitcoin*`
 if (!args[1]) throw `${mg}*USE EL COMANDO COMO ESTE EJEMPLO*\n*${usedPrefix + command} enlace y Tiempo*\n\n*EJEMPLO*\n*${usedPrefix + command} ${nn} 20*\n\n*20 BitCoins ๐ช = 30 MINUTOS*`
if (!linkRegex.test(args[0])) throw `${fg}๐๐๐๐ผ๐พ๐ ๐๐ ๐๐ผ๐๐๐ฟ๐.` //Aquรญ 

let res = await conn.groupAcceptInvite(code) 
conn.reply(m.chat, `โ *SE HA UNIDO THE VIRUZZ-BOT MD AL GRUPO!!!*`, m).then(async() => { //Si el Owner se une al Grupo no habrรก temporizador
let img = './Menu2.jpg'
 var jumlahHari = 600000 * args[1] // 10 minutos | Owner
 var now = new Date() * 1
  if (now < global.db.data.chats[res].expired) global.db.data.chats[res].expired += jumlahHari
else global.db.data.chats[res].expired = now + jumlahHari

await conn.reply(m.chat, `โ SE HA UNIDO AL GRUPO!!!\n${await conn.getName(res)}\n\n*RECUERDE QUE ES โณ TEMPORAL, USE EL COMANDO ${usedPrefix}menu PARA VER EL MENร*\n\n๐ช *ME SALDRร AUTOMรTICAMENTE EN:*\n${msToDate(global.db.data.chats[res].expired - now)}\n\n${username} *LE QUEDA ${user.bitcoins} bitcoins ๐ช*\n\nโ *PUEDE USAR EL COMANDO TAMBIรN EN GRUPO MIENTRAS ESTE YO*\n\nโ *SI QUIERE QUE ESTE POR MรS TIEMPO AUMENTE EL NรMERO DE TOKENS CUANDO USE EL COMANDO*\n*${usedPrefix + command}*\n\nโ *EN CASO QUE UN ADMIN ME ELIMINE DEL GRUPO Y QUIERA QUE VUELVA SE JODE, NO SE VA PODER*`, m)  
await conn.reply(m.chat, `${wm} *ES UN BOT DE WHATSAPP QUE TE AYUDARร A REALIZAR DIFERENTES ACTIVIDADES ๐ช AL PRIVADO O GRUPO Y TAMBIรN TE VAS A DIVERTIR ๐ CON SUS MULTIPLES FUNCIONES, DISFRUTA DE *VIRUZZ-BOT*!!! ๐*\n\n๐ *VIRUZZ-BOT-MD FUE INVITADO POR:*\n${username}`, m)
for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != m.sender)) {
let data = (await conn.onWhatsApp(jid))[0] || {}
  if (data.exists) 
    conn.reply(m.chat, `@${m.sender.split`@`[0]} adicional ${conn.user.name} a ${await conn.getName(res)}\njid: ${res}, el bot se apagarรก a tiempo: ${msToDate(global.db.data.chats[res].expired - now)}`, data.jid, m)
                
} conn.sendButton(m.chat, '', wm, null, [['OWNERS', `/owner`], ['MENร', '/menu']], m, res) })}
}
handler.help = ['temporal', 'tiempo']
handler.command = ['bottemporal', 'botemporal', 'addbot', 'botadd']

handler.registerย?=ย?true
export default handler

function msToDate(ms) {
let temp = ms
let days = Math.floor(ms / (24 * 60 * 60 * 1000));
let daysms = ms % (24 * 60 * 60 * 1000);
let hours = Math.floor((daysms) / (60 * 60 * 1000));
let hoursms = ms % (60 * 60 * 1000);
let minutes = Math.floor((hoursms) / (60 * 1000));
let minutesms = ms % (60 * 1000);
let sec = Math.floor((minutesms) / (1000));
return days + " *Dรญa(s)* โ๏ธ\n" + hours + " *Hora(s)* โณ\n" + minutes + " *Minuto(s)* โฐ\n" + sec + " *Segundo(s)* ๐\n";
}
