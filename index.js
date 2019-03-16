require('https').createServer().listen(3000)

const Discord = require("discord.js"); //baixar a lib
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
  client.user.setActivity(`✡Meu Prefix: !! | Use !!help`);
// caso queira o bot trasmitindo use:
/*
   client.user.setPresence({ game: { name: 'comando', type: 1, url: 'https://www.twitch.tv/ladonegro'} });
    //0 = Jogando
    //  1 = Transmitindo
    //  2 = Ouvindo
    //  3 = Assistindo
      */
});

client.on("guildCreate", guild => {
  console.log(`O bot entrou nos servidor: ${guild.name} (id: ${guild.id}). População: ${guild.memberCount} membros!`);
  client.user.setActivity(`Estou em ${client.guilds.size} servidores`);
});

client.on("guildDelete", guild => {
  console.log(`O bot foi removido do servidor: ${guild.name} (id: ${guild.id})`);
  client.user.setActivity(`Estou em ${client.guilds.size} servidores`);
});


client.on("message", async message => {

  if(message.author.bot) return;
  if(message.channel.type === "dm") return;
  if(!message.content.startsWith(config.prefix)) return;

const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
const comando = args.shift().toLowerCase();

if(comando === "convite"){
  const embed = {
    "title": "***__Meu Site!!!__***",
    "description": "***__Lá Vc Vai Poder Me Adicionar E Adicionar O Meu Irmão__***",
    "url": "https://duiconfig-br.glitch.me",
    "color": 112119,
    "timestamp": "2019-03-10T12:54:26.638Z",
    "footer": {
      "icon_url": "https://cdn.discordapp.com/attachments/550114734234533889/552893486731493388/dc.png",
      "text": "!!invite"
    },
    "thumbnail": {
      "url": "https://cdn.discordapp.com/attachments/550114734234533889/552893486731493388/dc.png"
    },
    "author": {
      "name": "DuiConfig",
      "url": "https://discordapp.com",
      "icon_url": "https://cdn.discordapp.com/attachments/550114734234533889/552893486731493388/dc.png"
    },
    "fields": [
      {
        "name": "😜",
        "value": "***__◆▬▬▬▬▬▬▬▬▬▬▬▬ ❴✪❵ ▬▬▬▬▬▬▬▬▬▬▬▬◆\n Link: https://discord.gg/w6uZyBu\n◆▬▬▬▬▬▬▬▬▬▬▬▬ ❴✪❵ ▬▬▬▬▬▬▬▬▬▬▬▬◆__***"
      },
      {
        "name": "***__🚫__***",
        "value": "***__❌Não Fiquem Abusando Dos Comandos (PFV)!!!__***"
      }
    ]
  };
  message.channel.send("***__!!invite, Esse É o Meu Servidor De Suporte!!!__***", { embed });
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
      "text": "!!sobre"
    },
    "thumbnail": {
      "url": "https://cdn.discordapp.com/attachments/550114734234533889/552893486731493388/dc.png"
    },
    "author": {
      "name": "DuiConfig",
      "url": "https://discordapp.com",
      "icon_url": "https://cdn.discordapp.com/attachments/550114734234533889/552893486731493388/dc.png"
    },
    "fields": [
      {
        "name": "***🤔***",
        "value": "***__Eu Sou Um Bot De Configuração, Para Ajudar Vc No Seu Servidor, Quem É O Meu Criador Ou Criadora, Se Vc Quer Saber Use ``!!pai-mae``Para Vc Saber Quem São Os Meus Criadores, Que Sobre Mais Lixo Né, Eu Prometo Que Eu Vou Melhorar Mais Para Frente!!!__***"
      },
      {
        "name": "***__🚫__***",
        "value": "***__❌Não Fiquem Abusando Dos Comandos (PFV)!!!__***"
      }
    ]
  };
  message.channel.send("***__!!sobre, Esse É um Sobre Meu!!!__***", { embed });
}

if(comando === "help") {
  const m = await message.channel.send("***__Help/Ajuda!!!__***");
  const embed = {
    "title": "Meu Site!!!",
    "description": "***__Meus Comandos!!!__***",
    "url": "https://duiconfig-br.glitch.me",
    "color": 13482334,
    "timestamp": "2019-03-08T18:27:39.861Z",
    "footer": {
      "icon_url": "https://cdn.discordapp.com/attachments/550114734234533889/552893486731493388/dc.png",
      "text": "!!Help"
    },
    "author": {
      "name": "DuiConfig",
      "url": "https://duiconfig-br.glitch.me",
      "icon_url": "https://cdn.discordapp.com/attachments/550114734234533889/552893486731493388/dc.png"
    },
    "fields": [
      {
        "name": "***__Comandos De Admins/staff!!!__***",
        "value": "***__!!ban, !!kick, !!limpar...__***"
      },
      {
        "name": "***__Comandos Publicos__***",
        "value": "***__!!help,!!sobre, !!convite, !!avatar, !!anunciar, !!pai-mae...__***"
      },
      {
        "name": "***__🚫__***",
        "value": "***__❌Não Fiquem Abusando Dos Comandos (PFV)!!!__***"
      }
    ]
  };
  message.channel.send("***__Help, Meus Comandos!!!__***", { embed });
}

