const commando = require('discord.js-commando') 

const path = require('path')
const config = require('./config.json')
const sqlite = require('sqlite')
const FUNCTION = require('./functions')

const bot = new commando.Client({
  owner: config.owner,
  commandPrefix: config.prefix
})

bot
  .on('error', console.error)
  .on('warn', console.warn)
  .on('debug', console.log)
  .on('ready', () => {
    console.log('shitposts ready and loaded')
    console.log(`logged in as ${bot.user.username}#${bot.user.discriminator} (${bot.user.id})`) 
    switch(FUNCTION.roll(4)) {
      case 1: 
        bot.user.setGame('Drum me in the face')
        break
      case 2:
        bot.user.setGame('No, I was just eating leaves')
        break
      case 3:
        bot.user.setGame('We\'re here to BURGLE YER TURTS')
        break
      case 4:
        bot.user.setGame('It\'s a rooooooooock fact!')
        break
      default:
        console.log('you fookin idiot')
        break
    }
  })
  .on('disconnect', () => {
    console.warn('Your filthy internet disconnected you useless shit')
  })
  .on('reconnecting', () => {
    console.warn('Reconnecting...slowly')
  })
  .on('guildMemberAdd', member => {
    let guild = member.guild.defaultChannel 
    switch (FUNCTION.roll(11)) {
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
        guild.sendMessage('There you are George Washington')
        break
      case 5:
        guild.sendMessage('You done good, Mr. President. You done good.')
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
    switch (FUNCTION.roll(3)) {
      case 1:
        guild.defaultChannel.sendMessage(`I WILL RAIN TERROR AND MANURE ON ${guild.name}`)
        break
      case 2:
        guild.defaultChannel.sendMessage(`Ew...another server, ${guild.owner.user.username} please kick me`)
        break
      case 3:
        guild.defaultChannel.sendMessage('Mmm banana nut duck bread')
        break
      default:
        console.log('oops baka')
        break
    }
  })
  .on('guildDelete', guild => {
    console.log(`Left ${guild.name} owned by ${guild.owner.user.username} on ${new Date()}`)
  })
  .on('guildMemberAdd', member => {
    switch(FUNCTION.roll(2)) {
      case 1:
        member.guild.defaultChannel.sendMessage(`${member.user} tripped over my candy trail!`)
        break
      case 2:  
        member.guild.defaultChannel.sendMessage(`${member.user} has beautiful eyes`)
        break
      default:
        console.log('duh doh')
        break
    }
  })
  .on('guildMemberRemove', member => {
    member.guild.defaultChannel.sendMessage(`LOLOLOL ${member.user.username} GOT KICKED`)
  })
  .on('message', (message) => {
    if (message.author.bot) return
    if (FUNCTION.msg('good shit', message)) {
      message.channel.sendMessage(':ok_hand::eyes::ok_hand::eyes::ok_hand::eyes::ok_hand::eyes::ok_hand::eyes: good shit go?? sHit:ok_hand: thats :heavy_check_mark: some good:ok_hand::ok_hand:shit right:ok_hand::ok_hand:th :ok_hand: ere:ok_hand::ok_hand::ok_hand: right:heavy_check_mark:there :heavy_check_mark::heavy_check_mark:if i do??a? so?my self :100: i say so :100: thats what im talking about right there right there (chorus: ????? ?????) mMMMM??:100: :ok_hand::ok_hand: :ok_hand:?O0??OOOOO???Oooo?????????:ok_hand: :ok_hand::ok_hand: :ok_hand: :100: :ok_hand: :eyes: :eyes: :eyes: :ok_hand::ok_hand:Good shit')
    } else if (FUNCTION.msg('greg', message)) {
      message.channel.sendMessage('I\'m sorry, I\'m mildly brain damaged and it\'s all Mak\'s fault')
    } else if (FUNCTION.msg('stop', message)) {
      message.channel.sendMessage('This frog\'s giving me the run around!')
    } else if (FUNCTION.msg('gottem', message)) {
      message.channel.sendMessage('toot toot')
    } else if (FUNCTION.msg('send nudes', message)) {
      message.channel.sendMessage('noot noot')
    } else if (FUNCTION.msg('i dont get it', message) || (FUNCTION.msg('i don\'t get it', message))) {
      message.channel.sendMessage('That Endicott pegged me all wrong, I got no sense, no sense at all')
    } else if (FUNCTION.msg('shh', message)) {
      message.channel.sendMessage('You shush!')
    } else if (FUNCTION.msg('pardon me', message)) {
      message.channel.sendMessage('are you Aaron Burr, sir?')
    }
  })
  .setProvider(
    sqlite.open(path.join(__dirname, 'database.sqlite3')).then(db => new commando.SQLiteProvider(db))
  ).catch(console.error)

bot.registry
  .registerGroups([
    ['quotes', 'Over the garden wall quotes'],
    ['4chan', '4chan memes'],
    ['random', 'Random generators'] 
  ])
  .registerDefaults()
  .registerCommandsIn(__dirname + '/commands')

bot.login(config.token)
