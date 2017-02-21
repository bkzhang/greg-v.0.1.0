const Discord = require('discord.js')

const FUNCTIONS = (() => {
  function msg(string, message) {
    return message.content.toLowerCase().startsWith(string)
  }

  return {
    msg
  }
})()

module.exports = FUNCTIONS 
