const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready", function()){
    bot.user.setGame("FripouzBot, Discord");
    console.log(" FripouzBot est bien connecter")
};

bot.login("NTY0ODMyNzg3MzMzNjQ0Mjg5.XKt9Lg.ch_IJTsIx6oJLwNxtkD__0_xIlA");
