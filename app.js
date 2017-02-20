const Discord = require('discord.js')

const bot = new Discord.Client()
const path = require('path')

const argv = require('minimist')(process.argv.slice(2))
const configFile = argv.config || 'config'
const config = require(path.join(__dirname, configFile))

bot.on('ready', () => {
  console.log('shitposts ready and loaded')
})

bot.on('message', (message) => {
  if (message.content == 'good shit') {
    message.channel.sendMessage(':ok_hand::eyes::ok_hand::eyes::ok_hand::eyes::ok_hand::eyes::ok_hand::eyes: good shit go?? sHit:ok_hand: thats :heavy_check_mark: some good:ok_hand::ok_hand:shit right:ok_hand::ok_hand:th :ok_hand: ere:ok_hand::ok_hand::ok_hand: right:heavy_check_mark:there :heavy_check_mark::heavy_check_mark:if i do??a? so?my self :100: i say so :100: thats what im talking about right there right there (chorus: ????? ?????) mMMMM??:100: :ok_hand::ok_hand: :ok_hand:?O0??OOOOO???Oooo?????????:ok_hand: :ok_hand::ok_hand: :ok_hand: :100: :ok_hand: :eyes: :eyes: :eyes: :ok_hand::ok_hand:Good shit')
  }
})

bot.login(config.token)
