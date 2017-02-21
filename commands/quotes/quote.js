const commando = require('discord.js-commando')

class Quote extends commando.Command {
  constructor(client) {
    super(client, {
      name: 'quote',
      group: 'quotes',
      memberName: 'quote',
      description: 'Greg quotes from over the garden wall'
    })
  }
  
  async run(message, args) {
    message.channel.sendMessage('Ain\'t that just the way?')
  }
}

module.exports = Quote
