let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw `*[βππππβ] πΈπ½πΆππ΄ππ΄ ππ½ ππ΄πΏπΎπππ΄*\n\n*π΄πΉπ΄πΌπΏπ»πΎ:*\n*${usedPrefix + command} el comando ${usedPrefix}play no manda nada*`
if (text.length < 10) throw `*[βππππβ] π΄π» ππ΄πΏπΎπππ΄ π³π΄π±π΄ ππ΄π π³π΄ πΌπΈπ½πΈπΌπΎ π·0 π²π°ππ°π²ππ΄ππ΄π!*`
if (text.length > 1000) throw `*[βππππβ] π΄π» ππ΄πΏπΎπππ΄ π³π΄π±π΄ ππ΄π π³π΄ πΌπ°ππΈπΌπΎ π·000 π²π°ππ°π²ππ΄ππ΄π!*`
let teks = `*β£ββββ°ο½₯ REPORTE ο½₯β±ββββ«*\nβ£\n*ββ’β’βΊβͺοΈ NUMERO:* wa.me/${m.sender.split`@`[0]}\nββ’β’βΊβͺοΈ *MENSAJE: ${text}\n*`
conn.reply('584125778026@s.whatsapp.net', m.quoted ? teks + m.quoted.text : teks, null, {
contextInfo: {
mentionedJid: [m.sender]
}})
m.reply(`*β Reporte enviado, si es falso solo se ignorarΓ‘*`)
}
handler.help = ['reporte', 'request'].map(v => v + ' <teks>')
handler.tags = ['info']
handler.command = /^(report|request|reporte|bugs|bug|report-owner|reportes)$/i
export default handler
