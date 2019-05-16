const Discord = require("discord.js"); 
const client = new Discord.Client(); 
const config = require("./config.json");
const moment = require('moment');
moment.locale('pt-BR');





client.on("ready", () => {
  console.log(`Bot foi iniciado, com ${client.users.size} usuários, em ${client.channels.size} canais, em ${client.guilds.size} servidores.`); 
  client.user.setActivity(`😊Olá Meus Bons Amigos!😊`);
 
  //STREAMING = TRANSMITINDO
  //LISTENING = OUVINDO
  //PLAYING = JOGANDO 
  //WATCHING = ASSISTINDO
  //{name: ``, type: '', url: 'https://www.twitch.tv/jefersonvitorp'},
  //{name: ``, type: ''},


  let status = [ 
    {name: `😊Meu Prefix: !! | Use !!ajuda😊`, type: 'WATCHING'},
    { name: `😲Vc Sabia Que Minha Linguagem É "JavaScript"?😲`, type: 'WATCHING'},
    {name: `😋Minha Comida Favorita É: Pudim, Pastel E Chocolate!!!😋`, type: 'STREAMING', url: 'https://www.twitch.tv/jefersonvitorp'},
    {name: `😚${client.guilds.size} Servidores Diferentes Espalhados Pelo Mundo Todo!!!😚`, type: 'WATCHING'},
    {name: `😏Apenas Um Garoto De 18 Anos Tentando Transformar O Mundo Em Um Lugar Melhor!!!😏`, type: 'WATCHING'},
    {name: `😚${client.users.size} Pessoas Diferente Espalhadas No Mundo Inteiro!!!😚`, type: 'LISTENING'},
    {name: `🤗Meu Ermão É O: DuiConfig(Musicas)!!!🤗`, type: 'WATCHING'},
    {name: `😫Estou Em fase Beta!!!😫`, type: 'LISTENING'},
    {name: `✔Siga Meu Pai No Twitch!!!✔`, type: 'STREAMING', url: 'https://www.twitch.tv/jefersonvitorp'},
    {name: `😏Para ${client.guilds.size} Servidores!!!😏`, type: 'STREAMING', url: 'https://www.twitch.tv/jefersonvitorp'},
    {name: `😏Para ${client.users.size} Pessoas!!!😏`, type: 'STREAMING', url: 'https://www.twitch.tv/jefersonvitorp'},
    {name: `😉Entre Para O Meu Servidor, Basta Vc Dar O Comando (!!convite), Que Irá Aparacer O Meu Servidor!!!😉`, type: 'WATCHING'},
    {name: `◈🏆Top's┃Rewards🏆◈`, type: 'WATCHING'},
    {name: `🏃‍The Flash!!!🏃‍`, type: 'WATCHING'},
    {name: `👑Meu Criador: @!• 🇾 🇦 🇸 🇺 🇲 🇮 🇳 🇦 🇸 🇦 🇮 • !#1958  !!!👑`, type: 'LISTENING'},
    {name: `🤟Meu Site: https://duiconfig-br.glitch.me 🤟`, type: 'WATCHING'},
    {name: `😘Nunca Desista Dos Seus Sonhos, Um Dia Você Vai Conseguir!!!😘`, type: 'STREAMING', url: 'https://www.twitch.tv/jefersonvitorp'},
    {name: `😘Siga Os Seus Sonhos, Eu Acredito Em Você!!!😘`, type: 'STREAMING', url: 'https://www.twitch.tv/jefersonvitorp'},
    {name: `📳O Celular Na Parede!!!📳`, type: 'PLAYING'},
    {name: `😥+💵=😋🍝 (help me plz) https://donatebot.io/checkout/550057159774437386 !!!`, type: 'STREAMING', url: 'https://www.twitch.tv/jefersonvitorp'},
    {name: `🎇Hospedado 24hs!!!🎇`, type: 'STREAMING', url: 'https://www.twitch.tv/jefersonvitorp'},
    { name: `😱Se Eu Ficar Off, Quer Dizer Que A Minha Host Caiu Ou A Net Não Aguentou: ${client.guilds.size} Servidores E  ${client.users.size} Pessoas!!!😱`, type: 'LISTENING' },
    {name: `!ajuda | ${client.guilds.size} Servers!`, type: 'PLAYING'},
    { name: `!help | ${client.guilds.size} Servers!`, type: 'PLAYING' }

  ];    

  function setStatus() {
    let randomStatus = status[Math.floor(Math.random() * status.length)];
    client.user.setPresence({ game: randomStatus });
  }
  setStatus();
  setInterval(() => setStatus(), 15000);
});



