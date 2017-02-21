https://discordapp.com/oauth2/authorize?client_id=283288271956738048&scope=bot&permissions=2096626815

```bash
git pull https://github.com/bkzhang/shitposts.git
npm install
cd shitposts
touch config.json
```

In your config.json
```bash
{
  "token": "<DISCORD TOKEN>",
  "owner": "<DISCORD USERID>"
}
```

To add bot to Discord server, use https://discordapi.com/permissions.html for easy permssions bit calculations

To run server, (don't forget to add the bot to your Discord server) 
```bash
npm start
```
