let handler = m => m
handler.before = m => {
    let user = global.db.data.users[m.sender]
    if (user.afk > -1) {
      let berhenti = `Kamu berhenti AFK${user.afkReason ? ' setelah ' + user.afkReason : ''}
Selama ${clockString(new Date - user.afk)}`
conn.sendBut(m.chat, berhenti, wm, 'MENU', '.menu', m)
        user.afk = -1
        user.afkReason = ''
    }
    let jids = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
    for (let jid of jids) {
        let user = global.db.data.users[jid]
        if (!user) continue
        let afkTime = user.afk
        if (!afkTime || afkTime < 0) continue
        let reason = user.afkReason || ''
        let tagg = `Jangan tag dia!
Dia sedang AFK ${reason ? 'dengan alasan ' + reason : 'tanpa alasan'}
Selama ${clockString(new Date - afkTime)}`
conn.sendBut(m.chat, tagg, wm, 'Oke', 'kanjud', m)
    }
    return true
}

module.exports = handler

function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}