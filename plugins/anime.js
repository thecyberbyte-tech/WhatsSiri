const Siri = require('../events');

const Config = require('../config');

const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');

const fs = require('fs');

const axios = require('axios');

    Asena.addCommand({ pattern: 'anime', fromMe: false }, async (message, match) => {

        if (message.jid === '919628516236-1618200620@g.us') {

            return;

        }

        await axios

          .get(`https://videfikri.com/api/anime/neko`)

          .then(async (response) => {

            const {

              url_gbr,

            } = response.data.result

            const imageBuffer = await axios.get(url_gbr, {

              responseType: 'arraybuffer',

            })

            await message.sendMessage(Buffer.from(imageBuffer.data), MessageType.image, {

                        caption: "Made By Siri"

            })

          })

      },

    )
