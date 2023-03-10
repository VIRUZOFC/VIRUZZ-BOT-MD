import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import moment from 'moment-timezone' 
import fs from 'fs'
import { en, es, pt } from './lib/idiomas/total-idiomas.js'

//cambia los nÃºmeros que sean propietarios 
global.owner = [
  ['595986674310', 'ð° VIRUZZ-OFC | CREADOR ð°', true],
  ['584125778026', 'ð° DIEGO-OFC | COLABORADOR 1ð°', true],
  ['573168068344', 'ð° KIUBY | COLABORADOR 2 ð°', true],
  ['50371310387', 'ð° SAMUEL | COLABORADOR 4 ð°', true],
  //['51936767238'],
  //['50495625729'],
  //['593968585383'],
  //['51957041866'],
  //['584125778026'],
  //['5219996125657'],
  //['595986674310']

] 
global.suittag = ['595986674310'] 
global.mods = ['51933999143'] 
global.prems = [] 

global.APIs = { // API Prefix
  // name: 'https://website'
  amel: 'https://melcanz.com',
  bx: 'https://bx-hunter.herokuapp.com',
  nrtm: 'https://nurutomo.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  nzcha: 'http://nzcha-apii.herokuapp.com',
  bg: 'http://bochil.ddns.net',
  fdci: 'https://api.fdci.se',
  dzx: 'https://api.dhamzxploit.my.id',
  bsbt: 'https://bsbt-api-rest.herokuapp.com',
  zahir: 'https://zahirr-web.herokuapp.com',
  zeks: 'https://api.zeks.me',
  hardianto: 'https://hardianto-chan.herokuapp.com',
  pencarikode: 'https://pencarikode.xyz', 
  LeysCoder: 'https://leyscoders-api.herokuapp.com',
  adiisus: 'https://adiixyzapi.herokuapp.com',
  lol: 'https://api.lolhuman.xyz',
  pencarikode: 'https://pencarikode.xyz',
  Velgrynd: 'https://velgrynd.herokuapp.com',
  rey: 'https://server-api-rey.herokuapp.com',
  hardianto: 'http://hardianto-chan.herokuapp.com',
  shadow: 'https://api.reysekha.xyz',
  apialc: 'https://api-alc.herokuapp.com',
  botstyle: 'https://botstyle-api.herokuapp.com',
  neoxr: 'https://neoxr-api.herokuapp.com',
  ana: 'https://anabotofc.herokuapp.com/',
  kanx: 'https://kannxapi.herokuapp.com/',
  dhnjing: 'https://dhnjing.xyz',
  violetics: 'https://violetics.pw'
},

global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api-alc.herokuapp.com': 'ConfuMods',
  'https://api.reysekha.xyz': 'apirey',
  'https://melcanz.com': 'F3bOrWzY',
  'https://bx-hunter.herokuapp.com': 'Ikyy69',
  'https://api.xteam.xyz': '5bd33b276d41d6b4',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://bsbt-api-rest.herokuapp.com': 'benniismael',
  'https://api.zeks.me': 'apivinz',
  'https://hardianto-chan.herokuapp.com': 'hardianto',
  'https://pencarikode.xyz': 'pais', 
  'https://leyscoders-api.herokuapp.com': 'MIMINGANZ', 
  'https://server-api-rey.herokuapp.com': 'apirey',
  'https://api.lolhuman.xyz': '9b817532fadff8fc7cb86862',
  'https://botstyle-api.herokuapp.com': 'Eyar749L',
  'https://neoxr-api.herokuapp.com': 'yntkts',
  'https://anabotofc.herokuapp.com/': 'AnaBot',
  'https://violetics.pw': 'beta'
}


global.lenguajeGB = es

/* ______________________________________________ */
global.creadorname = 'VIRUZZ-OFC'
global.creatorname = creadorname
global.library = 'BAILEYS-MD'
global.vs = 'beta V3'
global.version = vs

