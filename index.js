const Discord = require("discord.js"); 
const client = new Discord.Client(); 
const config = require("./config.json");


//heroku
const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5000;

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))

client.on("ready", () => {
  console.log(`Bot foi iniciado, com ${client.users.size} usuários, em ${client.channels.size} canais, em ${client.guilds.size} servidores.`); 
  client.user.setActivity(`Eu estou em ${client.guilds.size} servidores`);

        //STREAMING = TRANSMITINDO
  //LISTENING = OUVINDO
  //PLAYING = JOGANDO
  //WATCHING = ASSISTINDO
  //{name: ``, type: '', url: 'https://www.twitch.tv/jefersonvitorp'},
  //{name: ``, type: ''},

  

  let status = [     
      {name: `Meu Prefix: !! | Use !!help`, type: 'WATCHING'},
      {name: `Minha Comida Favorita É: Pudim, Pastel E Chocolate!!!`, type: 'STREAMING', url: 'https://www.twitch.tv/jefersonvitorp'},
      {name: `${client.guilds.size} Servidores Diferentes Espalhados Pelo Mundo Todo!!!`, type: 'WATCHING'},
      {name: `Apenas Um Garoto De 18 Anos Tentando Transformar O Mundo Em Um Lugar Melhor!!!`, type: 'WATCHING'},
      {name: `${client.users.size} Pessoas Diferente Espalhadas No Mundo Inteiro!!!`, type: 'LISTENING'},
      {name: `Meu Ermão É O: DuiConfig(Musicas)!!!`, type: 'WATCHING'},
      {name: `Estou Em fase Beta!!!`, type: 'LISTENING'},
      {name: `Siga Meu Pai No Twitch!!!`, type: 'STREAMING', url: 'https://www.twitch.tv/jefersonvitorp'},
      {name: `Para ${client.guilds.size} Servidores!!!`, type: 'STREAMING', url: 'https://www.twitch.tv/jefersonvitorp'},
      {name: `Para ${client.users.size} Pessoas!!!`, type: 'STREAMING', url: 'https://www.twitch.tv/jefersonvitorp'},
      {name: `Entre Para O Meu Servidor, Basta Vc Dar O Comando (!!convite), Que Irá Aparacer O Meu Servidor!!!`, type: 'WATCHING'},
      {name: `◈🐰Top's┃Rewards🐰◈`, type: 'WATCHING'},
      {name: `The Flash!!!`, type: 'WATCHING'}
      ];   
    
      function setStatus() {
      let randomStatus = status[Math.floor(Math.random() * status.length)];
      client.user.setPresence({game: randomStatus});
  }

  setStatus();
  setInterval(() => setStatus(), 8000);
  
})



client.on("guildCreate", guild => {
  console.log(`O bot entrou no servidor: ${guild.name} (id: ${guild.id}). População: ${guild.memberCount} membros!`);
  client.user.setActivity(`•Meu Prefix: !! | Use !!help`);
});

client.on("guildDelete", guild => {
  console.log(`O bot foi removido do servidor: ${guild.name} (id: ${guild.id})`);
  client.user.setActivity(`•Meu Prefix: !! | Use !!help`);
});


