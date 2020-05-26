const Discord = require("discord.js");
const bot = new Discord.Client({ disableEveryone: true });
const prefix = '?'
const token = (process.env.TOKEN) ;

bot.on('ready', () => {
    console.log("Bot-ul tocmai s-a pornit ca " + bot.user.tag)
    bot.user.setActivity('Pentru ajutor mesaj in privat!');
})

bot.login(token); 