//_______tiempp de stickers______________
global.d = new Date(new Date + 3600000)
global.locale = 'es'
global.dia = d.toLocaleDateString(locale, { weekday: 'long' })
global.fecha = d.toLocaleDateString('es', { day: 'numeric', month: 'numeric', year: 'numeric' })
global.mes = d.toLocaleDateString('es', { month: 'long' })
global.aÃ±o = d.toLocaleDateString('es', { year: 'numeric' })
global.tiempo = d.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true })
//------------- Sticker WM -----------
global.packname = `VIRUZZ-OFC >_`
global.author = `VIRUZZ-BOT-MD`
//_______________
global.wm = 'VIRUZZ-BOT | VIRUZZ-OFC'
global.db3t = `THE VIRUZZ-BOT MD`
global.wm3 = db3t
global.igfg = 'VIRUZZ-BOT-MD'
global.wait = '*CARGANDO POR FAVOR ESPERA...*'
//-------------------
global.md = 'https://chat.whatsapp.com/L5oWIJp9c5BE8hMNCjJFGV'
global.dorramd = md
global.tarje = 'Banesco'
global.yt = 'http://youtube.com/@VIRUZZ-OFC'
global.youtube = yt
//Menu
global.DorrafotoMenu = ['./galerÃ­a/dorratmini.mp4']
global.menulinks = [md, yt]
/* _____________________________________________ */
global.ag = ' â ð°ð³ðð´ððð´ð½ð²ð¸ð° â '
global.advertencia = ag
global.fg = ' â ï¸ ðµð°ð»ð»ð¾ â ï¸ '
global.fallo = fg
global.mg = 'â ð»ð¾ ððð¾ ð¼ð°ð» â '
global.mal = mg
global.dorre = 'VIRUZZ-BOT'
global.DORRA = dorre

