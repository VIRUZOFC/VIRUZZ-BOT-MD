import moment from 'moment-timezone'
import fs, { promises } from 'fs'
import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, command, args, usedPrefix: _p, __dirname, isOwner, text, isAdmin, isROwner }) => {
let vn = './media/menu.mp3'
let d = new Date(new Date + 3600000)
let locale = 'es'
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)
let {money} = global.db.data.users[m.sender]
let { exp, limit, dolares, level, role } = global.db.data.users[m.sender]
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length 
let more = String.fromCharCode(8206)
let readMore = more.repeat(850)   
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
let username = conn.getName(who)
let imagenMEnu = ['https://i.imgur.com/1qOn8Vw.jpg', 'https://i.imgur.com/vExxeYz.jpg']
let db = './Menu2.jpg'
let pp = './galeria/VIRUZZ-menu.mp4'
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let fsizedoc = '1'.repeat(10)
let adReply = { fileLength: fsizedoc, seconds: fsizedoc, contextInfo: { forwardingScore: fsizedoc, externalAdReply: { showAdAttribution: true, title: wm, body: '๐ ' + username, mediaUrl: yt, description: 'Hola', previewType: 'PHOTO', thumbnail: await(await fetch(imagenMEnu.getRandom())).buffer(), sourceUrl: menulinks.getRandom() }}}
m.reply(`[ Enviando el menรบ... ]`)
//no me roben la decoracion, no tengo creatividad

let menuA = `
*โญโโใ โ ${wm} โ ใโโโฎ*
*โโ โ ${ucapan()}, ${username}*
*โโ โ CREADOR DEL BOT:  ${creatorname}*
*โโ โ NUMERO DEL CREADOR:* wa.me/595986674310 *(No bot)*
*โโ โ VERSION ยป ${vs}*
*โโ โ FECHA ยป ${week}, ${date}*
*โโ โ TIEMPO ACTIVO ยป ${uptime}*
*โโ โ LIBRERIA ยป ${library}*
*โโ โ LENGUAJE ยป ESPAรOL LATINO*
*โโ โ USUARIOS ยป ${Object.keys(global.db.data.users).length}*
*โโฐโโโโโโโโโโโโโโโโโพโข*
*โฐโโโโผโ ~VIRUZZ-BOT-MD~ โโพโโโโฏ*`.trim()

