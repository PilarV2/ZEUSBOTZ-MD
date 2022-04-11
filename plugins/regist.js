//By Pilar
const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys-md')
const { createHash } = require('crypto')
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let handler = async function (m, { text, usedPrefix }) {
  let user = global.db.data.users[m.sender]
   let fetch = require('node-fetch')
  let totalreg = Object.keys(global.db.data.users).length
  if (user.registered === true) throw `Anda sudah terdaftar\nMau daftar ulang? ${usedPrefix}unreg <SN|SERIAL NUMBER>`
  if (!Reg.test(text)) throw `Format salah\n*${usedPrefix}daftar nama.umur*`
  let [_, name, splitter, age] = text.match(Reg)
  if (!name) throw 'Nama tidak boleh kosong (Alphanumeric)'
  if (!age) throw 'Umur tidak boleh kosong (Angka)'
  age = parseInt(age)
  if (age > 120) throw `Umur terlalu tua 😂😂😂😂😂😂😂`
  if (age < 5) throw 'Bayi bisa ngetik sesuai format bjir ._.'
  user.name = name.trim()
  user.age = age
  user.regTime = + new Date
  user.registered = true
let ftroli = {key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "6289523258649-1604595598@g.us"}, "message": {orderMessage: {itemCount: 0,status: 200, surface: 200, message: 'TERDAFTAR ☑️', orderTitle: 'Centauri', sellerJid: '0@s.whatsapp.net'}}}                
  let sn = createHash('md5').update(m.sender).digest('hex')
  let daftar =`
◪ *「 DAFTAR BERHASIL 」*
╰───────────────────╮
╭───────────────────╯
├❏ Nama : ${name}
├❏ Umur : ${age} tahun 
├❏ Status : Terdaftar √
├❏ Sn : ${sn}
├❏ ID : ${pickRandom(['GGA0QH119J1','JPA017P02HA1','PWJROSAIEJ','LAOFOODJQ','PWJFCIFIF','QBBVAODEPZ','QPWEJDNDJD','IQPQBAHSIF','UWUWIWOKPF','PQJDXBXB','AKSJALPQDN','HALAKDILQU','IAIIWIICCIS','KQPSNWO','BSBANSKA','JANSNDKSOS','JDKALDKKAPPPP','KAKALALPCLCLJA','PWWJ017027GA14','19QPDKALLH61J','PWJSJDDUYSYSHSU','1001UQOXJ9JJDY','PQPSODUE107','BBBAKZOOX','00071','WKESOAKWLA','104JALOA9','OSBDOSODO','PWODJDOSKFJSOO','OWJCKEOS','PAJDISO','OSJDOWO','BABAOALKS','PWKW827LA9PA0','PWOEOOOJF','LCKDI2027H393P','IWUEUJEDGWEUEUE','GGGGGGGGHQJU127','HAGFUUXUQP3','P0000009769767T0O87Y5','0TT9I4UO43','P7YYRE8583E6','NZNSJEO','P8Y4W38P0R','P8R6IOP4EU-HG0','0729OWRU','JJJJJJJJAGFIS0W67','000087','BbL016JJQBCSr54OwwW0','BbJdQ0X37ohL016HhqK','BbJdQ0X37ohL016HhqK','GgGddSsssss1039','HAOSOWODJSO','BVjd173k6BEk','AEOKKAKSKKAK20468','BBWUK017KASK','COLIMAJSOAOOAOK1','1238PBLLWO20','KODE123','jajsoskskskOOoO0292','GAGHWPPWSIJ','PWEUPiwpepwp02928','000000723','QPWOEJSJAL','BBAHUSQPEI','HHGGGAGAGODPF','PUS1383PW0292838','HHHB203828LALJK','FFAFUAFAGGAFAFOWVA','PWKDIAPDHZOA','QPWOEUDMZ','103838PW02XLAK','AWOAOAKSPAJDOA','bbbaoduwuslp','kawpajeif','1037pWjs0273BBNjK1','Or4nGB3g04N71nk','Hhhhhhhpwishahhhh','Paosjsh102','Vvvavahsi239hOwpP','PAH103891','RAPEHAL028473','0193910392','103892928','0293829293','02838292','WPPPJSUEUND','01387482923828','gqlI000iwhBYYj0239','DGAOOW','PWOEUDOAO','OSODODOEOEIE','OWRHWOKDIRE','BXKKWCOEDMJCIE','BBDGWOPDDMEO','148920392949202','WOEIOWEOO','19388292929383','MODARSIAHANJINK','BEBEOAODAPJ','LVOWOWIEPADH','AIMALIVETOGOW','JUSTSKOSAO','PW2039LSHDOW','BVOVOVOVUUDEUA307','027492838','01398293','TAPIUPITKAOE103982','019382939','02848292838','OWOWOWOJDJADJLA019','PE023802794949nbK','owjfLjsoKhIOauwo','JKlskeoKJJTRYOJc','IHUOFEtUKPJVD302','HJPgFTIBDTI','029292848','IgwoekdkdomsB','HJOKJYYUlns','INNSAPTAILOEAJD','TAIANJSGSIAOPA','0238829103','02838385842111','9372893739991','BACHEUADL','RC047','BRAINTLUBA0284','DDDDDDDSALDKOE1048','11020393910101010201047GbkL','BrADIopaSLyeYA','JSJDJAKDSKLLLLAPRO','PROGAMERYT123','47492837','923772','BACHELAOF','1038828282','VAKDPOESMAQ0079'])}
├❏ Total User : ${totalreg} Nomer
╰───────────────────╯`
const template = generateWAMessageFromContent(m.key.remoteJid, proto.Message.fromObject({
        listMessage: {
            title: ``,
            description: daftar,
            buttonText: 'Click Here!',
            listType: 1,
            footerText: global.wm,
            mtype: 'listMessage',
            sections: [
              {
                "rows": [{
                  "title": `LIST MENU`,
                  "description": "",
                  "rowId": '.? all'
                 }, {
                  "title": "DONASI",
                  "description": "",
                  "rowId": `.donasi`
                }, {
                  "title": "MY",
                  "description": "",
                  "rowId": `.my`
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
    }}), { userJid: m.participant || m.key.remoteJid, quoted: ftroli });
    return await conn.relayMessage(
        m.key.remoteJid,
        template.message,
        { messageId: template.key.id }
    )
}
handler.help = ['daftar', 'reg', 'register'].map(v => v + ' <nama>.<umur>')
handler.tags = ['xp']

handler.command = /^(daftar|reg(ister)?)$/i

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}