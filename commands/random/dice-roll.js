'use strict'

const commando = require('discord.js-commando')
const FUNCTION = require('../../functions.js')

class DDRoll extends commando.Command {
  constructor(client) {
    super(client, {
      name: 'roll',
      group: 'random',
      memberName: 'roll',
      description: 'rolls a D&D die...duh what else would it do?'
    })
  }
  
  async run(message, args) { 
    message.reply('rolled a ' + FUNCTION.roll(20))
  }
}

module.exports = DDRoll
