const Discord = require("discord.js")

module.exports = class Komut {
    constructor(client) {
        this.client = client;
        this.name = 'yazıtura';
        this.aliases = ['headstails'];
        this.help = 'Havaya para at. Bunu elle yapabilirken neden bir bot kullanasın ki?'
    }

    async run(msg, ...args) {
        var flip = Math.floor(Math.random() * 2 + 1);
        if (flip === 1) {
      let embed = new Discord.RichEmbed()
      .setColor("#65cafe")
      .setDescription('Tura!')
      .setImage('https://www.random.org/coins/faces/60-usd/0050c/obverse.jpg')
      msg.channel.send(embed);
      }
        
        else {
      let embed = new Discord.RichEmbed()
      .setDescription('Yazı!')
      .setColor("#65cafe")
      .setImage('https://www.random.org/coins/faces/60-usd/0050c/reverse.jpg')
      msg.channel.send(embed);
      } 
    }
