const Discord = require('discord.js')

const Command = (() => {
  function msg(string, message) {
    return message.content.toLowerCase().startsWith(string)
  }

  return {
    msg
  }
})()

module.exports = Command
