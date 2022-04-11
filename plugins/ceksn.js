let handler = async function (m, { text, usedPrefix }) {
const { createHash } = require('crypto')
let sn = createHash('md5').update(m.sender).digest('hex')
conn.sendBut(m.chat, sn, wm, 'MENU', '.menu', m)
}
handler.help = ['ceksn']
handler.tags = ['exp']
handler.command = /^(ceksn)$/i
handler.premium = false
handler.register = true
module.exports = handler