client.on("message", async message => {

  if(message.author.bot) return;
  if(message.channel.type === "dm") return;
  if(!message.content.startsWith(config.prefix)) return;
const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
const msgs = message.content.slice(config.prefix.length).trim().split(/ +/g);
const comando = args.shift().toLowerCase();
//comandos do bot, daqui para paixo!!!

if(comando === "invites") {
  const m = await message.channel.send("***__Seu Invites!!!__***");
  m.edit(`${message.author} ${user.invites}`);
}

if(comando === "donate"){
  const embed = {
    "title": "***``Se Sim Clica __Aqui__``***",
    "description": "***Sabe Aquele Pão Mofado Que Vc Compra Na Escola, Esse Dinheiro Vc Pode Dar Para Vc Me Ajudar A Ficar Online Por Mais Tempo!!!***",
    "url": "https://donatebot.io/checkout/550057159774437386",
    "color": 13980883,
    "timestamp": "2019-03-00T12:54:26.638Z",
    "footer": {
      "icon_url": "https://cdn.discordapp.com/attachments/554106838346498048/561214623374901249/dc.png",
      "text": `•Comando solicitado por: ${message.author.username}`
    },
    "thumbnail": {
      "url": "https://cdn.discordapp.com/attachments/554106838346498048/561214170226360320/RDTaAgNj8umg3YKj9n1RJ94V2PMgAAAABJRU5ErkJggg.png"
    },
    "author": {
      "name": "•DuiConfig",
      "url": "https://discordapp.com",
      "icon_url": "https://cdn.discordapp.com/attachments/554106838346498048/561214623374901249/dc.png"
    },
    "fields": [
      {
        "name": "***__                                                                                                               __***",
        "value": "***__❌Não Fiquem Abusando Dos Comandos (PFV)!!!__***"
      }
    ]
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
        "value": "**__                                                                                                               __**\n\n**__``Link Do Meu Servidor:``__** __https://discord.gg/CM4Wqrc__ \n**__                                                                                                               __**"
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
    "timestamp": "2019-03-10T12:54:26.638Z",
    "footer": {
      "icon_url": "https://cdn.discordapp.com/attachments/550114734234533889/552893486731493388/dc.png",
      "text": `•Comando solicitado por: ${message.author.username}`
    },
    "thumbnail": {
      "url": "https://cdn.discordapp.com/attachments/550114734234533889/552893486731493388/dc.png"
    },
    "author": {
      "name": "•DuiConfig",
      "url": "https://discordapp.com",
      "icon_url": "https://cdn.discordapp.com/attachments/550114734234533889/552893486731493388/dc.png"
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
  const m = await message.channel.send("***__Help/Ajuda!!!__***");
  const embed = {
    "title": "•Meu Site!!!",
    "description": "***__``Meus Comandos!!!``__***",
    "url": "https://duiconfig-br.glitch.me",
    "color": 16447526,
    "timestamp": "2019-00-08T00:27:39.861Z",
    "footer": {
      "icon_url": "https://cdn.discordapp.com/attachments/550114734234533889/552893486731493388/dc.png",
      "text": `•Comando solicitado por: ${message.author.username}`
    },
    "author": {
      "name": "•uiConfig",
      "url": "https://duiconfig-br.glitch.me",
      "icon_url": "https://cdn.discordapp.com/attachments/550114734234533889/552893486731493388/dc.png"
    },
    "fields": [
      {
        "name": "***__``Comandos Em Configuração!!!``__***",
        "value": "***__``•!!invites`` - Mostrar O Seus Invites!!!__***"
      },
      {
        "name": "***__``Comandos De Admins/staff!!!``__***",
        "value": "***__``•!!limpar`` - Limpe Os Chats , A Os Números São Do ``1`` Ao ``100``__***"
      },
      {
        "name": "***__``Comandos Publicos``__***",
        "value": "***__``•!!help`` - Meus Comandos Em Geral!!!__*** \n***__``•!!donate`` - Doe Para Mim!!!__*** \n***__``•!!convite`` - Entre Para O Meu Servidor De Suporte!!!__*** \n***__``•!!sobre`` - Saiba Um Pouco Mais Sobre Mim!!!__*** \n***__``•!!pai-mae`` - Saiba Quem São Os Meus Pais!!!__*** \n***__``•!!avatar`` - Veja O Avatar Dos Outros Ou O Seu!!!__*** \n***__``•!!anunciar`` - Use ``!!anunciar {texto}``!!!__***"
      },
      {
        "name": "***__                                                                                                               __***",
        "value": "***__❌Não Fiquem Abusando Dos Comandos (PFV)!!!__***"
      }
    ]
  };
  message.channel.send("***__``|Help, Meus Comandos!!!|``__***", { embed });
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

if(comando === "avatar") {
  const m = await message.channel.send("***__Avatar!!!__***");
module.exports.run = async (bot, message, args) => {}
let user = message.mentions.users.first() || message.author;
var embed = new Discord.RichEmbed()
.setColor("#F2FF00")
.setTitle(user.tag)
.setDescription(`***__${message.author} Essa É A Foto Que O Senhor Ou Senhora Pediu!!!__*** \n                              \n ***__❌Não Fiquem Abusando Dos Comandos (PFV)!!!__***`)
.setImage(user.displayAvatarURL)
.setFooter(`•Comando solicitado por: ${message.author.username}`)
 message.channel.send(embed)
}

  if(comando === "ping") {
    const m = await message.channel.send("***__O Seu Pong/Ping É ->__***");
    m.edit(`***🏓${message.author}!!!*** \n **⏱|WebSocket Ping:** ***__(${m.createdTimestamp - message.createdTimestamp}ms)__*** **!!!** \n **⚡|API Ping:** ***__(${Math.round(client.ping)}ms)__!!!*** `);
  }

  if(comando === "anunciar") { 
    const sayMessage = args.join(" ");
    message.delete().catch(O_o=>{});  
    message.channel.send(sayMessage);
  }


  if(comando === "limpar") {
    const deleteCount = parseInt(args[0], 10);
    if(!deleteCount || deleteCount < 0 || deleteCount > 100)
      return message.reply("***__Por favor, forneça um número entre ``1`` e ``100`` para o número de mensagens a serem excluídas__***");
    
    const fetched = await message.channel.fetchMessages({limit: deleteCount});
    message.channel.bulkDelete(fetched)
      .catch(error => message.reply(`***__Não foi possível deletar mensagens devido a: "${error}"__***`));
  }

});

client.login(config.token);
