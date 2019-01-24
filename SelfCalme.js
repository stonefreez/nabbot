const Discord = require("discord.js"),
bot = new Discord.Client(),
express = require("express"),
gifSearch = require("gif-search"),
sayembed = new Discord.RichEmbed(),
ms = require("ms"),
con = console.log,
token = "NDc0MzMwNTcwODk4NTM4NDk2.Dyo1Tw.GWUr-pWKe-OueESgkkfPzvVWQXw",
kiss = ["https://cdn.weeb.sh/images/SJ--2auDZ.gif", "https://cdn.weeb.sh/images/Skc42pdv-.gif", "https://cdn.weeb.sh/images/rJ_U2p_Pb.gif", "https://cdn.weeb.sh/images/ryFdQRtF-.gif", "https://cdn.weeb.sh/images/SkQIn6Ovb.gif", "https://cdn.weeb.sh/images/SJQRoTdDZ.gif", "https://cdn.weeb.sh/images/Sk1k3TdPW.gif", "https://cdn.weeb.sh/images/r1H42advb.gif", "https://cdn.weeb.sh/images/S1E1npuvb.gif", "https://cdn.weeb.sh/images/ByurnpODW.gif", "https://cdn.weeb.sh/images/S1y-4l5Jf.gif", "https://cdn.weeb.sh/images/Skv72TuPW.gif", "https://cdn.weeb.sh/images/SJINn6OPW.gif", "https://cdn.weeb.sh/images/SJ3dXCKtW.gif", "https://cdn.weeb.sh/images/H1Gx2aOvb.gif", "https://cdn.weeb.sh/images/S1qZksSXG.gif", "https://cdn.weeb.sh/images/r1cB3aOwW.gif", "https://cdn.weeb.sh/images/HJ8dQRYK-.gif", "https://cdn.weeb.sh/images/BJLP3a_Pb.gif"],
hug = ["https://s-media-cache-ak0.pinimg.com/originals/49/a2/1e/49a21e182fcdfb3e96cc9d9421f8ee3f.gif", "https://s-media-cache-ak0.pinimg.com/originals/16/46/f7/1646f720af76ea58853ef231028bafb1.gif", "https://media.giphy.com/media/xJlOdEYy0r7ZS/giphy.gif", "http://i.imgur.com/2WywS3T.gif", "http://i.imgur.com/8ruodNJ.gif", "https://myanimelist.cdn-dena.com/s/common/uploaded_files/1461071296-7451c05f5aae134e2cceb276b085a871.gif", "http://i0.kym-cdn.com/photos/images/original/000/931/030/394.gif", "https://media.tenor.co/images/1171c186f9130d1efa4a186ad4371e8c/tenor.gif", "http://cdn.smosh.com/sites/default/files/ftpuploads/bloguploads/0413/epic-hugs-friends-pikachu.gif", "https://cdn.weeb.sh/images/rJaog0FtZ.gif", "https://cdn.weeb.sh/images/B10Tfknqf.gif", "https://cdn.weeb.sh/images/S1a0DJhqG.gif", "https://cdn.weeb.sh/images/Hk4qu_XvZ.gif", "https://cdn.weeb.sh/images/Hk0yFumwW.gif", "https://cdn.weeb.sh/images/BJCCd_7Pb.gif", "https://cdn.weeb.sh/images/BJ0UovdUM.gif"],
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
  bot.user.setActivity('@̠̠̠̠̿̿̿𝑬̠̠̠̠̿̿̿𝒂̠̠̠̠̿̿̿𝒖̠̠̠̠̿̿̿𝒄̠̠̠̠̿̿̿𝒂̠̠̠̠̿̿̿𝒍̠̠̠̠̿̿̿𝒎̠̠̠̠̿̿̿𝒆̠̠̠̠̿̿̿_̠̠̠̠̿̿̿ ̠̠̠̠̿̿̿𝑶̠̠̠̠̿̿̿𝒏̠̠̠̠̿̿̿ ̠̠̠̠̿̿̿𝑻̠̠̠̠̿̿̿𝒘̠̠̠̠̿̿̿𝒊̠̠̠̠̿̿̿𝒕̠̠̠̠̿̿̿𝒕̠̠̠̠̿̿̿𝒆̠̠̠̠̿̿̿𝒓̠̠̠̠̿̿̿ ̠̠̠̠̿̿̿<̠̠̠̠̿̿̿3', { type: 'STREAMING', url: 'https://www.twitch.tv/eaucalmelpb' });
  let memberCount = bot.users.size;
  let serverCount = bot.guilds.size;
  con(
    `${"-".repeat(40)}\n`                         + 
    "|  Bienvenue sur: Kraken Selfbot-Logs.  |\n" + 
    `${"-".repeat(40)}\n`                         +  
    "Information du bot : \n"                     +
    `Nom du bot    : ${bot.user.tag}!\n`          + 
    `ID du bot     : ${bot.user.id}\n`            +
    `Token: du bot : ${bot.token}\n`              +
    `${"-".repeat(40)}\n`                         +
    "Stats bot : \n"                              +
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
 .setDescription('Le SelfCalme à été créer par Eaucalme Ce selfbot comprends pleusieur commande de selfbot assemblé et optimisé par mes soins SharpBot|KrakenProject|aarendev')
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
             },
              }
          }
      })
    }
});