/* Imagenes___________________ */
global.imagen1 = fs.readFileSync('./Menu2.jpg')
global.imagen2 = fs.readFileSync('./Menu2.jpg') 
global.imagen3 = fs.readFileSync('./Menu2.jpg')
global.imagen4 = fs.readFileSync('./Menu2.jpg')
global.imagen5 = fs.readFileSync('./Menu2.jpg')
global.video1 = fs.readFileSync('./galeria/dorratmini.mp4')
global.dorratMenu = [imagen1, imagen4]
global.pdoc = ['application/vnd.openxmlformats-officedocument.presentationml.presentation', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/vnd.ms-excel', 'application/msword', 'application/pdf', 'text/rtf']
global.Key360 = ['964f-0c75-7afc'] //keys ephoto360
global.keysZens = ['fiktod', 'c2459db922', 'BF39D349845E', '675e34de8a', '37CC845916', '0b917b905e6f', '6fb0eff124']
global.keysxxx = keysZens[Math.floor(keysZens.length * Math.random())]
//__________________
global.lolkeys = ['2e0da1f78d1721134b21816d', '902c3bc9d8c08b0dcf8f5373', '808693688ecc695293359089', '85faf717d0545d14074659ad']
//global.lolkeysapi = lolkeys[Math.floor(lolkeys.length * Math.random())]
global.lolkeysapi = ['BrunoSobrino']

              
/* â±__________________.â RPG â.________ â° */

global.flaaa = [

'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=',

'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=crafts-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&text=',

'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=800&scaleHeight=500&text=',

'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=',

'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text=']

global.cmenut = 'âââââââã'
global.cmenub = 'ââ¦ '
global.cmenuf = 'â°âââââââââââà¹\n'
global.cmenua = '\nâ ââââââââââââââââââââââââââââââââ â\n     '
 
global.dmenut = '*âââââââ©*'
global.dmenub = '*âÂ»*'
global.dmenub2 = '*â*'
global.dmenuf = '*â°âââââââââââ¦*'
global.htjava = 'â«¹â«º'

global.htki = '*â­â¢Ì©Ì©Íâ±â¢â¢â¢â¢ âª*'
global.htka = '*âª â¢â¢â¢â¢Ì©Ì©Íâ°â¢â­*'

global.comienzo = 'â¢ â¢ ââââââ'
global.fin = 'ââââââ â¢ â¢'

global.botdate = `â«¹â«º Date :  ${moment.tz('Asia/Jakarta').format('DD/MM/YY')}`
global.bottime = `ð§ ð ð  ð : ${moment.tz('Asia/Jakarta').format('HH:mm:ss')}`//America/Los_Angeles
global.fgif = {
            key: {
                 participant : '0@s.whatsapp.net'},
            message: { 
                        "videoMessage": { 
                        "title": wm,
                        "h": `Hmm`,
                        'seconds': '999999999', 
                        'gifPlayback': 'true', 
                        'caption': bottime,
                        'jpegThumbnail': fs.readFileSync('./Menu2.jpg')
                               }
                              }
                             }

/* _____________________________________ */

global.multiplier = 999 // Cuanto mÃ¡s alto, mÃ¡s difÃ­cil subir de nivel | The higher, The harder levelup 

global.rpg = {
emoticon(string) {
string = string.toLowerCase()
    let emot = {
      tarjeta: 'ð³ Banesco',
      level: 'ð§¬ Nivel',
      limit: 'ð Diamante',
      bitcoins: 'ðª BitCoins',
      dolares: 'ðµ Dolares',
      exp: 'â¡ Experiencia',
      bank: 'ð¦ Banco',
      diamond: 'ð Diamante',
      health: 'â¤ï¸ Salud',
      kyubi: 'ð Magia',
      joincount: 'â¯ï¸ Token',
      emerald: 'ð Esmeralda',
      stamina: 'â¨ EnergÃ­a',
      role: 'ðª Rango',
      premium: 'ðï¸ Premium',
      pointxp: 'ð§ Puntos Exp',
      gold: 'ð Oro',
      trash: 'ð Basura',
      crystal: 'ð® Cristal',
      intelligence: 'ð§  Inteligencia',
      string: 'ð¸ï¸ Cuerda',
      keygold: 'ð Llave de Oro',
      keyiron: 'ðï¸ Llave de Hierro',
      emas: 'ðª PiÃ±ata',
      fishingrod: 'ð£ CaÃ±a de Pescar',
      gems: 'ð Gemas',
      magicwand: 'âï¸ Varita MÃ¡gica',
      mana: 'ðª Hechizo',
      agility: 'ð¤¸ââï¸ Agilidad',
      darkcrystal: 'â ï¸ Cristal Oscuro',
      iron: 'âï¸ Hierro',
      rock: 'ðª¨ Roca',
      potion: 'ð¥¤ PociÃ³n',
      superior: 'ð¼ Superior',
      robo: 'ð Robo',
      upgrader: 'ð§° Aumentar Mejora',
      wood: 'ðªµ Madera',
      strength: 'ð¦¹â âï¸ Fuerza',
      arc: 'ð¹ Arco',
      armor: 'ð¥¼ Armadura',
      bow: 'ð¹ Super Arco',
      pickaxe: 'âï¸ Pico',
      sword: 'âï¸ Espada',
      common: 'ð¦ Caja ComÃºn',
      uncoommon: 'ð¥¡ Caja Poco ComÃºn',
      mythic: 'ð³ï¸ Caja MÃ­tico',
      legendary: 'ð Caja Legendaria',
      petFood: 'ð Alimento para Mascota',
      pet: 'ð± Caja para Mascota',
      bibitanggur: 'ð Semilla de Uva',
      bibitapel: 'ð Semilla de Manzana',
      bibitjeruk: 'ð Semillas de naranja',
      bibitmangga: 'ð¥­ Semilla de Mango',
      bibitpisang: 'ð Semillas de PlÃ¡tano',
      ayam: 'ð Pollo',
      babi: 'ð Puerco',
      Jabali: 'ð Jabali',
      bull: 'ð Toro',    
      buaya: 'ð Cocodrilo',    
      cat: 'ð Gato',      
      centaur: 'ð Centauro',
      chicken: 'ð Pollo',
      cow: 'ð Vaca', 
      dog: 'ð Perro',
      dragon: 'ð DragÃ³n',
      elephant: 'ð Elefante',
      fox: 'ð¦ Zorro',
      giraffe: 'ð¦ Jirafa',
      griffin: 'ð¦ Ave',
      horse: 'ð Caballo',
      kambing: 'ð Cabra',
      kerbau: 'ð BÃºfalo',
      lion: 'ð¦ LeÃ³n',
      monyet: 'ð Mono',
      panda: 'ð¼ Panda',
      snake: 'ð Serpiente',
      phonix: 'ðï¸ FÃ©nix',
      rhinoceros: 'ð¦ Rinoceronte',
      wolf: 'ðº Lobo',
      tiger: 'ð Tigre',
      cumi: 'ð¦ Calamar',
      udang: 'ð¦ CamarÃ³n',
      ikan: 'ð Pez',
      fideos: 'ð Fideos',
      ramuan: 'ð§ª Ingrediente NOVA',
      knife: 'ðª Cuchillo'
    }
let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
if (!results.length) return ''
else return emot[results[0][0]]
}}
global.rpgg = { //Solo emojis 
emoticon(string) {
string = string.toLowerCase()
    let emott = {
      tarjeta: 'ð³ Banesco',
      level: 'ð§¬',
      limit: 'ð',
      bitcoins: 'ðª',
      dolares: 'ðµ Dolares',
      exp: 'â¡',
      bank: 'ð¦',
      diamond: 'ð+',
      health: 'â¤ï¸',
      kyubi: 'ð',
      joincount: 'â¯ï¸',
      emerald: 'ð',
      stamina: 'â¨',
      role: 'ðª',
      premium: 'ðï¸',
      pointxp: 'ð§',
      gold: 'ð',
      trash: 'ð',
      crystal: 'ð®',
      intelligence: 'ð§ ',
      string: 'ð¸ï¸',
      keygold: 'ð',
      keyiron: 'ðï¸',
      emas: 'ðª',
      fishingrod: 'ð£',
      gems: 'ð',
      magicwand: 'âï¸',
      mana: 'ðª',
      agility: 'ð¤¸ââï¸',
      darkcrystal: 'â ï¸',
      iron: 'âï¸',
      rock: 'ðª¨',
      potion: 'ð¥¤',
      superior: 'ð¼',
      robo: 'ð',
      upgrader: 'ð§°',
      wood: 'ðªµ',
      strength: 'ð¦¹â âï¸',
      arc: 'ð¹',
      armor: 'ð¥¼',
      bow: 'ð¹',
      pickaxe: 'âï¸',
      sword: 'âï¸',
      common: 'ð¦',
      uncoommon: 'ð¥¡',
      mythic: 'ð³ï¸',
      legendary: 'ð',
      petFood: 'ð',
      pet: 'ð±',
      bibitanggur: 'ð',
      bibitapel: 'ð',
      bibitjeruk: 'ð',
      bibitmangga: 'ð¥­',
      bibitpisang: 'ð',
      ayam: 'ð',
      babi: 'ð',
      Jabali: 'ð',
      bull: 'ð',    
      buaya: 'ð',    
      cat: 'ð',      
      centaur: 'ð',
      chicken: 'ð',
      cow: 'ð', 
      dog: 'ð',
      dragon: 'ð',
      elephant: 'ð',
      fox: 'ð¦',
      giraffe: 'ð¦',
      griffin: 'ð¦', 
      horse: 'ð',
      kambing: 'ð',
      kerbau: 'ð',
      lion: 'ð¦',
      monyet: 'ð',
      panda: 'ð¼',
      snake: 'ð',
      phonix: 'ðï¸',
      rhinoceros: 'ð¦',
      wolf: 'ðº',
      tiger: 'ð',
      cumi: 'ð¦',
      udang: 'ð¦',
      ikan: 'ð',
      fideos: 'ð',
      ramuan: 'ð§ª',
      knife: 'ðª'
    }
let results = Object.keys(emott).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
if (!results.length) return ''
else return emott[results[0][0]]
}}
global.rpgshop = { //Tienda
emoticon(string) {
string = string.toLowerCase()
    let emottt = {
      tarjeta: 'ð³ Banesco',     
      exp: 'â¡ Experiencia',
      limit: 'ð Diamante',
      bitcoins: 'ðª BitCoins',
      dolares: 'ðµ Dolares',
      diamond: 'ð Diamante',
      joincount: 'â¯ï¸ Token',
      emerald: 'ð Esmeralda',
      berlian: 'â¦ï¸ Joya',
      kyubi: 'ð Magia',
      gold: 'ð Oro',
      tiketcoin: 'ð« Dorrat Tickers',
      stamina: 'â¨ EnergÃ­a',
      potion: 'ð¥¤ PociÃ³n',
      aqua: 'ð§ Agua',
      trash: 'ð Basura',
      wood: 'ðªµ Madera',
      rock: 'ðª¨ Roca',
      batu: 'ð¥ Piedra',
      string: 'ð¸ï¸ Cuerda',
      iron: 'âï¸ Hierro',
      coal: 'â±ï¸ CarbÃ³n',
      botol: 'ð¶ Botella',
      kaleng: 'ð¥« Lata',
      kardus: 'ðª§ CartÃ³n',
      eleksirb: 'ð¡ Electricidad',
      emasbatang: 'ã½ï¸ Barra de Oro',
      emasbiasa: 'ð§­ Oro ComÃºn',
      rubah: 'ð¦ð«ï¸ Zorro Grande',
      sampah: 'ðð«ï¸ Super Basura',
      serigala: 'ðºð«ï¸ Super Lobo',
      kayu: 'ð· Super Madera',
      sword: 'âï¸ Espada',
      umpan: 'ðª± Carnada', 
      healtmonster: 'ðµ Billetes',
      emas: 'ðª PiÃ±ata',
      pancingan: 'ðª Gancho',
      pancing: 'ð£ CaÃ±a de Pescar',
      common: 'ð¦ Caja ComÃºn',
      uncoommon: 'ð¥¡ Caja Poco ComÃºn',
      mythic: 'ð³ï¸ Caja MÃ­tica',
      pet: 'ð« Caja de Mascotas',//?
      gardenboxs: 'ð Caja de JardinerÃ­a',//?
      legendary: 'ð Caja Legendaria',
      anggur: 'ð Uva',
      apel: 'ð Manzana',
      jeruk: 'ð Naranja',
      mangga: 'ð¥­ Mango',
      pisang: 'ð Platano',
      bibitanggur: 'ð¾ð Semillas de uva',
      bibitapel: 'ð¾ð Semillas de manzana',
      bibitjeruk: 'ð¾ð Semillas de naranja',
      bibitmangga: 'ð¾ð¥­ Semillas de Mango',
      bibitpisang: 'ð¾ð Semillas de plÃ¡tano',
      centaur: 'ð Centauro',
      griffin: 'ð¦ Ave',
      kucing: 'ð Gato',
      naga: 'ð DragÃ³n',
      fox: 'ð¦ Zorro',
      kuda: 'ð Caballo',
      phonix: 'ðï¸ FÃ©nix',
      wolf: 'ðº Lobo',
      anjing: 'ð¶ Perro',
      petFood: 'ð Alimento para Mascota', //?
      makanancentaur: 'ðð¥© Comida de Centauro',
      makanangriffin: 'ð¦ð¥© Comida de Ave',
      makanankyubi: 'ðð¥© Comida MÃ¡gica',
      makanannaga: 'ðð¥© Comida de DragÃ³n',
      makananpet: 'ð±ð¥© Alimentos de mascotas',
      makananphonix: 'ðï¸ð¥© Comida de FÃ©nix'  
    }
let results = Object.keys(emottt).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
if (!results.length) return ''
else return emottt[results[0][0]]
}}
global.rpgshopp = { //Tienda
  emoticon(string) {
    string = string.toLowerCase()
    let emotttt = {
      tarjeta: 'ð³',
      exp: 'â¡',
      limit: 'ð',
      diamond: 'ð+',
      bitcoins: 'ðª',
      dolares: 'ðµ',
      joincount: 'â¯ï¸',
      emerald: 'ð',
      berlian: 'â¦ï¸',
      kyubi: 'ð',
      gold: 'ð',
      tiketcoin: 'ð«',
      stamina: 'â¨',
      potion: 'ð¥¤',
      aqua: 'ð§',
      trash: 'ð',
      wood: 'ðªµ',
      rock: 'ðª¨',
      batu: 'ð¥',
      string: 'ð¸ï¸',
      iron: 'âï¸',
      coal: 'â±ï¸',
      botol: 'ð¶',
      kaleng: 'ð¥«',
      kardus: 'ðª§',
      eleksirb: 'ð¡',
      emasbatang: 'ã½ï¸',
      emasbiasa: 'ð§­',
      rubah: 'ð¦ð«ï¸',
      sampah: 'ðð«ï¸',
      serigala: 'ðºð«ï¸',
      kayu: 'ð·',
      sword: 'âï¸',
      umpan: 'ðª±', 
      healtmonster: 'ðµ',
      emas: 'ðª',
      pancingan: 'ðª',
      pancing: 'ð£',
      common: 'ð¦',
      uncoommon: 'ð¥¡',
      mythic: 'ð³ï¸',
      pet: 'ð«',//?
      gardenboxs: 'ð',//?
      legendary: 'ð',
      anggur: 'ð',
      apel: 'ð',
      jeruk: 'ð',
      mangga: 'ð¥­',
      pisang: 'ð',
      bibitanggur: 'ð¾ð',
      bibitapel: 'ð¾ð',
      bibitjeruk: 'ð¾ð',
      bibitmangga: 'ð¾ð¥­',
      bibitpisang: 'ð¾ð',
      centaur: 'ð',
      griffin: 'ð¦',
      kucing: 'ð',
      naga: 'ð',
      fox: 'ð¦',
      kuda: 'ð',
      phonix: 'ðï¸',
      wolf: 'ðº',
      anjing: 'ð¶',
      petFood: 'ð', //?
      makanancentaur: 'ðð¥©',
      makanangriffin: 'ð¦ð¥©',
      makanankyubi: 'ðð¥©',
      makanannaga: 'ðð¥©',
      makananpet: 'ð±ð¥©',
      makananphonix: 'ðï¸ð¥©'  
    }
    let results = Object.keys(emotttt).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emotttt[results[0][0]]
  }
}

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("se actualizo 'configuracion.js'"))
  import(`${file}?update=${Date.now()}`)
})
