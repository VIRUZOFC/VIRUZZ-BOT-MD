let handler = async (m, { args, usedPrefix, command }) => {
let fa = `
*[β] πΈπ½πΆππ΄ππ° π»π° π²π°π½ππΈπ³π°π³ πππ΄ π³π΄ππ΄π° π°πΏπΎπππ°π* 

*π π΄πΉπ΄πΌπΏπ»πΎ:*
*${usedPrefix + command} 10*`.trim()
if (!args[0]) throw fa
if (isNaN(args[0])) throw fa
let apuesta = parseInt(args[0])
let users = global.db.data.users[m.sender]
let time = users.lastslot + 10000
if (new Date - users.lastslot < 10000) throw `*β³ π΄ππΏπ΄ππ΄ ${msToTime(time - new Date())} πΏπ°ππ° ππΎπ»ππ΄π π° π°πΏπΎπππ°π*`
if (apuesta < 10) throw '*[β] El minimo para apostar es de 10 dolares*'
if (users.dolares < apuesta) {
throw `*[β] Tu dinero no es suficiente para apostar esa cantidad, usa el comando #work, para poder obtener mas`
}
let emojis = ["β‘", "π", "πͺ"];
let a = Math.floor(Math.random() * emojis.length);
let b = Math.floor(Math.random() * emojis.length);
let c = Math.floor(Math.random() * emojis.length);
let x = [],
y = [],
z = [];
for (let i = 0; i < 3; i++) {
x[i] = emojis[a];
a++;
if (a == emojis.length) a = 0;
}
for (let i = 0; i < 3; i++) {
y[i] = emojis[b];
b++;
if (b == emojis.length) b = 0;
}
for (let i = 0; i < 3; i++) {
z[i] = emojis[c];
c++;
if (c == emojis.length) c = 0;
}
let end;
if (a == b && b == c) {
end = `*Ganaste! π +${apuesta + apuesta} dolares*`
users.dolares += apuesta
} else if (a == b || a == c || b == c) {
end = `Casi, toma +1 dolar`
users.dolares += 1
} else {
end = `*β Persiste -${apuesta} dolares*`
users.dolares -= apuesta
}
users.lastslot = new Date * 1
return await m.reply(
        `
π | *SLOTS* 
ββββββββ
${x[0]} : ${y[0]} : ${z[0]}
${x[1]} : ${y[1]} : ${z[1]}
${x[2]} : ${y[2]} : ${z[2]}
ββββββββ
π | ${end}`) 
}
handler.help = ['slotdolares <apuesta>']
handler.tags = ['game']
handler.command = ['slotdolares']
export default handler

function msToTime(duration) {
var milliseconds = parseInt((duration % 1000) / 100),
seconds = Math.floor((duration / 1000) % 60),
minutes = Math.floor((duration / (1000 * 60)) % 60),
hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

hours = (hours < 10) ? "0" + hours : hours
minutes = (minutes < 10) ? "0" + minutes : minutes
seconds = (seconds < 10) ? "0" + seconds : seconds

return minutes + " m " + seconds + " s "
}