let menuB = `
*โใ INFO DEL USUARIO ใโฌฃโ*
*โ๐ค NOMBRE: ${username}*
*โ๐งฐ EXPERIENCIA โ ${exp}*
*โโ RANGO โ* ${role}*
*โ๐ DIAMANTES โ ${limit}*
*โ๐ธ DOLARES โ ${dolares}*
*โฐโโ*โโโโโโโโโโโโโ *โง*

โโโโโโ INFO-BOT โโโโโโ 
โ โ  ๏ธ_${usedPrefix}grupos_
โ โ _${usedPrefix}estado_
โ โ ๏ธ _${usedPrefix}terminos_
โ โ๏ธ _${usedPrefix}instalarbot_
โ โ _${usedPrefix}infobot_
โ โ _${usedPrefix}grouplist_
โ โ _${usedPrefix}owner_
โ โ _${usedPrefix}script_
โ โ๏ธ _Bot_ (๐ข๐?๐ ๐?๐๐ ๐๐๐๐๐๐๐)
โโโโโ โช โขโโข โซ โโโโโ

โโโโโโ REPORTAR โโโโโโ 
โ โ _*Reporta con este comando de haber*_
โ โ _*Fallas para poder Solucionar!!*_
โโโโโโโโโโโโโโโโโโโโโโโโโ
โ๏ธ โ _${usedPrefix}reporte *texto*_
โ โ _${usedPrefix}report *texto*_
โโโโโ โช โขโโข โซ โโโโโ

โโโโ PAGINA DE AYUDA โโโโ 
โโโโโโโโโโโโโโโ
โ โ *PRรXIMAMENTE*
โโโโโ โช โขโโข โซ โโโโโ

โโโโโโโโโโโโโโโ 
โ *<UNE UN BOT A TU GRUPO/>*
โโโโโโโโโโโโโโโโโโโ
โ โฑ_${usedPrefix}bottemporal *link del grupo*
โโโโโ โช โขโโข โซ โโโโโ

โโโโโโ JADIBOT ๐ค โโโโโโ 
โ โ ๏ธ_${usedPrefix}serbot
โ โ ๏ธ_${usedPrefix}stop
โ โ ๏ธ_${usedPrefix}bots
โโโโโ โช โขโโข โซ โโโโโ

โโโโโโ RPG โโโโโโ 
โ โ ${usedPrefix}cazar
โ โ ${usedPrefix}aventura
โ โ ${usedPrefix}balance
โ โ๏ธ ${usedPrefix}claim
โ โ๏ธ ${usedPrefix}top
โ โ๏ธ ${usedPrefix}heal
โ โ ${usedPrefix}cartera
โ โ ${usedPrefix}inventory 
โ โ๏ธ ${usedPrefix}levelup
โ โ๏ธ ${usedPrefix}myns
โ โ ${usedPrefix}perfil
โ โ๏ธ ${usedPrefix}work
โ โ ${usedPrefix}rob <@tag
โ โ๏ธ ${usedPrefix}minar
โ โ๏ธ ${usedPrefix}buy
โ โ ${usedPrefix}minardiamantes  
โ โ๏ธ ${usedPrefix}transfer <tipo> <cantidad> <@tag
โ โ ${usedPrefix}verificar
โ โ๏ธ ${usedPrefix}unreg <numero de serie>
โโโโโ โช โขโโข โซ โโโโโ

โโโโโโ GAMES โโโโโโ 
โ โ ${usedPrefix}suitpvp <@tag>
โ โ ${usedPrefix}suerte <cara/cruz>
โ โ ${usedPrefix}mates <noob / easy / medium / hard / extreme /impossible /impossible2>
โ โ ${usedPrefix}ppt <papel / tijera /piedra
โ โ ${usedPrefix}prostituto <nombre / @tag
โ โ ${usedPrefix}prostituta <nombre / @tag
โ โ ${usedPrefix}hetero <nombre / @tag
โ โ ${usedPrefix}gay2 <nombre / @tag
โ โ ${usedPrefix}lesbiana <nombre / @tag
โ โ ${usedPrefix}pajero <nombre / @tag
โ โ ${usedPrefix}pajera <nombre / @tag
โ โ ${usedPrefix}puto <nombre / @tag
โ โ ${usedPrefix}puta <nombre / @tag
โ โ ${usedPrefix}manco <nombre / @tag
โ โ ${usedPrefix}manca <nombre / @tag
โ โ ${usedPrefix}rata <nombre / @tag
โ โ ${usedPrefix}love <nombre / @tag
โ โ ${usedPrefix}doxear <nombre / @tag
โ โ ${usedPrefix}pregunta <texto
โ โ ${usedPrefix}slot 
โ โ ${usedPrefix}simi <texto
โ โ ${usedPrefix}topgays
โ โ ${usedPrefix}topotakus
โ โ ${usedPrefix}formarpareja
โ โ ${usedPrefix}formarpareja5 
โ โ ${usedPrefix}amistad
โ โ ${usedPrefix}verdad
โ โ ${usedPrefix}reto
โโโโโ โช โขโโข โซ โโโโโ

โโโโโโ ENABLE/DISABLE โโโโโโ 
โ โ ${usedPrefix}enable *welcome*
โ โ ${usedPrefix}disable *welcome*
โ โ ${usedPrefix}enable *modohorny*
โ โ ${usedPrefix}disable *modohorny*
โ โ ${usedPrefix}enable *antilink*
โ โ ${usedPrefix}disable *antilink*
โ โ ${usedPrefix}enable *antilink2*
โ โ ${usedPrefix}disable *antilink2*
โ โ ${usedPrefix}enable *detect*
โ โ ${usedPrefix}disable *detect*
โ โ ${usedPrefix}enable *audios*
โ โ ${usedPrefix}disable *audios*
โ โ ${usedPrefix}enable *autosticker*
โ โ ${usedPrefix}disable *autosticker*
โ โ ${usedPrefix}enable *antiviewonce*
โ โ ${usedPrefix}enable *antitraba*
โ โ ${usedPrefix}disable *antitraba*
โ โ ${usedPrefix}enable *antiArab*
โ โ ${usedPrefix}disable *antiArab*
โ โ ${usedPrefix}enable *simi*
โ โ ${usedPrefix}disable *simi*
โ โ ${usedPrefix}enable *modoadmin*
โ โ ${usedPrefix}disable *modoadmin*
โโโโโ โช โขโโข โซ โโโโโ

โโใ๐ป๐๐๐๐๐๐๐๐๐๐ใ
โโข${usedPrefix}facebook <enlace / link / url
โโข${usedPrefix}instagram <enlace / link / url
โโข${usedPrefix}mediafire <enlace / link / url
โโข${usedPrefix}gitclone <enlace / link / url
โโข${usedPrefix}tiktok <enlace / link / url
โโข${usedPrefix}ytmp3 <enlace / link / url
โโข${usedPrefix}ytmp4 <enlace / link / url
โโข${usedPrefix}play.1 <texto / enlace / link / url
โโข${usedPrefix}play.2 <texto / enlace / link / url
โโข${usedPrefix}play <texto
โโข${usedPrefix}spotify <texto
โโข${usedPrefix}imagen <texto
โโข${usedPrefix}pinteret <texto
โโข${usedPrefix}wallpaper <texto
โโข${usedPrefix}wallpaper2 <texto
โโข${usedPrefix}pptiktok <nombre de usuario
โโข${usedPrefix}igstalk <nombre de usuario
โโข${usedPrefix}tiktokstalk <nombre de usuario
โโโโโืโืโืโืโโ

โโโใ๐ข๐๐๐๐๐ใโ
โโข${usedPrefix}add *<nรบmero>*
โโข${usedPrefix}kick *<@tag>*
โโข${usedPrefix}kick2 *<@tag>*
โโข${usedPrefix}listanum *<texto>*
โโข${usedPrefix}kicknum *<texto>*
โโข${usedPrefix}resetlink
โโข${usedPrefix}encuesta *<texto>
โโข${usedPrefix}votar *<texto>*
โโข${usedPrefix}listadv
โโข${usedPrefix}deladvertencia <@tag
โโข${usedPrefix}advertencia <@tag
โโข${usedPrefix}grouptime *<opcion> <tiempo>*
โโข${usedPrefix}grupo <abrir / cerrar
โโข${usedPrefix}promote <@tag
โโข${usedPrefix}demote <@tag
โโข${usedPrefix}banchat (owner option)
โโข${usedPrefix}unbanchat (owner option)
โโขadmins *<texto>_ (๐ข๐?๐ ๐?๐๐ ๐๐๐๐๐๐๐)
โโข${usedPrefix}demote <@tag
โโข${usedPrefix}infogroup
โโข${usedPrefix}link
โโข${usedPrefix}setname <texto
โโข${usedPrefix}setdesc <texto
โโข${usedPrefix}invocar <texto
โโข${usedPrefix}setwelcome <texto
โโข${usedPrefix}setbye <texto
โโข${usedPrefix}hidetag <texto
โโข${usedPrefix}simular <welcome / bye / promote / demote>
โโข${usedPrefix}destraba 
โโโโโืโืโืโืโโโ

โโโใ๐ก๏ธ๐๐๐๐๐๐ใโ
โโข/script
โโโโโืโืโืโืโโโ

โโโใ๐๐๐๐๐๐๐๐๐๐๐๐๐๐ใ
โโข_${usedPrefix}togifaud *<responde a un video>*
โโข_${usedPrefix}toimg *<responde a un sticker>*
โโข_${usedPrefix}tomp3 *<responde a un video / nota de voz>*
โโข_${usedPrefix}toptt *<responde a un video / audio>*
โโข_${usedPrefix}tovideo *<responde a un sticker>*
โโข_${usedPrefix}tourl *<responde a un video / imagen / audio>*
โโข_${usedPrefix}tts es *<texto>*
โโโโโืโืโืโืโโโ

โโโใ๐๐๐๐๐๐ใโ
โโข${usedPrefix}logos <efecto <texto
โโข${usedPrefix}simpcard <@tag
โโข${usedPrefix}hornycard <@tag
โโข${usedPrefix}lolice <@tag
โโข${usedPrefix}ytcomment <texto
โโข${usedPrefix}itssostupid
โโข${usedPrefix}pixelar
โโข${usedPrefix}blur
โโโโโืโืโืโืโโโ


โโโใ๐น๐๐ซ๐๐ฌ๐๐ฌ ๐ฒ ๐ญ๐๐ฑ๐ญ๐จ๐ฌใโ
โโข_${usedPrefix}piropo_
โโข_${usedPrefix}consejo_
โโข_${usedPrefix}fraseromantica_
โโข_${usedPrefix}historiaromantica_
โโโโโืโืโืโืโโ

โโโใโฉ๏ธ๐๐๐๐๐๐ใโ
โโข${usedPrefix}cristianoronaldo
โโข${usedPrefix}messi
โโข${usedPrefix}meme
โโข${usedPrefix}itzy
โโข${usedPrefix}blackpink
โโข${usedPrefix}kpop <blackpink / exo / bts
โโข${usedPrefix}lolivid
โโข${usedPrefix}loli
โโข${usedPrefix}navidad
โโข${usedPrefix}ppcouple
โโข${usedPrefix}neko
โโข${usedPrefix}waifu
โโข${usedPrefix}akira
โโข${usedPrefix}akiyama
โโข${usedPrefix}anna
โโข${usedPrefix}asuna
โโข${usedPrefix}ayuzawa
โโข${usedPrefix}boruto
โโข${usedPrefix}chiho
โโข${usedPrefix}chitoge
โโข${usedPrefix}deidara
โโข${usedPrefix}erza
โโข${usedPrefix}elaina
โโข${usedPrefix}eba
โโข${usedPrefix}emilia
โโข${usedPrefix}hestia
โโข${usedPrefix}hinata
โโข${usedPrefix}inori
โโข${usedPrefix}isuzu
โโข${usedPrefix}itachi
โโข${usedPrefix}itori
โโข${usedPrefix}kaga
โโข${usedPrefix}kagura
โโข${usedPrefix}kaori
โโข${usedPrefix}keneki
โโข${usedPrefix}kotori
โโข${usedPrefix}kurumi
โโข${usedPrefix}madara
โโข${usedPrefix}mikasa
โโข${usedPrefix}miku
โโข${usedPrefix}minato
โโข${usedPrefix}naruto
โโข${usedPrefix}nezuko
โโข${usedPrefix}sagiri
โโข${usedPrefix}sasuke
โโข${usedPrefix}sakura
โโข${usedPrefix}cosplay
โโโโโืโืโืโืโโโ

โโโใ๐๐๐จ๐ฆ๐๐ง๐๐จ๐ฌ +๐๐ใ
โโข_${usedPrefix}pack
โโข_${usedPrefix}pack2
โโข_${usedPrefix}videoxxx
โโข_${usedPrefix}tiktokxxx
โโข_${usedPrefix}tetas
โโข_${usedPrefix}booty
โโข_${usedPrefix}ecchi
โโข_${usedPrefix}imagenlesbians
โโข_${usedPrefix}panties
โโข_${usedPrefix}porno
โโข_${usedPrefix}randomxxx
โโข_${usedPrefix}pechos
โโข_${usedPrefix}yuri
โโข_${usedPrefix}yuri2
โโข_${usedPrefix}hentai
โโข_${usedPrefix}nsfwloli
โโข_${usedPrefix}nsfworgy
โโข_${usedPrefix}nsfwfoot
โโข_${usedPrefix}nsfwass
โโข_${usedPrefix}nsfwbdsm
โโข_${usedPrefix}nsfwcum
โโข_${usedPrefix}nsfwero
โโข_${usedPrefix}nsfwglass
โโข_${usedPrefix}hentaipdf *<texto>*
โโโโโืโืโืโืโโ

โโโใ๐๐๐๐๐ญ๐จ๐ฌ ๐๐ ๐๐ฎ๐๐ข๐จ๐ฌใ
โโข*- ๐๐ด๐๐ฟ๐พ๐ฝ๐ณ๐ด ๐ฐ ๐๐ฝ ๐ฐ๐๐ณ๐ธ๐พ ๐พ ๐ฝ๐พ๐๐ฐ ๐ณ๐ด ๐๐พ๐*
โโข_${usedPrefix}bass
โโข_${usedPrefix}blown
โโข_${usedPrefix}deep
โโข_${usedPrefix}earrape
โโข_${usedPrefix}fast
โโข_${usedPrefix}fat
โโข_${usedPrefix}nightcore
โโข_${usedPrefix}reverse
โโข_${usedPrefix}robot
โโข_${usedPrefix}slow
โโข_${usedPrefix}smooth
โโข_${usedPrefix}tupai
โโโโโืโืโืโืโโ

โใโพ๐๐ก๐๐ญ ๐๐ง๐จ๐ง๐ข๐ฆ๐จใ
โโข_${usedPrefix}start
โโข_${usedPrefix}next
โโข_${usedPrefix}leave
โโโโโืโืโืโืโโ

โใ๐๐๐ฎ๐ฌ๐๐๐ซใ
โโข_${usedPrefix}apkpure <*texto*>
โโข_${usedPrefix}covid <*paรญs*>
โโข_${usedPrefix}playstore <*texto*>
โโข_${usedPrefix}stickersearch *<texto>*
โโข_${usedPrefix}xnxxsearch *<texto>*
โโข_${usedPrefix}animeinfo *<texto>*
โโข_${usedPrefix}google *<texto>*
โโข_${usedPrefix}letra *<texto>*
โโข_${usedPrefix}wikipedia *<texto>*
โโข_${usedPrefix}ytsearch *<texto>*
โโข_${usedPrefix}revdl *<texto>*
โโข_${usedPrefix}toraccino *<texto>*
โโโโโืโืโืโืโโ

โใ๐ต๐๐๐๐๐๐ใ
โโข_๐ด๐๐ฒ๐๐ธ๐ฑ๐ด ๐ป๐ฐ๐ ๐๐ธ๐ถ๐๐ธ๐ด๐ฝ๐๐ด๐ ๐ฟ๐ฐ๐ป๐ฐ๐ฑ๐๐ฐ๐ ๐พ ๐ต๐๐ฐ๐๐ด๐ ๐๐ธ๐ฝ ๐ฝ๐ธ๐ฝ๐ถ๐๐ฝ ๐ฟ๐๐ด๐ต๐ธ๐น๐พ (#, /, *, .)
โโข_(๐ข๐?๐ ๐?๐๐ ๐๐๐๐๐๐๐)
โโข_Quien es tu sempai botsito 7w7
โโข_Te diagnostico con gay
โโข_A nadie le importa
โโข_Fiesta del admin
โโข_Fiesta del administrador
โโข_Vivan los novios
โโข_Feliz cumpleaรฑos
โโข_No digas mamadas Mariyein
โโข_Noche de paz
โโข_Buenos dias
โโข_Cambiate a Movistar 
โโข_Bienvenido
โโข_Calla fan de bts
โโข_Las reglas del grupo
โโข_Buenos tardes
โโข_Buenos noches
โโข_Audio hentai
โโข_Chica lgante
โโข_Feliz navidad
โโข_Vete a la vrg
โโข_Pasa pack Bot
โโข_Atencion grupo
โโข_Marica quien
โโข_Murio el grupo
โโข_Oh me vengo
โโข_tio que rico
โโข_Viernes
โโข_Baneado
โโข_Sexo
โโข_Hola
โโข_Un pato
โโข_Nyanpasu
โโข_Te amo
โโข_Yamete
โโข_Baรฑate
โโข_Es puto
โโข_La biblia
โโข_Onichan
โโข_Mierda de Bot
โโข_Siuuu
โโข_Epico
โโข_Shitpost
โโข_Rawr
โโข_UwU
โโข_:(
โโข_a
โโโโโืโืโืโืโโ


โโโใ๐?๏ธ๐๐๐๐๐๐๐๐๐๐๐๐ใโ
โโข_${usedPrefix}inspect *<link del grupo>*
โโข_${usedPrefix}ofuscar *<cรณdigo>*
โโข_${usedPrefix}reenviar *<responder a un mensaje>*
โโข_${usedPrefix}copy *<texto>*
โโข_${usedPrefix}chatgpt *<texto>*
โโข_${usedPrefix}morse *<texto>*
โโข_${usedPrefix}captura *<link de la pรกgina>*
โโข_${usedPrefix}horario
โโข_${usedPrefix}encuestas texto|texto
โโข_${usedPrefix}afk *<motivo>*
โโข_${usedPrefix}ocr *<responde a imagen>*
โโข_${usedPrefix}tamaรฑo *<cantidad> <responde a imagen / video>*
โโข_${usedPrefix}acortar *<enlace / link / url>*
โโข_${usedPrefix}calc *<operacion math>*
โโข_${usedPrefix}del *<respondre a mensaje del Bot>*
โโข_${usedPrefix}whatmusic *<responde a un audio>*
โโข_${usedPrefix}qrcode *<texto>*
โโข_${usedPrefix}readmore *<texto1| texto2>*
โโข_${usedPrefix}spamwa *<numero|texto|cantidad>*
โโข_${usedPrefix}styletext *<texto>*
โโข_${usedPrefix}traducir *<texto>*
โโข_${usedPrefix}nowa *<numero>*
โโโโโืโืโืโืโโโ

โโโใ๐๐๐๐๐๐๐๐ใโ
โโข_${usedPrefix}sticker *<responder a imagen o video>*
โโข_${usedPrefix}sticker *<enlace / link / url>*
โโข_${usedPrefix}s *<responder a imagen o video>*
โโข_${usedPrefix}s *<enlace / link / url>*
โโข_${usedPrefix}sfull *<responder a imagen o video>*
โโข_${usedPrefix}emojimix *<emoji 1>&<emoji 2>*
โโข_${usedPrefix}scircle *<responder a imagen>*
โโข_${usedPrefix}sremovebg *<responder a imagen>*
โโข_${usedPrefix}semoji *<tipo> <emoji>*
โโข_${usedPrefix}attp *<texto>*
โโข_${usedPrefix}attp2 *<texto>*
โโข_${usedPrefix}attp3 *<texto>*
โโข_${usedPrefix}ttp *<texto>*
โโข_${usedPrefix}ttp2 *<texto>*
โโข_${usedPrefix}ttp3 *<texto>*
โโข_${usedPrefix}ttp4 *<texto>*
โโข_${usedPrefix}ttp5 *<texto>*
โโข_${usedPrefix}pat *<@tag>*
โโข_${usedPrefix}slap *<@tag>*
โโข_${usedPrefix}kiss *<@tag>*
โโข_${usedPrefix}dado
โโข_${usedPrefix}wm *<packname> <author>*
โโข_${usedPrefix}stickermarker *<efecto> <responder a imagen>*
โโข_${usedPrefix}stickerfilter *<efecto> <responder a imagen>*
โโโโโืโืโืโืโโโ

โฃโโโโฐ๏ฝฅ *OWNER ๐* ๏ฝฅโฑโโโโซ
โโขโขโบโช๏ธ PARA VER LOS COMANDOS DE OWNER USE:
โโขโขโบโช๏ธ ${usedPrefix}soloparaelpropietario
๐ โฌโฌโฌโฌ โ โฌโฌโฌโฌ ๐

โโโโโโโโโโโโโโโโโโโโ 
โ โก ${wm} โก
โโโโโโโโโโโโโโโโโโโโ
`.trim()
await conn.sendButton(m.chat, menuA, menuB,  pp, [
['GRUPOS', `#grupos`],
['DONAR', `#donar`]
], m)
const sections = [
{
title: `*INFORMACION*`,
rows: [
{title: "/grupos", description: "muestra los grupos del bot", rowId: `${usedPrefix}grupos`},
{title: "/estado", description: "para ver el estado del bot", rowId: `${usedPrefix}estado`},
{title: "/terminos", description: "para leer los tรฉrminos y condiciones del bot", rowId: `${usedPrefix}tรฉrminos`},
{title: "/instalarbot", description: "informaciรณn para instalar al bot", rowId: `${usedPrefix}instalarbot`},
{title: "/infobot", description: "informacion del bot", rowId: `${usedPrefix}infobot`},
{title: "/grouplist", description: "muestra los grupos en donde estรก el bot", rowId: `${usedPrefix}grouplist`},
{title: "/owner", description: "muestra los creadores del bot", rowId: `${usedPrefix}owner`},
{title: "/script", description: "muestra el github del bot", rowId: `${usedPrefix}sc`},
]}, ]
const listMessage = {
text: wm3,
footer: `๐ผ๐ด๐ฝ๐ ๐ณ๐ด๐๐ฟ๐ป๐ด๐ถ๐ฐ๐ฑ๐ป๐ด`,
title: null,
buttonText: "selecionar", 
sections }

 conn.sendMessage(m.chat, listMessage, {quoted: fkontak})	
}

handler.command = /^(menucompleto|menu completo|allmenu)$/i
handler.exp = 50
handler.fail = null
export default handler
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}

function ucapan() {

  const time = moment.tz('America/Los_Angeles').format('HH')  //America/Los_Angeles  Asia/Jakarta   America/Toronto

  let res = "Buenas madrugadas"

  if (time >= 4) {

    res = "Buenos Dรญas"

  }

  if (time >= 11) {

    res = "Buenas Tardes"

  }

  if (time >= 15) {

    res = "Buenas tardes"

  }

  if (time >= 17) {

    res = "Buenas noches"

  }

  return res

}
