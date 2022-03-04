let handler = async (m, { conn }) => await conn.sendButtonLoc(m.chat, fla + 'donasi', `
┌「 *Donasi • DVT* 」
├ https://saweria.co/Mayumi
├「 *Donasi • Owner* 」
├ Gopay • 083117436733
├ Dana • 083117436733
├ Pulsa • 083117436733
└────
`.trim(), '© Devils V tiears', 'Donasi', '.donasi', m)
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
