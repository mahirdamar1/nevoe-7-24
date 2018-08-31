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
  .addField("**Ana Komutlar(main commands)**", "= Komut Listesi =

[Komut hakkında bilgi için +yardım <komut adı>]

+8ball            :: Sihirli 8ball sorularınızı cevaplar
+banned           :: Dene ve Gör :D
+avatar           :: Avatarınızı gösterir
+ban              :: İstediğiniz kişiyi banlar.
+bilgi            :: Bot ile ilgili bilgi verir.
+davet            :: Botun davet linkini gönderir.
+emojiyazı        :: Mesajınızı emoji haline getirir
+eval             :: Kod denemek için kullanılır.
+herkesebendençay :: Herkese Çay Verir
+kick             :: İstediğiniz kişiyi sunucudan atar.
+koş              :: Koşarsınız.
+kullanıcıbilgim  :: Komutu kullanan kişi hakkında bilgi verir.
+load             :: Yeni eklenen komutu yükler.
+duyur            :: İstediğiniz şeyi bota duyurtur.
+oylama           :: Oylama Yapar.
+ping             :: Botun pingini gösterir
+reboot           :: Botu yeniden başlatır.
+reload           :: İstediğiniz bir komutu yeniden başlatır.
+servericon       :: Serverin iconunu gösterir
+stresçarkı       :: Sizin için bir stres çarkı çevirir.
+starwars         :: StarWars Gösterir
+sustur           :: İstediğiniz kişiyi  susturur.
+temizle          :: Belirlenen miktar mesajı siler.
+unban            :: İstediğiniz kişinin banını kaldırır.
+unload           :: İstediğiniz bir komutu devre dışı bırakır.
+uyar             :: İstediğiniz kişiyi uyarır.
+woodie           :: Woodie the Lumberjack hakkında bilgi verir
+yardım           :: Tüm komutları gösterir.
+yaz              :: İstediğiniz şeyi bota yazdırır.
+yumruh-at        :: Yumruk Atar.
+çayaşekerat      :: Çaya Şeker Atar.
+çayiç            :: Çay İçer.
+çekiç            :: İstediğiniz Kişiye Çekiç Atarsınız.= Komut Listesi =

[Komut hakkında bilgi için +yardım <komut adı>]

+8ball            :: Sihirli 8ball sorularınızı cevaplar
+banned           :: Dene ve Gör :D
+avatar           :: Avatarınızı gösterir
+ban              :: İstediğiniz kişiyi banlar.
+bilgi            :: Bot ile ilgili bilgi verir.
+davet            :: Botun davet linkini gönderir.
+emojiyazı        :: Mesajınızı emoji haline getirir
+eval             :: Kod denemek için kullanılır.
+herkesebendençay :: Herkese Çay Verir
+kick             :: İstediğiniz kişiyi sunucudan atar.
+koş              :: Koşarsınız.
+kullanıcıbilgim  :: Komutu kullanan kişi hakkında bilgi verir.
+load             :: Yeni eklenen komutu yükler.
+duyur            :: İstediğiniz şeyi bota duyurtur.
+oylama           :: Oylama Yapar.
+ping             :: Botun pingini gösterir
+reboot           :: Botu yeniden başlatır.
+reload           :: İstediğiniz bir komutu yeniden başlatır.
+servericon       :: Serverin iconunu gösterir
+stresçarkı       :: Sizin için bir stres çarkı çevirir.
+starwars         :: StarWars Gösterir
+sustur           :: İstediğiniz kişiyi  susturur.
+temizle          :: Belirlenen miktar mesajı siler.
+unban            :: İstediğiniz kişinin banını kaldırır.
+unload           :: İstediğiniz bir komutu devre dışı bırakır.
+uyar             :: İstediğiniz kişiyi uyarır.
+woodie           :: Woodie the Lumberjack hakkında bilgi verir
+yardım           :: Tüm komutları gösterir.
+yaz              :: İstediğiniz şeyi bota yazdırır.
+yumruh-at        :: Yumruk Atar.
+çayaşekerat      :: Çaya Şeker Atar.
+çayiç            :: Çay İçer.
+çekiç            :: İstediğiniz Kişiye Çekiç Atarsınız.)")
  .addField("**Yapımcı (Created BY)**", " **neVoe#8146 , spyer#8131 ** ")
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
