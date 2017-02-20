const commando = require('discord.js-commando') 

const path = require('path')

const argv = require('minimist')(process.argv.slice(2))
const configFile = argv.config || 'config'
const config = require(path.join(__dirname, configFile))
const FUNCTION = require('./functions')

const bot = new commando.Client({
  owner: config.owner  
})

bot
  .on('error', console.error)
  .on('warn', console.warn)
  .on('debug', console.log)
  .on('ready', () => {
    console.log('shitposts ready and loaded')
    console.log(`logged in as ${bot.user.username}#${bot.user.discriminator} (${bot.user.id})`)
  })
  .on('disconnect', () => {
    console.warn('Your filthy internet disconnected you useless shit')
  })
  .on('reconnecting', () => {
    console.warn('Reconnecting...slowly')
  })
  .on('message', (message) => {
    if (message.author.bot) return
    if (FUNCTION.msg('good shit', message)) {
      message.channel.sendMessage(':ok_hand::eyes::ok_hand::eyes::ok_hand::eyes::ok_hand::eyes::ok_hand::eyes: good shit go?? sHit:ok_hand: thats :heavy_check_mark: some good:ok_hand::ok_hand:shit right:ok_hand::ok_hand:th :ok_hand: ere:ok_hand::ok_hand::ok_hand: right:heavy_check_mark:there :heavy_check_mark::heavy_check_mark:if i do??a? so?my self :100: i say so :100: thats what im talking about right there right there (chorus: ????? ?????) mMMMM??:100: :ok_hand::ok_hand: :ok_hand:?O0??OOOOO???Oooo?????????:ok_hand: :ok_hand::ok_hand: :ok_hand: :100: :ok_hand: :eyes: :eyes: :eyes: :ok_hand::ok_hand:Good shit')
    }
  })
  .registry
    .registerGroups([
      ['random', 'Random generators']
    ])
    .registerDefaults()
    .registerCommandsIn(__dirname + '/commands')

bot.login(config.token)
