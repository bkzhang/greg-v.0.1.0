const Discord = require('discord.js')

const FUNCTIONS = (() => {
  function msg(string, message) {
    return message.content.toLowerCase().startsWith(string)
  }

  function roll(number) {
    return Math.floor(Math.random() * number) + 1
  }

  return {
    msg,
    roll
  }
})()

module.exports = FUNCTIONS 
