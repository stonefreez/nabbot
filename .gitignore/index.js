const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready", function () {
    bot.user.setGame("NabBOT, by Ownyx")
    console.log("Le bot a bien ete connecte");
});

bot.login("NDYzMDExMjc4NDMzMjg4MjEz.DhqQ5w.HiGfRJT8ej8TBYPSGy6jGPy1JYw");