client.on("guildCreate", guild => {
  console.log(`O bot entrou no servidor: ${guild.name} (id: ${guild.id}). População: ${guild.memberCount} membros!`);
  client.user.setActivity(`•Meu Prefix: !! | Use !!help`);
});

client.on("guildDelete", guild => {

  console.log(`O bot foi removido do servidor: ${guild.name} (id: ${guild.id})`);
  client.user.setActivity(`•Meu Prefix: !! | Use !!help`);
});


client.on("message", async message => {

  if (message.content.startsWith(`ajuda`)) {
    message.channel.send(`**Olá ${message.author}, O Meu Nome É: __DuiConfig__, Use: __!!ajuda__ Ou __!!help__, Que Aparecera Os Meus Comandos!**`)
  }

  if (message.content.startsWith("oi")) {
    message.channel.send(`Oi ${message.author}!`)
  }

  if (message.content.startsWith("olá")) {
    message.channel.send(`Olá ${message.author}!`)
  }

  if (message.content.startsWith(`duiconfig`)) {
    message.channel.send(`***🤩|Opá, ${message.author} Vc Me Chamou?***
**--------------------------------------------------------------------------**
**😊|Use __!!ajuda__ Ou __!!help__ Que Eu Mostrarei Os Meus Comandos!**`)
  }


  if (!message.content.startsWith(config.prefix)) return;
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const comando = args.shift().toLowerCase();

  //comandos do bot, daqui para paixo!!!
  
  if (comando === "prefix") {
    module.exports.run = async (bot, message, args) => { }

      if (!message.member.hasPermission("MANAGE_SERVER")) return message.reply("No no no.");
      if (!args[0] || args[0 == "help"]) return message.reply("Usage: !prefix <desired prefix here>");


      prefixes[message.guild.id] = {
        prefixes: args[0]
      };


      let sEmbed = new Discord.RichEmbed()
        .setColor("#FF9900")
        .setTitle("Prefix Set!")
        .setDescription(`Set to ${args[0]}`);

      message.channel.send(sEmbed);

    }

  
  

  if (comando === "sair") {
    message.delete().catch(O_o => { });
    module.exports.run = async (bot, message, args) => { }
    let user = message.mentions.users.first() || message.author;
    var embed = new Discord.RichEmbed()
      .setTimestamp()
      .setColor("RANDOM")
      .setImage("https://cdn.discordapp.com/attachments/550114734234533889/578262913043791872/download.png")
      .setDescription("**__``EU ACABEI DE SAIR DA MANUTENÇÃO!!!``__**")
      .setFooter(`Bot Saiu Da Manutenção!`);
    message.channel.send(embed);
  } 
  
  if (comando === "manutenção") {
    message.delete().catch(O_o => { });  
    module.exports.run = async (bot, message, args) => { }
    let user = message.mentions.users.first() || message.author;
    var embed = new Discord.RichEmbed()
    .setTimestamp()
      .setColor("RANDOM")
      .setImage("https://cdn.discordapp.com/attachments/550114734234533889/578240847502508052/9k.png")
      .setDescription("**__``EU ACABEI DE ENTRAR EM MANUTENÇÃO!!!``__**")
      .setFooter(`Bot Em Manutenção!`);
    message.channel.send(embed);
  } 
  
  if (comando === "girl") {
    module.exports.run = async (bot, message, args) => { }
    let user = message.mentions.users.first() || message.author;
    var embed = new Discord.RichEmbed()
      .setTimestamp()
      .setColor("#FF0000")
      .setImage("https://cdn.discordapp.com/attachments/570012850429624324/577633139573129217/carregando.gif")
      .setDescription(`**__┎━━━━━━━━┒
             Vc Ficou Isolado!!!
    ┖━━━━━━━━┚__**`)
      .setFooter(`Comando solicitado por: ${message.author.username}`);
    message.channel.send(embed);
  }  

  if (comando === "morder") {
    module.exports.run = async (bot, message, args) => { }
    let user = message.mentions.users.first() || message.author;
    var embed = new Discord.RichEmbed()
    .setTimestamp()
      .setColor("#FF0000")
      .setImage(`https://cdn.discordapp.com/attachments/577103121453678592/577600033382334476/morder.gif`)
      .setDescription(`${message.author} Mordeu: ${user.tag}!😤`)
      .setFooter(`Comando solicitado por: ${message.author.username}`)
    message.channel.send(embed)
  } 

  if (comando === "socar") {
    module.exports.run = async (bot, message, args) => { }
    let user = message.mentions.users.first() || message.author;
    var embed = new Discord.RichEmbed()
      .setTimestamp()
      .setColor("#FF0000")
      .setImage(`https://cdn.discordapp.com/attachments/575478166647209985/577291278904066058/cocar.gif`)
      .setDescription(`${message.author} Deu Um Socou Em: ${user.tag}!😡`)
      .setFooter(`Comando solicitado por: ${message.author.username}`)
    message.channel.send(embed)
  }  

if (comando === "abraçar") {
    module.exports.run = async (bot, message, args) => { }
    let user = message.mentions.users.first() || message.author;
    var embed = new Discord.RichEmbed()
      .setTimestamp()
      .setColor("#F700FF")
      .setImage(`https://images-ext-1.discordapp.net/external/0q1NXhh1PvmVNpXCiJvUOrile5jCCSCTvQlYKawNF-g/https/loritta.website/assets/img/actions/hug/generic/gif_167.gif`)
      .setDescription(`${message.author} Abraçou: ${user.tag}!😊`)
      .setFooter(`Comando solicitado por: ${message.author.username}`)
    message.channel.send(embed)
  }  
  
  
  if (comando === "user-info") {
    module.exports.run = async (bot, message, args) => { }
    let user = message.mentions.users.first() || message.author;
    var embed = new Discord.RichEmbed()
      .setThumbnail(user.displayAvatarURL)
      .setTimestamp()
      .setColor("RANDOM")
      .addField("**__``📝Nome Do Usuario:``__**", user.tag)
      .addField("**__``🆔ID Do Usuario:``__**", user.id)
      .addField("**__``❗Discriminator:``__**", user.discriminator)
      .setDescription("***__``User Info!!!``__***")
      .setFooter(`Comando solicitado por:${message.author.username}`)
    message.channel.send(embed)
  }

if(comando === "bot-info"){
  let sicon = message.guild.iconURL;
    let serverembed = new Discord.RichEmbed()
      .setTimestamp()
    .setDescription("***__``Bot Info:``__***")
      .setColor("RANDOM")
    .addField("**__``Servers Que Eu Estou:``__**", client.guilds.size)
    .addField("**__``Pessoas Que Me Vê Online:``__**", client.users.size)
    .addField("**__``Channels Que Eu Estou:``__**", client.channels.size)
    .setDescription("***__Use Para Ver Os Meus Comandos: ``!!ajuda`` Ou ``!!help``!__***")
    .setFooter(`Comando solicitado por: ${message.author.username}`);

    return message.channel.send(serverembed);
}

  if (comando === "members") {
    let sicon = message.guild.iconURL;
    let serverembed = new Discord.RichEmbed()
      .setTimestamp()
      .setColor("RANDOM")
      .addField("**__``Membros/bots:``__**", message.guild.memberCount)
      .setFooter(`Comando solicitado por: ${message.author.username}`);

    return message.channel.send(serverembed);
  }


  if (comando === "dui-info") {

    const embed = {
    "color": 1828463,
    "footer": {
      "text": `•Comando solicitado por: ${message.author.username}`
    },
    "fields": [
      {
        "name": "***__``Meu Prefix É:``__***",
        "value": "***__Meu Prefix:``!!`` Use ``!!ajuda``, Para Ver Os Meus Comandos!!!__***"
      },
      {
        "name": "***__``Meu Servidor Do Discord É:``__***",
        "value": "***__``Link:`` https://discord.gg/w6uZyBu  __***"
      },
      {
        "name": "***__``Meu Site É:``__***",
        "value": "***__``Link:`` https://duiconfig-br.glitch.me __***"
      },
      {
        "name": "***__``Meu Convite É:``__***",
        "value": "***__``Link:`` https://discordapp.com/oauth2/authorize?client_id=552086755956883456&permissions=8&scope=bot __***"
      },
      {
        "name": "***__``Minha Playlist De Musicas É:``__***",
        "value": "***__``Link Da Minha Playlist:`` https://open.spotify.com/playlist/0xLIHlC08F9SwZheRmSqBO__***"
      }
    ]
  };
  message.channel.send(`${message.author}`, { embed });
}


  if (comando === "serverinfo") {
    exports.run = (bot, message, args) => {
      let gAvatar = message.guild.iconURL;
      let embed = new Discord.RichEmbed()

        .setDescription("***__``Informação Do Servidor:``__***")
        .setColor("RANDOM")
        .setThumbnail(gAvatar)
        .addField("**__``📝Nome Do Servidor:``__**", message.guild.name)
        .addField("**__``😎Dono Do Servidor:``__**", message.guild.owner)
        .addField("**__``😱Servidor Criado:``__**", moment(message.guild.createdAt).format("LLLL"))
        .addField("**__``🌐Região Do Servidor:``__**", message.guild.region)
        .addField("**__``🆔ID Do Servidor::``__**", message.guild.id)
        .addField("**__``🤗Você Entrou Em:``__**", moment(message.member.joinedAt).format("LLLL"))
        .addField("**__``😴AFK Channel:``__**", message.guild.afkChannel)
        .addField("**__``⌨Total De Canais:``__**", message.guild.channels.size)
        .addField("**__``🤖😀Total De Membros/Bots:``__**", message.guild.memberCount)
        .setFooter(`•Comando solicitado por: ${message.author.username}`);

      return message.channel.send(embed);
    }
  }



if(comando === "donate"){
  const embed = {
    "title": "***``Se Sim Click Aqui!!!``***",
    "description": "***Sabe Aquele Pão Mofado Que Vc Compra Na Escola, Esse Dinheiro Vc Pode Dar Para Vc Me Ajudar A Ficar Online Por Mais Tempo!!!***",
    "url": "https://donatebot.io/checkout/550057159774437386",
    "color": 13980883,
    "footer": {
      "text": `•Comando solicitado por: ${message.author.username}`
    },
    "thumbnail": {
      "url": "https://cdn.discordapp.com/attachments/554106838346498048/561214170226360320/RDTaAgNj8umg3YKj9n1RJ94V2PMgAAAABJRU5ErkJggg.png"
    }
  };
  message.channel.send("***__``Vc Quer Doar Para Mim?``__***", { embed });
}

if(comando === "convite"){
  const embed = {
    "color": 9999909,
    "footer": {
      "text": `•Comando solicitado por: ${message.author.username}`
    },
    "thumbnail": {
      "url": "https://cdn.discordapp.com/attachments/554106838346498048/561214623374901249/dc.png"
    },
    "image": {
      "url": "https://cdn.discordapp.com/attachments/554106817219788803/569914428892381186/invite_2.png"
    },
    "fields": [
      {
        "name": "***__``Entre No Meu Servidor De Suporte!!!``__***",
        "value": "**__                                                                                                               __**\n\n**__``Link Do Meu Servidor:``__** __https://discord.gg/w6uZyBu__ \n**__                                                                                                               __**"
      }
    ]
  };
  message.channel.send("***__``Convite Do Meu Servidor!!!``__***", { embed });
}

if(comando === "sobre") {
  const m = await message.channel.send("***__Sobre Mim!!!__***");
  const embed = {
    "title": "***__Meu Site!!!__***",
    "description": "***__Lá Vc Vai Poder Me Adicionar E Adicionar O Meu Irmão__***",
    "url": "https://duiconfig-br.glitch.me",
    "color": 2455972,
    "footer": {
      "icon_url": "https://cdn.discordapp.com/attachments/550114734234533889/552893486731493388/dc.png",
      "text": `•Comando solicitado por: ${message.author.username}`
    },
    "thumbnail": {
      "url": "https://cdn.discordapp.com/attachments/550114734234533889/552893486731493388/dc.png"
    },
    "fields": [
      {
        "name": "***🤔***",
        "value": "***__Eu Sou Um Bot De Configuração, Para Ajudar Vc No Seu Servidor, Quem É O Meu Criador Ou Criadora, Se Vc Quer Saber Use ``!!pai-mae``Para Vc Saber Quem São Os Meus Criadores, Que Sobre Mais Lixo Né, Eu Prometo Que Eu Vou Melhorar Mais Para Frente!!!__***"
      },
      {
        "name": "***__                                                                                                               __***",
        "value": "***__❌Não Fiquem Abusando Dos Comandos (PFV)!!!__***"
      }
    ]
  };
  message.channel.send("***__!!sobre, Esse É um Sobre Meu!!!__***", { embed });
}

if(comando === "help") {
  const embed = {
    "color": 16447526,
    "footer": {
      "text": `•Comando solicitado por: ${message.author.username}`
    },
    "fields": [
      {
        "name": "***__``Comandos De Admins/staff!!!``__***",
        "value": "***__``•!!limpar`` - Limpe Os Chats , A Os Números São Do ``1`` Ao ``100``__***"
      },
      {
        "name": "***__``Comandos De Brincadeiras!!!``__***",
        "value": "***__``•!!abraçar`` - Use ``!!abraçar @user`` Que O Bot Vai Falar: ``@vc Abraçou: @user``!!!__*** \n    \n***__``•!!socar`` - Use ``!!socar [@user mencionado]  .`` Que O Bot Vai Falar: ``@vc  Deu Um Socou Em: [@user mencionado]``!!!__*** \n    \n***__``•!!morder`` - Use ``!!morder [@user mencionado]  .`` Que O Bot Vai Falar: ``@vc  Mordeu: [@user mencionado]``!!!__***"
      },
      {
        "name": "***__``Comandos Publicos``__***",
        "value": "***__``•!!ajuda``ou: ``!!help`` - Meus Comandos Em Geral!!!__*** \n        \n***__``•!!donate`` - Doe Para Mim!!!__*** \n         \n***__``•!!convite`` - Entre Para O Meu Servidor De Suporte!!!__*** \n        \n***__``•!!sobre`` - Saiba Um Pouco Mais Sobre Mim!!!__*** \n       \n***__``•!!pai-mae`` - Saiba Quem São Os Meus Pais!!!__*** \n       \n***__``•!!avatar`` - Veja O Avatar Dos Outros Ou O Seu!!!__*** \n         \n***__``•!!anunciar`` - Use ``!!anunciar {texto}``!!!__*** \n     \n***__``•!!serverinfo`` - Mostra A Foto Do Server O Nome Do Server Quando o Server Foi Criado E Quando Eu Entrei, Eu Já Ia Ate Esquesendo Que Também Mostra Quantos Membros Tem!!!__*** \n     \n ***__``•!!ping`` - Mostra O Seu Pong.ms__*** \n       \n ***__``•!!dui-info`` - Mostra O Prefix Do Bot, O Site Do Bot, O Invite Do Bot É O Server Do Bot!!!__*** \n     \n ***__``•!!members`` - Mostra Quandos Membros E Bots Tem No Servidor!!!__*** \n     \n ***__``•!!bot-info`` - Mostra Em Quantos Servidores O Bot Esta E Quantas Pessoas Seguem Eu!!!__***"
      },
      {
        "name": "***__                                                                                                               __***",
        "value": "***__❌Não Fiquem Abusando Dos Comandos (PFV)!!!__***"
      }
    ]
  };
  message.channel.send("***__``Total De Comandos: 16!!!``__***", { embed });
}

if(comando === "ajuda") {
  const embed = {
    "color": 16447526,
    "footer": {
      "text": `•Comando solicitado por: ${message.author.username}`
    },
    "fields": [
      {
        "name": "***__``Comandos De Admins/staff!!!``__***",
        "value": "***__``•!!limpar`` - Limpe Os Chats , A Os Números São Do ``1`` Ao ``100``__***"
      },
      {
        "name": "***__``Comandos De Brincadeiras!!!``__***",
        "value": "***__``•!!abraçar`` - Use ``!!abraçar @user`` Que O Bot Vai Falar: ``@vc Abraçou: @user``!!!__*** \n    \n***__``•!!socar`` - Use ``!!socar [@user mencionado]  .`` Que O Bot Vai Falar: ``@vc  Deu Um Socou Em: [@user mencionado]``!!!__*** \n    \n***__``•!!morder`` - Use ``!!morder [@user mencionado]  .`` Que O Bot Vai Falar: ``@vc  Mordeu: [@user mencionado]``!!!__***"
      },
      {
        "name": "***__``Comandos Publicos``__***",
        "value": "***__``•!!ajuda``ou: ``!!help`` - Meus Comandos Em Geral!!!__*** \n        \n***__``•!!donate`` - Doe Para Mim!!!__*** \n         \n***__``•!!convite`` - Entre Para O Meu Servidor De Suporte!!!__*** \n        \n***__``•!!sobre`` - Saiba Um Pouco Mais Sobre Mim!!!__*** \n       \n***__``•!!pai-mae`` - Saiba Quem São Os Meus Pais!!!__*** \n       \n***__``•!!avatar`` - Veja O Avatar Dos Outros Ou O Seu!!!__*** \n         \n***__``•!!anunciar`` - Use ``!!anunciar {texto}``!!!__*** \n     \n***__``•!!serverinfo`` - Mostra A Foto Do Server O Nome Do Server Quando o Server Foi Criado E Quando Eu Entrei, Eu Já Ia Ate Esquesendo Que Também Mostra Quantos Membros Tem!!!__*** \n     \n ***__``•!!ping`` - Mostra O Seu Pong.ms__*** \n       \n ***__``•!!dui-info`` - Mostra O Prefix Do Bot, O Site Do Bot, O Invite Do Bot É O Server Do Bot!!!__*** \n     \n ***__``•!!members`` - Mostra Quandos Membros E Bots Tem No Servidor!!!__*** \n     \n ***__``•!!bot-info`` - Mostra Em Quantos Servidores O Bot Esta E Quantas Pessoas Seguem Eu!!!__***"
      },
      {
        "name": "***__                                                                                                               __***",
        "value": "***__❌Não Fiquem Abusando Dos Comandos (PFV)!!!__***"
      }
    ]
  };
  message.channel.send("***__``Total De Comandos: 16!!!``__***", { embed });
}

if(comando === "pai-mae") {
  const m = await message.channel.send("***__Meu Pai E Mãe!!!__***");
  const embed = {
    "title": "***__Esse É O Meu Site!!!__***",
    "description": "***__Am Que Legal Não É!!!__***",
    "url": "https://duiconfig-br.glitch.me",
    "color": 16447526,
    "timestamp": `Comando solicitado por: •${message.author.username}`,
    "footer": {
      "icon_url": "https://cdn.discordapp.com/attachments/550114734234533889/552893486731493388/dc.png",
      "text": `•Comando solicitado por: ${message.author.username}`
    },
    "fields": [
      {
        "name": "🙄",
        "value": "**__Eu Sou Um Bot De Configuração!!!__**"
      },
      {
        "name": "***__                                                                                                               __***",
        "value": "***__❌Não Fiquem Abusando Dos Comandos (PFV)!!!__***"
      },
      {
        "name": "🙄",
        "value": "***__Vcs Querem Saber Sobre Mim!!! Use ``!!sobre``__***"
      },
      {
        "name": "***__O ``YasuMinasai#1958`` Que Me Criou Ate Essa Fase!!!__***",
        "value": "***__Foi Ele Que Medeu Vida!!!__***",
        "inline": true
      },
      {
        "name": "***__Meu Pai E Minha Mãe!!!__***",
        "value": "***__ Pai: ``YasuMinasai#1958`` Mãe: ``❤Gabriela❤#5381``__***",
        "inline": true
      }
    ]
  };
message.channel.send("***__Vc Quer Saber Quem São Os Meus Pais!!!__***", {embed});
}

  if (comando === "ping") {
    const m = await message.channel.send("***__O Seu Pong/Ping É ->__***");
    m.edit(`***🏓${message.author}!!!*** \n **⏱|WebSocket Ping, Ping Do Bot Com O Server:** ***__(${m.createdTimestamp - message.createdTimestamp}ms)__*** **!!!** \n **⚡|API Ping, Seu Ping:** ***__(${Math.round(client.ping)}ms)__!!!*** `);

  }

if(comando === "avatar") {
  const m = await message.channel.send("***__Avatar!!!__***");
module.exports.run = async (bot, message, args) => {}
let user = message.mentions.users.first() || message.author;
var embed = new Discord.RichEmbed()
  .setTimestamp()
  .setColor("RANDOM")
.setTitle(user.tag)
.setDescription(`***__${message.author} Essa É A Foto Que O Senhor Ou Senhora Pediu!!!__*** \n                              \n ***__❌Não Fiquem Abusando Dos Comandos (PFV)!!!__***`)
.setImage(user.displayAvatarURL)
.setFooter(`Comando solicitado por: ${message.author.username}`, message.author.avatarURL)
 message.channel.send(embed)
}




  if (comando === "anunciar") { 
    const sayMessage = args.join(" ");
    message.delete().catch(O_o=>{});  
    message.channel.send(sayMessage);
  }


  if (comando === "limpar") {
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply(`***__Opá ${message.author}, Eu Vi Que Vc Esta Sem Permissão Para Executar Esse Comando, Pessa Para Um Adm Ou Mod Ou Ate O Dono Do Server Para Ele Te Dar A Permissão!__***`)
    const deleteCount = parseInt(args[0], 10);
    if(!deleteCount || deleteCount < 0 || deleteCount > 100)
      return message.reply("***__Por favor, forneça um número entre ``1`` e ``100`` para o número de mensagens a serem excluídas__***");
    
    const fetched = await message.channel.fetchMessages({limit: deleteCount});
    message.reply(`***Vc Apagou __${deleteCount} Mensagens__ Com Sucesso!***`);
    message.channel.bulkDelete(fetched)
      .catch(error => message.reply(`***__Não foi possível deletar mensagens devido a: "${error}"__***`));
  }

  
});

client.login(config.token);

