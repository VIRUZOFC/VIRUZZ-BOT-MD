import { createHash } from 'crypto'
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let handler = async function (m, { conn, text, usedPrefix, command }) {
  let user = global.db.data.users[m.sender]
  let name2 = conn.getName(m.sender)
  if (user.registered === true) throw `[βππππβ] ππ° π΄πππ°π ππ΄πΆπΈππππ°π³πΎ\n\nΒΏπππΈπππ΄ ππΎπ»ππ΄π π° ππ΄πΆπΈππππ°πππ΄?\n\n ππππ΄ π΄πππ΄ π²πΎπΌπ°π½π³πΎ πΏπ°ππ° π΄π»πΈπΌπΈπ½π°π ππ ππ΄πΆπΈππππΎ\n*${usedPrefix}unreg* <NΓΊmero de serie>`
  if (!Reg.test(text)) throw `[βππππβ]  Formato incorrecto\n\n π¦ Uso del comamdo: *${usedPrefix + command} nombre.edad*\nπEjemplo : *${usedPrefix + command}* diego.16`
  let [_, name, splitter, age] = text.match(Reg)
  if (!name) throw '[βππππβ] π³π΄π±π΄π πΏπΎπ½π΄π ππ½ π½πΎπΌπ±ππ΄'
  if (!age) throw '[βππππβ] π»π° π΄π³π°π³ π½πΎ πΏππ΄π³π΄ π΄πππ°π ππ°π²πΈπ°'
  if (name.length >= 30) throw '[βππππβ] π΄π» π½πΎπΌπ±ππ΄ π΄π π³π΄πΌπ°ππΈπ°π³πΎ π»π°ππΆπΎ' 
  age = parseInt(age)
  if (age > 100) throw 'π΄π» nmms viejo de mrd xd'
  if (age < 5) throw 'π€‘ un bebΓ© π€‘'
  user.name = name.trim()
  user.age = age
  user.regTime = + new Date
  user.registered = true
  let sn = createHash('md5').update(m.sender).digest('hex')
  let caption = `
ββγ *REGISTRADO* γβ
β’ *Nombre:* ${name}
β’ *Edad* : ${age} aΓ±os
β’ *Numero de serie* :
${sn}
βββββββββββββββ`
let author = global.author
conn.sendButton(m.chat, caption, `Β‘ππ π½ππΌπ΄ππΎ π³π΄ ππ΄ππΈπ΄ ππ΄ ππ΄πππΈππ° πΏπΎπ ππΈ π³π΄ππ΄π°π π±πΎπππ°π ππ ππ΄πΆπΈππππΎ π΄π½ π΄π» π±πΎπ!\n${author}`, [['Β‘Β‘π°π·πΎππ° ππΎπ ππ½ ππ΄ππΈπ΅πΈπ²π°π³πΎ/π°!!', '/profile']], m)
global.db.data.users[m.sender].money += 10000
global.db.data.users[m.sender].exp += 10000
}
handler.help = ['reg'].map(v => v + ' <nombre.edad>')
handler.tags = ['rg']

handler.command = ['verify', 'reg', 'register', 'registrar', 'verificar'] 

export default handler

