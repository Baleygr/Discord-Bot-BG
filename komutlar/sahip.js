const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let serverembed = new Discord.RichEmbed()
    .setDescription("**:flag_tr:  Batmaz Gaming Yetkili komutları :flag_tr: **")
    .setColor("#15f153")
    .addField("eval", "Kod dener")
    .addField("load", "Yeni bir komut yükler")
    .addField("reboot", "Botu yeniden başlatır")
    .addField("reload", "Bir komutu yeniden başlatır")
    .addField("unload", "Bir komutu devre dışı bırakır")
    .addField("Server Kurucusu", "Dogukan Ucan")
    .addField("Bot ve Discord Kurucusu", "Ege-R")

    message.channel.send(serverembed);
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['sahipler'],
  permLevel: 0
};

exports.help = {
  name: 'sahip',
  description: 'Bütün Sahip/Yetkili komutlarını verir.',
  usage: 'sahip'
};
