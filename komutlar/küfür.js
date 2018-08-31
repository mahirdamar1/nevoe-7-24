const kufurlu = ["macun", "yaprak", "pisi", "gözlük"];
// Eğer mesasj yukarıdaki kelimeleri içeriyorsa:
if( kufurlu.some(word =&gt; message.content.includes(word)) ) {
// Mesajı sil:
message.delete()
}