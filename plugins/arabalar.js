const Siri = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('cars');

Siri.addCommand({pattern: 'cars', fromMe: true, desc: Lang.WP}, (async (message, match) => {

    var r_text = new Array ();

    r_text[0] = "https://images.wallpaperscraft.com/image/chevrolet_camaro_chevrolet_car_204282_1280x720.jpg";
    r_text[1] = "https://images.wallpaperscraft.com/image/trees_pines_mountains_160486_3648x5472.jpg";
    r_text[2] = "https://images.wallpaperscraft.com/image/chevrolet_camaro_chevrolet_car_158558_300x188.jpg";
    r_text[3] = "https://images.wallpaperscraft.com/image/chevrolet_camaro_chevrolet_car_130621_300x188.jpg";
    r_text[4] = "https://images.wallpaperscraft.com/image/chevrolet_camaro_chevrolet_black_138417_300x188.jpg";
    r_text[5] = "https://images.wallpaperscraft.com/image/bmw_car_bumper_191131_300x168.jpg";
    r_text[6] = "https://images.wallpaperscraft.com/image/bmw_car_bw_124257_300x168.jpg";
    r_text[7] = "https://images.wallpaperscraft.com/image/bmw_vision_efficientdynamics_concept_100297_300x168.jpg";
    r_text[8] = "https://images.wallpaperscraft.com/image/mercedes_benz_s_class_w222_112850_300x168.jpg";
    r_text[9] = "https://images.wallpaperscraft.com/image/porsche_911_carrera_rsr_porsche_sports_car_139640_300x168.jpg";
    r_text[10] = "https://images.wallpaperscraft.com/image/bmw_i8_concept_front_view_98354_300x168.jpg";
    r_text[11] = "https://images.wallpaperscraft.com/image/bmw_csl_hommage_side_view_105056_300x168.jpg";
    r_text[12] = "https://images.wallpaperscraft.com/image/bmw_m5_black_side_view_104943_300x168.jpg";
    r_text[13] = "https://images.wallpaperscraft.com/image/nissan_auto_black_street_87159_300x168.jpg";
    r_text[14] = "https://images.wallpaperscraft.com/image/lamborghini_aventador_lp700_4_white_side_view_2014_tron_tuning_97789_300x168.jpg";
    r_text[15] = "https://images.wallpaperscraft.com/image/car_sportscar_red_148269_300x168.jpg";
    r_text[16] = "https://images.wallpaperscraft.com/image/mercedes_gelandewagen_g63_brabus_black_g_tuning_2013_2014_suv_jeep_b63_4x4_hd_6k_93020_300x168.jpg";
    r_text[17] = "https://images.wallpaperscraft.com/image/ford_f_150_raptor_pickup_stones_99495_300x168.jpg";
    r_text[18] = "https://images.wallpaperscraft.com/image/car_db5_aston_martin_93821_300x168.jpg";

    var i = Math.floor(19*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: 'Made by WhatsSiri'})

}));
