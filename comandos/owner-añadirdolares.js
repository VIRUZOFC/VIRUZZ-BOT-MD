import MessageType from '@adiwajshing/baileys'

let pajak = 0

let handler = async (m, { conn, text }) => {

let who

if (m.isGroup) who = m.mentionedJid[0]

else who = m.chat

if (!who) throw `${ag}πΏππ½π πΏπ ππππππππΌπ πΌπ ππππΌπππ *@tag*`

let txt = text.replace('@' + who.split`@`[0], '').trim()

if (!txt) throw `[β] Ingrese la cantidad de dΓ³lares`

if (isNaN(txt)) throw `${mg}πππ ππππ½ππππ, ππππ πππππππ πππππππ\n\nππ ππππ½πππ, ππππ πππππ ππππ½πππ`

let dmt = parseInt(txt)

let dolares = dmt

let pjk = Math.ceil(dmt * pajak)

dolares += pjk

if (dolares < 1) throw `${mg}ππ ππππππ ππππππ ππΌππΌ DOLARES ππ *1*\n\nπππ πππππππ ππππ½ππ πππ πΏππΌππππΏπ ππ *1*`

let users = global.db.data.users

users[who].dolares += dmt

conn.sendHydrated(m.chat, `β­[ DOLARES π΅ ]β¬£\nβ\nβα¦ *PARA:*\nβα¦ *${text}*\nββββββββββββββββββ\nβα¦ *SE LE AΓADIΓ | NOW YOU HAVE*\nβα¦ *$${dmt} Dolare(s)* πΈ\nβ\nβ°βββββββββββββββ¬£`, wm3, null, md, 'β πβπΊπβ―ππβ―π΅παͺ£π­β―πΉβ―πβ€β  ', null, null, [

['π πππ£πͺ πΌπ«ππ£π©πͺπ§π | πππ π', '.rpgmenu'],

['ππ€π‘π«ππ§ ππ‘ πππ£πͺΜ | π½πππ  π©π€ πππ£πͺ βοΈ', '/menu']], m)

}

handler.help = ['adddi <@user>']

handler.tags = ['xp']

handler.command = ['aΓ±adirdolares', 'dardolares', 'dardolares'] 

handler.group = true

handler.botAdmin = true

handler.rowner = true

export default handler
