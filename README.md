https://discordapp.com/oauth2/authorize?client_id=283288271956738048&scope=bot&permissions=2096626815

```bash
git pull https://github.com/bkzhang/greg-v.0.1.0.git 
npm install
cd greg-v.0.1.0 
touch config.json
```

In your config.json
```bash
{
  "token": "<DISCORD TOKEN>",
  "owner": "<DISCORD USERID>",

  "prefix": "<COMMAND PREFIX">
}
```
quick note: command prefix only apply to official commands and not random comments that the bot will make during certain phrases

To add bot to Discord server, use https://discordapi.com/permissions.html for easy permssions bit calculations

To run server, (don't forget to add the bot to your Discord server) 
```bash
npm start
```

List of commands that are not available through PREFIX + "help"
```bash
good shit
greg
stop
gottem
i dont get it
shh
pardon me
```
