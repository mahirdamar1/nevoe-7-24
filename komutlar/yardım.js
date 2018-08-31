const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setTitle("Komutlar")
  .setDescription('')
  .setColor(0x00ffff)
  .addField("**Eğlence ve Kullanıcı Komutları (entertainment and user commands):**", `z!banned = Dene ve Gör! (Try and see) \nz!avatarım = Avatarınınızı Gösterir. (show your avatar) \nz!herkesebendençay = Herkese Çay Alırsınız. (you get everybody tea) \nz!koş = Koşarsınız.(you run)\nz!çayiç = Çay İçersiniz.(drink tea) \nz!çekiç = İstediğiniz Kişiye Çekiç Atarsınız. (you can throw a hammer) \nz!çayaşekerat = Çaya Şeker Atarsınız. (you will throw sugar) \nz!yumruh-at = Yumruk Atarsınız.(you will punch) \nz!yaz = Bota İstediğiniz Şeyi Yazdırırsınız.(You will print the bot you want) \nz!sunucuresmi = BOT Sunucunun Resmini Atar.(icon in bot server) \nz!sunucubilgi = BOT Sunucu Hakkında Bilgi Verir.(the bot tells the server) \nz!kullanıcıbilgim = Sizin Hakkınızda Bilgi Verir.(gives you information about)\nz!emojiyazı = Yazdığınız yazı emoji olarak yazılır.(The writer you wrote is the emoji writer)\nz!starwars = güzel bir star wars savaşı gösterir.(shows a beautiful Star Wars battle) `)
  .addField("**Yetkili Komutları (authorized commands)**", `z!ban = İstediğiniz Kişiyi Sunucudan Banlar.(Ban the user you want from the server) \nz!kick  = İstediğiniz Kişiyi Sunucudan Atar.(Leave the user you want from the server)  \nz!unban = İstediğiniz Kişinin Yasağını Açar. \nz!sustur = İstediğiniz Kişiyi Susturur. (MUTE) \nz!oylama = Oylama Açar. (open a vote) \nz!duyuru = Güzel Bir Duyuru Görünümü Sağlar.(provides a nice announcement view)\nz!temizle = Mesajları siler.(delete messages) \nz!uyar = belirlenen kişiyi uyarır.(warn the designated person) `)
  .addField("**Ana Komutlar(main commands)**", "z!yardım = BOT Komutlarını Atar.(send bot commands) \nz!bilgi = BOT Kendisi Hakkında Bilgi Verir.(bot gives information about itself) \nz!ping = BOT Gecikme Süresini Söyler.(tell bot lag info) \nz!davet = BOT Davet Linkini Atar.(bot invite at) \nz!istatistik = BOT İstatistiklerini Atar.(throw bot statistics)")
  .addField("**Yapımcı (Created BY)**", " **@Alpha_ZEVKSİZ#9049 ** ")
  .setFooter('**--------------------------**')
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    message.channel.send(embedyardim);
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.author.send('asciidoc', `= ${command.help.name} = \n${command.help.description}\nDoğru kullanım: ` + prefix + `${command.help.usage}`);
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h', 'halp', 'help', 'y'],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım [komut]'
};
