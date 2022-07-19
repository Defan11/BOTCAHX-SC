gc1 = 'https://chat.whatsapp.com/GQpEwccHLPF2IkO3dZv8HC'
gc2 = 'https://chat.whatsapp.com/JVFN0SYnXLg23qjvickkdM'
gc3 = ''
global.linkGC = ['https://chat.whats', 'https://https://chat.whatsapp.com/GQpEwccHLPF2IkO3dZv8HC'] // ganti jadi group lu
global.owner = ['6282135905896','6282135905896'] // Put your number here //owner eval
global.kontak = ['6282135905896','6282135905896'] //Ketika ada yang ngetik #owner
global.mods = ['0'] // Want some help?
global.prems = ['6282135905896','6282135905896'] // Premium user has unlimited limit

global.APIs = { // API Prefix
  // name: 'https://website'
  neoxr: 'https://api.neoxr.my.id',
  nrtm: 'https://nurutomo.herokuapp.com', 
  rey: 'https://sekha.me',
  xteam: 'https://api.xteam.xyz',
  nzcha: 'http://nzcha-apii.herokuapp.com',
  bg: 'http://bochil.ddns.net',
  fdci: 'https://api.fdci.se',  
  dzx: 'https://api.dhamzxploit.my.id',
  zahir: 'https://zahirr-web.herokuapp.com',
  lol: 'https://api.lolhuman.xyz',
  dhnjing: 'https://dhn-api.herokuapp.com',
  zeks: 'https://api.zeks.me',
  pencarikode: 'https://api.chipa.xyz',
  LeysCoder: 'https://leyscoders-api.herokuapp.com'
}

global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey' (apikey kalian)
  'https://api.neoxr.my.id': 'yourkey',
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://sekha.me': 'apirey',
  'https://dhn-api.herokuapp.com': 'APIKEY',
  'https://api.xteam.xyz': 'cristian9407',
  'https://api.lolhuman.xyz': 'RFK-Rey',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.me': 'apivinz',
  'https://api.chipa.xyz': 'pais',
  'https://leyscoders-api.herokuapp.com': 'dappakntlll'
}

lolkey = 'RFK-Rey'
zekskey = 'apivinz'
xteamkey = 'cristian9407'
//xteam        MIMINETBOT
namaig = 'GAK ADA :)'
namagithub = 'GAK ADA :)'
kasihcaption = `Done`
namakontak1 = 'Owner defan'
namakontak2 = 'Nomor Bot'

//kasihcaption = `Done`

// Sticker WM
global.packname = 'ᴹᴿ᭄defα͢͢͢ή彡' // ganti aja
global.author = 'Mizuhara-Mdོ' // ganti aja

//yyy
bc = '' //BOTCAHX BROADCAST
footer = '\n© ᴹᴿ᭄defα͢͢͢ή彡'
namabot = 'Mizuhara-Mdོ'
namalu = 'ᴹᴿ᭄defα͢͢͢ή彡'


// 
wait = '_*Tunggu Sebentar...*_'
global.wait = '_*Tunggu Sebentar...*_'
global.rpg = 'Fitur Rpg Dimatikan\nKetik *!enable* *rpg* untuk menggunakan fitur ini!\nKalo Mau main Disini aja\nhttps://chat.whatsapp.com/JEDQfzMGZan4HA98wtxsNL'
global.nsfw = 'Fitur NSFW Dimatikan\nKetik *!enable* *nsfw* untuk menggunakan fitur ini!\n“Katakanlah kepada orang laki-laki yang beriman: Hendaklah mereka menahan pandanganya, dan memelihara kemaluannya; … Katakanlah kepada wanita yang beriman: Hendaklah mereka menahan pandangannya, dan kemaluannya, dan janganlah mereka Menampakkan perhiasannya, kecuali yang (biasa) nampak dari padany,” \n(TQS. Al-Nur [24]: 30-31).'
global.eror = '_*Server Error*_'

global.fla = 'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text='

// tingkat kesulitan, semakin tinggi semakin susah
global.multiplier = 70 // The higher, The harder levelup

//*****************PEMBATAS*********************
// JANGAN DI GANTI NTAR KLO GABISA JAN TANYA GW

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
