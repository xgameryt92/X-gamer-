const Discord = require("discord.js");
const bot = new Discord.Client({ disableEveryone: true });
const prefix = '?'
const token = 'NzEzMDczNjIxMjQ5MDMyMjgz.XsglSg.rSkhlRv7zs0BbvGqmwr7FOnfGqM'


bot.on('ready', () => {
    console.log("Bot-ul tocmai s-a pornit ca " + bot.user.tag)
    bot.user.setActivity('Pentru ajutor mesaj in privat!');
})

bot.login(token); 
