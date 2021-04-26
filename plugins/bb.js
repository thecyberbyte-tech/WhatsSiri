const Siri = require('../events');
const {MessageType} = require('@adiwajshing/baileys');

Siri.addCommand({pattern: 'bb', fromMe: true}, (async (message, match) => {

    await message.sendMessage('*Küstüm*');
    await message.sendMessage('*Ben Gidiyom*');
    await message.sendMessage('*Şaka Şaka*');
    await.message.sendMessage('*Küsmedim Ama Gidiyorum*');
  
    await new Promise(r => setTimeout(r, 1000));
   
    await message.sendMessage('*Görüşürüz*');

}));

Siri.addCommand({pattern: 'infobb', fromMe: true}, (async (message, match) => {

    await message.sendMessage("*Codded by Erdem Bey*\n*WhatsApptada BB Diyelim dimi.*\n💻Usage: *.bb*")

}));
