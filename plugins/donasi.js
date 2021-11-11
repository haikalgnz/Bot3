let handler = async m => m.reply(`
┌〔 Donasi • Pulsa 〕
├ Tri [089603042257]
└────

┌〔 Donasi • Emoney 〕
├ Dana [089603042357]
├ https://saweria.co/haikalofc
└────
`.trim())
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
