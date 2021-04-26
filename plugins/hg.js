const Siri = require('../events');
const {MessageType} = require('@adiwajshing/baileys');

Siri.addCommand({pattern: 'hg', fromMe: true}, (async (message, match) => {

    await message.sendMessage('*Kimler Gelmiş Kimler*');
  
    await new Promise(r => setTimeout(r, 1000));
   
    await message.sendMessage('*Hoşgeldin*');

}));

Siri.addCommand({pattern: 'infohg', fromMe: true}, (async (message, match) => {

    await message.sendMessage("*Codded by Erdem Bey*\n*Hoşgeldin Plugini*\n💻Usage: *.bb*")

}));
