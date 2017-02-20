const Discord = require('discord.js')

const path = require('path')

const argv = require('minimist')(process.argv.slice(2))
const configFile = argv.config || 'config'
const config = require(path.join(__dirname, configFile))
const Command = require('./commands')


const bot = new Discord.Client({
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
    if (Command.msg('good shit', message)) {
      message.channel.sendMessage(':ok_hand::eyes::ok_hand::eyes::ok_hand::eyes::ok_hand::eyes::ok_hand::eyes: good shit go?? sHit:ok_hand: thats :heavy_check_mark: some good:ok_hand::ok_hand:shit right:ok_hand::ok_hand:th :ok_hand: ere:ok_hand::ok_hand::ok_hand: right:heavy_check_mark:there :heavy_check_mark::heavy_check_mark:if i do??a? so?my self :100: i say so :100: thats what im talking about right there right there (chorus: ????? ?????) mMMMM??:100: :ok_hand::ok_hand: :ok_hand:?O0??OOOOO???Oooo?????????:ok_hand: :ok_hand::ok_hand: :ok_hand: :100: :ok_hand: :eyes: :eyes: :eyes: :ok_hand::ok_hand:Good shit')
    }
  })
  .on('message', (message) => {
    if (message.author.username != 'shitposts') {
      if (Command.msg('roll', message)) {
        let roll = Math.floor(Math.random() * 20) + 1
        message.reply('rolled a ' + roll)
      }
    }
  })
  .login(config.token)
