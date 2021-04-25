const Siri = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('ikonk');

Siri.addCommand({pattern: 'ikonk', fromMe: true, desc: Lang.WP}, (async (message, match) => {

    var r_text = new Array ();

    r_text[0] = "https://i.pinimg.com/236x/d7/e5/6d/d7e56d88eadd071cc93cdc3673cdb6b6.jpg";
    r_text[1] = "https://i.pinimg.com/236x/fe/05/25/fe05251db59301866fa13c1ba23187c6.jpg";
    r_text[2] = "https://i.pinimg.com/236x/0b/75/58/0b75583e5fd9009ae039620e0cdf3e58.jpg";
    r_text[3] = "https://i.pinimg.com/236x/34/1a/a7/341aa77b1fce1fc63a5a790deb80168e.jpg";
    r_text[4] = "https://i.pinimg.com/236x/66/c2/ea/66c2eab089bdec366f748263e7e327c4.jpg";
    r_text[5] = "https://i.pinimg.com/236x/0e/89/e3/0e89e334a526b72b26214e5a38cd5745.jpg";
    r_text[6] = "https://i.pinimg.com/236x/00/7e/50/007e50a976d54642277905e18f5da6c3.jpg";
    r_text[7] = "https://i.pinimg.com/236x/a7/28/8b/a7288b3205d267636dc8f7fd5df6cbf0.jpg";
    r_text[8] = "https://i.pinimg.com/236x/ed/52/ae/ed52aee4116c37d5048576bf2f2692b4.jpg";
    r_text[9] = "https://i.pinimg.com/236x/36/b3/5c/36b35c7d52b92612e970a9a58284ce3b.jpg";
    r_text[10] = "https://i.pinimg.com/236x/1b/57/05/1b5705b104798306b949327eb1f4be41.jpg";
    r_text[11] = "https://i.pinimg.com/236x/84/19/14/84191441ff0338add47d3cd9a6bd1511.jpg";
    r_text[12] = "https://i.pinimg.com/236x/ef/ec/00/efec005635ef892874d2f47a275340bb.jpg";
    r_text[13] = "https://i.pinimg.com/236x/a3/5a/c0/a35ac0a68b35a101e28aded8c1c37886.jpg";
    r_text[14] = "https://i.pinimg.com/236x/b6/4b/b5/b64bb58f8a74d68e4bd9ce75f3b3c1a8.jpg";
    r_text[15] = "https://i.pinimg.com/236x/c0/0e/2b/c00e2b86c4705a8e7fb08ad60afaa209.jpg";
    r_text[16] = "https://i.pinimg.com/236x/03/0f/88/030f88b0f0174a26713ef2c2a669393e.jpg";
    r_text[17] = "https://i.pinimg.com/236x/cb/72/ab/cb72ab4f35cd9c27de92dccf2eb854c4.jpg";
    r_text[18] = "https://i.pinimg.com/236x/cf/8e/9c/cf8e9c82fbda2929bdae54d99219d9ba.jpg";
    r_text[19] = "https://i.pinimg.com/236x/ca/e6/7f/cae67f1818f4e45f75aaf8f65c307b97.jpg";
    r_text[20] = "https://i.pinimg.com/236x/56/62/49/566249512421a1ea9b6b0e2624406ad6.jpg";
    r_text[21] = "https://i.pinimg.com/236x/74/12/eb/7412ebaa9d9f764bbb172461a6af43ed.jpg";
    r_text[22] = "https://i.pinimg.com/236x/bd/2d/ab/bd2dabdd918bcd6088bce035e3d5a2b1.jpg";
    r_text[23] = "https://i.pinimg.com/236x/dd/98/c9/dd98c9c4e69a0164bd9ee1d04e1f087c.jpg";
    r_text[24] = "https://i.pinimg.com/236x/cc/fb/8e/ccfb8ef947e559212b256594edd54316.jpg";
    r_text[25] = "https://i.pinimg.com/236x/d5/0e/32/d50e32897cf1f94aae8fd6aba1687f00.jpg";

    var i = Math.floor(27*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: 'Made by WhatsSiri'})

}));
