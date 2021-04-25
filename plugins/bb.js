const Siri = require('../events');
const {MessageType} = require('@adiwajshing/baileys');

Siri.addCommand({pattern: 'bb', fromMe: true}, (async (message, match) => {

    await message.sendMessage('_Küstüm_');
    await message.sendMessage('_Ben Gidiyom_');
    await message.sendMessage('_Şaka Şaka_');
    await.message.sendMessage('_Küsmedim Ama Gidiyorum_');
  
    await new Promise(r => setTimeout(r, 1000));
   
    await message.sendMessage('*Görüşürüz*');

}));

Siri.addCommand({pattern: 'infobb', fromMe: true}, (async (message, match) => {

    await message.sendMessage("*Codded by Erdem Bey*\n*WhatsApptada BB Diyelim dimi.*\n💻Usage: *.bb*")

}));
