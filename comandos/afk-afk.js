let handler = async (m, { text }) => {
let user = global.db.data.users[m.sender]
user.afk = + new Date
user.afkReason = text
let afk2 = `*ā MOTIVO (š°šµšŗ)${text ? ': ' + text : ''}*\nā NO LO ETIQUETEN`
let afkinfo = `*DORRAT - AFK*\n\n*š¤ USUARIO QUE ESTARA AFK: ${conn.getName(m.sender)}*`
await conn.sendButton(m.chat, afkinfo, afk2, 
[
['ok', `ok`]], m)}
handler.help = ['afk [alasan]']
handler.tags = ['main']
handler.command = /^afk$/i
handler.dolares = 4
export default handler
