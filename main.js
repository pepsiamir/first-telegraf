const { Telegraf, Markup } = require('telegraf')

const keyboard = Markup.inlineKeyboard([
  Markup.button.url('❤️', 'http://telegraf.js.org'),
  Markup.button.callback('Delete', 'delete')
])

const bot = new Telegraf("7436028299:AAGD1tf-Myj7SmDiWSw71TnW9kzdEri8lWw")
bot.on('message', (ctx) => ctx.telegram.sendCopy(ctx.message.chat.id, ctx.message, keyboard))
bot.action('delete', (ctx) => ctx.deleteMessage())
bot.launch()

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))