let handler = async(m, { text }) => {
    let user = global.db.data.users[m.sender]
    user.afk = +new Date
    user.afkReason = text
    let afk = `${conn.getName(m.sender)} is now AFK${text ? ': ' + text : ''}`
 conn.sendBut(m.chat, afk, wm, 'MENU', '.menu', m)
}
handler.help = ['afk [alasan]']
handler.tags = ['main']
handler.command = /^afk$/i

module.exports = handler