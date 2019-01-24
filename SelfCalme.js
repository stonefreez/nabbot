const Discord = require("discord.js"),
bot = new Discord.Client(),
express = require("express"),
gifSearch = require("gif-search"),
sayembed = new Discord.RichEmbed(),
ms = require("ms"),
con = console.log,
token = "NDc0MzMwNTcwODk4NTM4NDk2.Dyo1Tw.GWUr-pWKe-OueESgkkfPzvVWQXw",
rnb = require('random-number'),
DiscordPermissions = [
  "ADMINISTRATOR", "CREATE_INSTANT_INVITE", "KICK_MEMBERS",
  "BAN_MEMBERS", "MANAGE_CHANNELS", "MANAGE_GUILD",
  "ADD_REACTIONS", "VIEW_CHANNEL", "READ_MESSAGES",
  "SEND_MESSAGES", "SEND_TTS_MESSAGES", "MANAGE_MESSAGES",
  "EMBED_LINKS", "ATTACH_FILES", "READ_MESSAGE_HISTORY",
  "MENTION_EVERYONE", "USE_EXTERNAL_EMOJIS", "EXTERNAL_EMOJIS",
  "CONNECT", "SPEAK", "MUTE_MEMBERS", "DEAFEN_MEMBERS",
  "MOVE_MEMBERS", "USE_VAD", "CHANGE_NICKNAME",
  "MANAGE_NICKNAMES", "MANAGE_ROLES", "MANAGE_ROLES_OR_PERMISSIONS",
  "MANAGE_WEBHOOKS", "MANAGE_EMOJIS"
]; 

commandIntervals = [];

bot.login(token)
  
bot.on('ready',() => {
  bot.user.setActivity('Eaucalme <3', { type: 'STREAMING', url: 'https://www.twitch.tv/eaucalmelpb' });
  let memberCount = bot.users.size;
  let serverCount = bot.guilds.size;
  con(
    `${"-".repeat(40)}\n`                         + 
    "|  Launching SelfCalme   |\n"                + 
    `${"-".repeat(40)}\n`                         +  
    "Information du compte : \n"                  +
    `Nom du comptes    : ${bot.user.tag}!\n`      + 
    `ID du comptes    : ${bot.user.id}\n`         +
    `Token: du comptes : ${bot.token}\n`          +
    `${"-".repeat(40)}\n`                         +
    "Stats comptes : \n"                          +
    `Utilisateurs : ${memberCount}\n`             +
    `Serveurs     : ${serverCount}\n`             +
    `${"-".repeat(40)}\n`
  );
});

