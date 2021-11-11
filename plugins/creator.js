function handler(m) {
  this.sendContact(m.chat, '6289696454872', this.getName('6289696454872@s.whatsapp.net'), m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
