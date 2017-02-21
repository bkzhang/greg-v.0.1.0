const commando = require('discord.js-commando') 

const path = require('path')
const config = require('./config.json')
const sqlite = require('sqlite')
const FUNCTION = require('./functions')

const bot = new commando.Client({
  owner: config.owner,
  commandPrefix: '!'
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
  .on('guildMemberAdd', member => {
    let guild = member.guild.defaultChannel
    let roll = Math.floor(Math.random() * 11) + 1
    switch (roll) {
      case 1:
        guild.sendMessage('Hi Kitty')
        break
      case 2:
        guild.sendMessage('Hi Wirt')
        break
      case 3:
        guild.sendMessage('Hi Wirt Jr.')
        break
      case 4:
        guild.sendMessage('Hi George Washington')
        break
      case 5:
        guild.sendMessage('There you are Mr. President')
        break
      case 6:
        guild.sendMessage('Where were you Doctor Cucumber?')
        break
      case 7:
        guild.sendMessage('Hi Greg Jr.')
        break
      case 8:
        guild.sendMessage('There you are Skipper')
        break
      case 9:
        guild.sendMessage('How you doing Ronald?')
        break
      case 10:
        guild.sendMessage('Hey there Jason Funderburker')
        break
      case 11:
        guild.sendMessage('Hi Jonathan Livingston Applesauce from the comics')
        break
      default:
        console.log('oops', roll)
        break
    } 
  })
  .on('guildCreate', guild => {
    console.log(`Joined ${guild.name} owned by ${guild.owner.user.username} on ${new Date()}`)
    guild.defaultChannel.sendMessage(`Joined ${guild.name}`)
  })
  .on('guildDelete', guild => {
    console.log(`Left ${guild.name} owned by ${guild.owner.user.username} on ${new Date()}`)
  })
  .on('message', (message) => {
    if (message.author.bot) return
    if (FUNCTION.msg('good shit', message)) {
      message.channel.sendMessage(':ok_hand::eyes::ok_hand::eyes::ok_hand::eyes::ok_hand::eyes::ok_hand::eyes: good shit go?? sHit:ok_hand: thats :heavy_check_mark: some good:ok_hand::ok_hand:shit right:ok_hand::ok_hand:th :ok_hand: ere:ok_hand::ok_hand::ok_hand: right:heavy_check_mark:there :heavy_check_mark::heavy_check_mark:if i do??a? so?my self :100: i say so :100: thats what im talking about right there right there (chorus: ????? ?????) mMMMM??:100: :ok_hand::ok_hand: :ok_hand:?O0??OOOOO???Oooo?????????:ok_hand: :ok_hand::ok_hand: :ok_hand: :100: :ok_hand: :eyes: :eyes: :eyes: :ok_hand::ok_hand:Good shit')
    }
    if (FUNCTION.msg('greg', message)) {
      message.channel.sendMessage('I\'m sorry, I\'m mildly brain damaged and it\'s all Mak\'s fault')
    }
    if (FUNCTION.msg('gottem', message)) {
      message.channel.sendMessage('toot toot')
    }
    if (FUNCTION.msg('send nudes', message)) {
      message.channel.sendMessage('noot noot')
    }
  })
  .setProvider(
    sqlite.open(path.join(__dirname, 'database.sqlite3')).then(db => new commando.SQLiteProvider(db))
  ).catch(console.error)

bot.registry
  .registerGroups([
    ['random', 'Random generators'] 
  ])
  .registerDefaults()
  .registerCommandsIn(__dirname + '/commands')

bot.login(config.token)