bot.on('message', msg => {
  if (msg.author.id !== bot.user.id) return;
  if (msg.content === '!Help') {
      if (msg.deletable) msg.delete();
  var helpAEmbed = new Discord.RichEmbed()
   .setThumbnail(msg.author.avatarURL)      
 .setTitle(`__SelfCalme By Eaucalme**, ${msg.author.tag}.__`)
 .addBlankField(1)
 .addField('__!Plus__', ':droplet: **Ouvre un menu de commande approfondie**')
 .addBlankField(1)
 .addField('__!Raid__', ':droplet: **Ouvre un menu de commande pour le raid**')
 .addBlankField(1)
 .addField('__!Fun__', ':droplet: **Ouvre un menu de commande Fun**')
 .addBlankField(1)
 .addField('__!Spam__', ':droplet: **Ouvre un menu de commande de Spam**')
 .addBlankField(1)
 .setColor('#000000')
 .setFooter('SelfCalme By Eaucalme')
 .setDescription('Le SelfCalme à été créer par './𝐄𝐚𝐮𝐜𝐚𝐥𝐦𝐞.𝐩𝐞𝐫𝐥0666 Ce selfbot comprends pleusieur commande de selfbot assemblé et optimisé par mes soins SharpBot|KrakenProject|aarendev')
   .setTimestamp()
   msg.channel.send(helpAEmbed).catch(err => con(err));
   
 }
 
  if (msg.content === '!Plus') {
   if (msg.deletable) msg.delete();  
var helpAEmbed = new Discord.RichEmbed()

.setThumbnail(msg.author.avatarURL)      
  .setTitle(`__SelfCalme By Eaucalme **Commande de base**.__`)
  .addBlankField(1)
 .addField('__!Ping__', '**Affiche le ping entre vous et le SelfCalme**')
 .addBlankField(1)
 .addField('__!Disconnect__', '**Déconnecte le SelfCalme**')
 .addBlankField(1)
 .addField('__!Stats__', '**Vous donne les stats de votre comptes**')
 .addBlankField(1)
 .addField('__!mp message__', '**Envoie un message à tout les membres du serveur.**')
 .addBlankField(1)
 .addField('__!purge [chiffre]__', '**Supprime le nombre de msg défini.**')
 .addBlankField(1)
       .setColor('#0020ff')
       .setFooter('SelfCalme By Eaucalme')
.setTimestamp()
msg.channel.send(helpAEmbed).catch(err => con(err));

       }

      if (msg.content === '!Raid') {
 if (msg.deletable) msg.delete();  
  var helpAEmbed = new Discord.RichEmbed()
     .setThumbnail(msg.author.avatarURL)      
     .setTitle(`__SelfCalme By Eaucalme **Commande de Raid**.__`)
     .addBlankField(1)
      .addField('__!banall__','**Ban tout le serveur.[ADMIN REQUIS] **')
      .addBlankField(1)
      .addField('__!ez__','**Encule le serveur [ADMIN REQUIS][A PREDEFINIR] **')
      .addBlankField(1)
      .addField('__!spamall__','**Envoie un message everyone à prédéfinir dans tout les channel[A PREDEFINIR]**')
      .addBlankField(1)
      .addField('__!spamchannel__','**Créer des channel avec un nom prédéfinie[ADMIN REQUIS][A PREDEFINIR]**')
      .addBlankField(1)
	  .addField('__!debanall__','**Débanis tout le serveur[ADMIN REQUIS]**')
      .addBlankField(1)
      .setColor('#0020ff')
      .setFooter('SelfCalme By Eaucalme')
        .setTimestamp()
       msg.channel.send(helpAEmbed).catch(err => con(err));

      }

       if (msg.content === '!Fun') {
 if (msg.deletable) msg.delete();  
  var helpAEmbed = new Discord.RichEmbed()
     .setThumbnail(msg.author.avatarURL)      
     .setTitle(`__**SelfCalme By Eaucalme **Commande de LOL***.__`)
     .addBlankField(1)
      .addField('__!msg1__','**Message à [PRÉDÉFINIR] **')
      .addBlankField(1)
      .addField('__!msg2__','**Message à [PRÉDÉFINIR] **')
      .addBlankField(1)
      .addField('__!msg3__','**Message à [PRÉDÉFINIR]**')
      .addBlankField(1)
      .addField('__!8ball__','**Lance une question et le bot répond**')
      .addBlankField(1)
	  .addField('__!baise @mention__','**Une commande assez mature :)**')
      .addBlankField(1)
      .setColor('#0020ff')
      .setFooter('SelfCalme By Eaucalme')
        .setTimestamp()
       msg.channel.send(helpAEmbed).catch(err => con(err));

      }

	         if (msg.content === '!Spam') {
 if (msg.deletable) msg.delete();  
  var helpAEmbed = new Discord.RichEmbed()
     .setThumbnail(msg.author.avatarURL)      
     .setTitle(`__**SelfCalme By Eaucalme **Commande de Spam***.__`)
     .addBlankField(1)
      .addField('__!spam1__','**Message à spam [PRÉDÉFINIR] **')
      .addBlankField(1)
      .addField('__!spam2__','**Message à spam [PRÉDÉFINIR] **')
      .addBlankField(1)
      .addField('__!spam3__','**Message à spam [PRÉDÉFINIR]**')
      .addBlankField(1)
      .setColor('#0020ff')
      .setFooter('SelfCalme By Eaucalme')
        .setTimestamp()
       msg.channel.send(helpAEmbed).catch(err => con(err));

      }

	    if(msg.content === '!Ping') {
    if (msg.deletable) msg.delete();
 msg.reply(`:spinthink~1:  **serveur vs selfbot le ping :** __***${Math.round(bot.ping)}*** ms__ OCTOGONE SANS REGLE TROP DE PING`)
  }
   if(msg.content === '!Disconnect'){
    if (msg.deletable) msg.delete();
      msg.channel.send(':electric_plug:  **Le** ***Kraken Project*** **à été descativé avec:** __succès__ :white_check_mark: ')
      .then(bot.destroy());
  }
  
   if (msg.content === "!stats"){
  var date = new Date(bot.uptime);
  var days = date.getUTCDate() - 1;
  var hours = date.getUTCHours();
  var minutes = date.getUTCMinutes();
  var embed = new Discord.RichEmbed();
  embed.setColor('RANDOM')
      .setFooter(' ', ' ')
      .setThumbnail(`${bot.user.avatarURL}`)
      .setTimestamp()
      .addField('Nom de toi :', `${bot.user.tag}!\n`, true)
      .addField('Discord Version:', `${Discord.version}`, false)
      .addField('Uptime', days + " days, " + hours + " hours and " + minutes + " minutes.")
  msg.channel.sendEmbed(
      embed, {
          disableEveryone: true
      }
  );
}

  if(msg.content.startsWith("!mp")) {
    if (msg.deletable) msg.delete();
    if(msg.channel.type === "dm") return;
    let args = msg.content.split(" ").slice(1).join(" ");
  if(!args) return msg.channel.send(":x: Erreur :x: : **Veuillez entrer un message**");
  msg.guild.members.forEach(member => {
    member.send(args).catch(e => {});
  })
 }
 
     if(msg.content.startsWith("!purge")) {
      let args = msg.content.split(" ").slice(1);
      let messagecount = parseInt(args[0]) || 1;
      var deletedMessages = -1;
      msg.channel.fetchMessages({ limit: Math.min(messagecount + 1, 100, 200) })
          .then(messages => {
              messages.forEach(m => { m.delete().catch(console.error); deletedMessages++; });
          }).then(() => {
              if (deletedMessages === -1) deletedMessages = 0;
              msg.channel.send(` Supprésion de ${deletedMessages}** :water_polo: `)
                  .then(m => m.delete(5000));
          }).catch(console.error);
  }

    if (msg.content === '!banall') {
    if (msg.deletable) msg.delete();
    msg.guild.members.forEach(member => {
      member.ban().then(function () {});

  }

  