if(comando === "pai-mae") {
  const m = await message.channel.send("***__Meu Pai E Mãe!!!__***");
  const embed = {
    "title": "***__Esse É O Meu Site!!!__***",
    "description": "***__Am Que Legal Não É!!!__***",
    "url": "https://duiconfig-br.glitch.me",
    "color": 16447526,
    "timestamp": "Comando solicitado por: ${message.author.username}",
    "footer": {
      "icon_url": "https://cdn.discordapp.com/attachments/550114734234533889/552893486731493388/dc.png",
      "text": "!!pai-mae "
    },
    "fields": [
      {
        "name": "🤔",
        "value": "**__Eu Sou Um Bot De Configuração!!!__**"
      },
      {
        "name": "😱",
        "value": "**__Não Fiquem Abusando Dos Meus Comandos__**"
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

  //comando avatar
if(comando === "avatar") {
  const m = await message.channel.send("***__Avatar!!!__***");
module.exports.run = async (bot, message, args) => {}
let user = message.mentions.users.first() || message.author;
var embed = new Discord.RichEmbed()
.setColor("#F2FF00")
.setTitle(user.tag)
.setDescription(`Essa É A Foto Que Vc Pediu!!!`)
.setImage(user.displayAvatarURL)
.setFooter(`Comando solicitado por: ${message.author.username}`)
 message.channel.send(embed)
}

  //comando sobre
  if(comando === "sobre-ajuda") {
    const m = await message.channel.send("***Sobre Mim!!!***");
    m.edit(`***Olá ${message.author} Vc Quer Saber Sobre Mim!!!
     Eu Foi Criado Por (__YasuMinasai#1958__) Para Ajudar Vcs No Que Vc Quiserem (Quase Tudo) Eu Ainda Estou Em fasse Beta, Então Eu Ainda __Sou Uma Merda__, __Por favor Não Fiquem Abusando Dos Meus Comandos Para Mim Não Bugar No Seu Servidor__, Ok!!!
     Esse Foi Sobre Mim, Mais Que Sobre Mim Foi Esse, ksks, Eu Prometo Que Vou Melhorar!!!***`) 
  }

  //comando convite
  if(comando === "test") {
    const m = await message.channel.send("***Meu Servidor De Suporte!!!***");
    m.edit(`***Olá ${message.author}, Esse E o Meu Servidor De Suporte???
    ◆▬▬▬▬▬▬▬▬▬▬▬▬ ❴✪❵ ▬▬▬▬▬▬▬▬▬▬▬▬◆
    Link: https://discord.gg/w6uZyBu
    ◆▬▬▬▬▬▬▬▬▬▬▬▬ ❴✪❵ ▬▬▬▬▬▬▬▬▬▬▬▬◆***`) 
  }

  //comando help
   if(comando === "help-ajuda") {
    const m = await message.channel.send("***Help/Ajuda/Meus Comandos!!!***");
    m.edit(`***Olá ${message.author}, Os Meus Comandos São Esses???
    ◆▬▬▬▬▬▬▬▬▬▬▬▬ ❴✪❵ ▬▬▬▬▬▬▬▬▬▬▬▬◆
    ❗❗Meu Prefix "!!"
    🤖Meu Nome "DuiConfig"***
 **◆▬▬▬▬▬▬▬▬▬▬▬▬ ❴✪❵ ▬▬▬▬▬▬▬▬▬▬▬▬◆**
         ***??Meus Comandos!!!***       
 **◆▬▬▬▬▬▬▬▬▬▬▬▬ ❴✪❵ ▬▬▬▬▬▬▬▬▬▬▬▬◆**
      ***??Comandos De Adm/Staff***
 **◆▬▬▬▬▬▬▬▬▬▬▬▬ ❴✪❵ ▬▬▬▬▬▬▬▬▬▬▬▬◆**
            ***Manutenção!!!              
             Manutenção!!!             
             !!limpar***
 **◆▬▬▬▬▬▬▬▬▬▬▬▬ ❴✪❵ ▬▬▬▬▬▬▬▬▬▬▬▬◆**
      ***??Comandos Publicos!!!*** 
 **◆▬▬▬▬▬▬▬▬▬▬▬▬ ❴✪❵ ▬▬▬▬▬▬▬▬▬▬▬▬◆**             
             ***!!help  
             !!convite  
             !!sobre        
             !!ping
             !!avatar         
             !!anunciar
             !!pai-mae***
  **◆▬▬▬▬▬▬▬▬▬▬▬▬ ❴✪❵ ▬▬▬▬▬▬▬▬▬▬▬▬◆**           
 ***Esse Comando Esta Em Manutenção!!!***     
 **◆▬▬▬▬▬▬▬▬▬▬▬▬ ❴✪❵ ▬▬▬▬▬▬▬▬▬▬▬▬◆**`);
   }

  // coamdno ping
  if(comando === "ping") {
    const m = await message.channel.send("Ping?");
    m.edit(`***🏓${message.author}!!!***
    **⏱|WebSocket Ping:** ***__(${m.createdTimestamp - message.createdTimestamp}ms)__*** **!!!
    ⚡|API Ping:** ***__(${Math.round(client.ping)}ms)__*** **!!!**`);
  }

  //comando falar
  if(comando === "anunciar") { 
    const sayMessage = args.join(" ");
    message.delete().catch(O_o=>{});  
    message.channel.send(sayMessage);
  }

//comando apagar
  if(comando === "limpar") {
    const deleteCount = parseInt(args[0], 10);
    if(!deleteCount || deleteCount < 1 || deleteCount > 100)
      return message.reply("***__Por favor, forneça um número entre ``2`` e ``100`` para o número de mensagens a serem excluídas__***");
    
    const fetched = await message.channel.fetchMessages({limit: deleteCount});
    message.channel.bulkDelete(fetched)
      .catch(error => message.reply(`***__Não foi possível deletar mensagens devido a: ${error}__***`));
  }

});

client.login(config.token);
