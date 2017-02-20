const commando = require('discord.js-commando')

class GoodShit extends commando.Command {
  constructor(client) {
    super(client, {
      name: 'goodshit',
      group: 'shitposts',
      memberName: 'goodshit',
      description: 'shitpost message replies'
    })
  }

  async run(message, args) { 
    message.channel.sendMessage(':ok_hand::eyes::ok_hand::eyes::ok_hand::eyes::ok_hand::eyes::ok_hand::eyes: good shit go?? sHit:ok_hand: thats :heavy_check_mark: some good:ok_hand::ok_hand:shit right:ok_hand::ok_hand:th :ok_hand: ere:ok_hand::ok_hand::ok_hand: right:heavy_check_mark:there :heavy_check_mark::heavy_check_mark:if i do??a? so?my self :100: i say so :100: thats what im talking about right there right there (chorus: ????? ?????) mMMMM??:100: :ok_hand::ok_hand: :ok_hand:?O0??OOOOO???Oooo?????????:ok_hand: :ok_hand::ok_hand: :ok_hand: :100: :ok_hand: :eyes: :eyes: :eyes: :ok_hand::ok_hand:Good shit')  
  }
}

module.exports = GoodShit
