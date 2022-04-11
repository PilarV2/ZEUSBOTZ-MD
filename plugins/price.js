const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys-md')
let fs = require('fs')
let handler = async (m) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    let user = global.db.data.users[who]
let moment = require('moment-timezone')
let premium = `
◩ *FREE USER*
└───────
 └❎ Unlimited Limit
 └❎ Premium User 
 └❎ Add Bot to Group 
  
◩ *PREMIUM USER*
└───────
 └✅ Unlimited Limit 
 └✅ Premium User 
 └❎ Add Bot to Group 
   └  ▹  *Rp. 5.000*
     └ Expired 3 hari
 └ Order | hub : owner
`
     const template = generateWAMessageFromContent(m.key.remoteJid, proto.Message.fromObject({
        listMessage: {
            title: `*❏ SEWA BOTZ ❏*`,
            description: premium,
            buttonText: 'Click Here!',
            listType: 1,
            footerText: `Created By Pilar`,
            mtype: 'listMessage',
            sections: [
              {
                "rows": [{
                  "title": `MENU`,
                  "description": "",
                  "rowId": '.menu'
                 }, {
                  "title": "OWNER",
                  "description": "",
                  "rowId": `.owner`
                }, {
                  "title": "DONASI",
                  "description": "",
                  "rowId": `.donasi`
                }
                  ],
                "title": "LIST MENU"
              }
            ], "contextInfo": 
            {  "stanzaId": m.key.id,
              "participant": "0@s.whatsapp.net",
			  "remoteJid": "6283136505591-1614953337@g.us",
              "quotedMessage": m.message
            }
    }}), { userJid: m.participant || m.key.remoteJid, quoted: m });
    return await conn.relayMessage(
        m.key.remoteJid,
        template.message,
        { messageId: template.key.id }
    )
}
handler.help = ['price']
handler.tags = ['main']
handler.command = /^(premium|sewa|\price)$/i

module.exports = handler