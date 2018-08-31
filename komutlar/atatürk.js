Örnekler #başa dön
Mantık oldukça basit bir derecede işliyor; isteği gönderiyorsunuz, site size JSON formatında cevap veriyor, siz ise bu cevabı alıp kendi uygulamalarınızda kullanabiliyorsunuz; güzel, değil mi? İsteği yapmak için JavaScript ve discord.js dillerinde bir modüle ihtiyaç duyabilirsiniz. Aşağıdaki örnekte "request" modülü kullanıldı. Modül, siteye ulaşıp isteği attıktan sonra siteden aldığı cevabı işleyecek ve size ulaştıracaktır. Aşağıdaki örneklere bakarak daha fazla bilgi alabilirsiniz.

Rastgele Atatürk Resimleri Örneği
var request = require('request');

request('https://api.eggsybot.xyz/ataturk', function (error, response, body) {
    if (error) return console.log('Hata:', error); // Hata olursa, konsola göndersin,
    else if (!error) { // Eğer hata yoksa;
        var info = JSON.parse(body); // info değişkeninin içerisine JSON'ı ayrıştırsın,
        msg.channel.send(info.link); // ve konsola çıktıyı versin.
    }
});