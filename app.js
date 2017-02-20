const commando = require('discord.js-commando')

const path = require('path')

const argv = require('minimist')(process.argv.slice(2))
const configFile = argv.config || 'config'
const config = require(path.join(__dirname, configFile))

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

bot.registry
  .registerGroups([
    ['shitposts', 'Shit Posts Messages'],
    ['random', 'Random']
  ])
  .registerDefaults()
  .registerCommandsIn(__dirname + '/commands')

bot.login(config.token)
