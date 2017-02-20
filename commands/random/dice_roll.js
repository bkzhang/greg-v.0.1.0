const commando = require('discord.js-commando')

class DiceRoll extends commando.Command {
  constructor(client) {
    super(client, {
      name: 'roll',
      group: 'random',
      memberName: 'roll',
      description: 'rolls a die..duh what else would it do?'
    })
  }

  async run(message, args) {
    let roll = Math.floor(Math.random() * 20) + 1
    message.reply('rolled  a ' + roll)
  }
}

module.exports = DiceRoll
