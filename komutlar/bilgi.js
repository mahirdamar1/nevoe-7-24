const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('../ayarlar.json');

exports.run = (client, message) => {
	const pingozel = new Discord.RichEmbed()
    .setDescription('Bot tamamen yenilendi! :tada:\n Beta Sürüm FrostyDonuts tarafından yapıldı!\n Tüm komutlar için /yardım yaz. \n Buradan da ekle: https://discordapp.com/oauth2/authorize?client_id=389786209922056192&scope=bot&permissions=8');
    return message.channel.send(pingozel)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['bot bilgi', 'botbilgi', 'bb', 'botb', 'bbot', 'hakkında', 'bot hakkında', 'bothakkında'],
  permLevel: 0
};

exports.help = {
  name: 'bilgi',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'bilgi'
};
