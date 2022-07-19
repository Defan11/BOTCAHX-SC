let fetch = require('node-fetch')
let handler = async (m, { conn }) => conn.sendButtonLoc(m.chat, await (await fetch(fla + 'donasi')).buffer(), `
┌〔 Donasi • Emoney 〕
├ PULSA : 081321776496
├ DANA : 081321776496
└────
>  _Ingin donasi? http://wa.me/6282135905896 Hasil donasi akan digunakan buat sewa atau beli *RDP/VPS* agar bot bisa berjalan 24jam tanpa kendala_
`.trim(), footer, 'Owner', '.owner')
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
