const LASIapi = require('textmaker-lasi');
const XTroid = require('../events');
const {MessageType, GroupSettingChange, Mimetype, MessageOptions} = require('@adiwajshing/baileys');
const fs = require('fs');
const Config = require('../config')
const axios = require('axios')
const request = require('request');
const os = require('os');
var desc_msg = ''
if (Config.LANG == 'TR') desc_msg = 'Sınırsız erişime sahip textmaker araçlarını gösterir.'
if (Config.LANG == 'EN') desc_msg = 'Shows textmaker tools with unlimited access.'
if (Config.LANG == 'RU') desc_msg = 'Показывает инструменты для создания текстов с неограниченным доступом.'
if (Config.LANG == 'AZ') desc_msg = 'Sınırsız girişi olan textmaker alətləri göstərir.'
if (Config.LANG == 'PT') desc_msg = 'Mostra ferramentas textmaker com acesso ilimitado.'
if (Config.LANG == 'ID') desc_msg = 'Menampilkan alat pembuat teks dengan akses tak terbatas.'
if (Config.LANG == 'ML') desc_msg = 'പരിധിയില്ലാത്ത ആക്സസ് ഉള്ള ടെക്സ്റ്റ് മേക്കർ ഉപകരണങ്ങൾ കാണിക്കുന്നു.'
if (Config.LANG == 'HI') desc_msg = 'असीमित एक्सेस के साथ टेक्स्टमेकर टूल दिखाता है।'
if (Config.LANG == 'ES') desc_msg = 'Muestra herramientas de creación de textos con acceso ilimitado.'
let wk = Config.WORKTYPE == 'public' ? false : true

XTroid.addCMD({pattern: '.nclub ?(.*)', fromMe: wk, dontAddCMDList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);
    LASIapi.textpro("https://textpro.me/create-3d-neon-light-text-effect-online-1028.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/lizy/nclub.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/lizy/nclub.jpg'), MessageType.image, { caption:  Config.CAPTION_KEY})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));

XTroid.addCMD({pattern: '.ngreen ?(.*)', fromMe: wk, dontAddCMDList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);
    LASIapi.textpro("https://textpro.me/green-neon-text-effect-874.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/lizy/ngreen.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/lizy/ngreen.jpg'), MessageType.image, { caption:  Config.CAPTION_KEY})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));

XTroid.addCMD({pattern: '.nlux ?(.*)', fromMe: wk, dontAddCMDList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);
    LASIapi.textpro("https://textpro.me/3d-luxury-gold-text-effect-online-1003.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/lizy/nlux.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/lizy/nlux.jpg'), MessageType.image, { caption:  Config.CAPTION_KEY})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));

XTroid.addCMD({pattern: '.ngold ?(.*)', fromMe: wk, dontAddCMDList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);
    LASIapi.textpro("https://textpro.me/hexa-golden-text-effect-842.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/lizy/ngold.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/lizy/ngold.jpg'), MessageType.image, { caption:  Config.CAPTION_KEY})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));

XTroid.addCMD({pattern: '.nblood ?(.*)', fromMe: wk, dontAddCMDList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);
    LASIapi.textpro("https://textpro.me/blood-text-on-the-frosted-glass-941.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/lizy/nblood.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/lizy/nblood.jpg'), MessageType.image, { caption:  Config.CAPTION_KEY})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));

XTroid.addCMD({pattern: '.n2bld ?(.*)', fromMe: wk, dontAddCMDList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);
    LASIapi.textpro("https://textpro.me/horror-blood-text-effect-online-883.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/lizy/n2bld.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/lizy/n2bld.jpg'), MessageType.image, { caption:  Config.CAPTION_KEY})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));

XTroid.addCMD({pattern: '.ntoxic ?(.*)', fromMe: wk, dontAddCMDList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);
    LASIapi.textpro("https://textpro.me/toxic-text-effect-online-901.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/lizy/ntoxic.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/lizy/ntoxic.jpg'), MessageType.image, { caption:  Config.CAPTION_KEY})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));

XTroid.addCMD({pattern: '.ncarbon ?(.*)', fromMe: wk, dontAddCMDList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);
    LASIapi.textpro("https://textpro.me/carbon-text-effect-833.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/lizy/ncarbon.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/lizy/ncarbon.jpg'), MessageType.image, { caption:  Config.CAPTION_KEY})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));

XTroid.addCMD({pattern: '.nsteel ?(.*)', fromMe: wk, dontAddCMDList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);
    LASIapi.textpro("https://textpro.me/eroded-metal-text-effect-834.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/lizy/nsteel.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/lizy/nsteel.jpg'), MessageType.image, { caption:  Config.CAPTION_KEY})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));

XTroid.addCMD({pattern: '.ncloud ?(.*)', fromMe: wk, dontAddCMDList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);
    LASIapi.textpro("https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/lizy/ncloud.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/lizy/ncloud.jpg'), MessageType.image, { caption:  Config.CAPTION_KEY})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));

XTroid.addCMD({pattern: '.nxmas ?(.*)', fromMe: wk, dontAddCMDList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);
    LASIapi.textpro("https://textpro.me/xmas-cards-3d-online-942.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/lizy/nxmas.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/lizy/nxmas.jpg'), MessageType.image, { caption:  Config.CAPTION_KEY})
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
