import { Client, GatewayIntentBits, EmbedBuilder} from 'discord.js';
import personagens from '../Bot/personagens.js';

const token = process.env.DISCORD_TOKEN;
const prefix = process.env.PREFIX;
const MEU_ID = process.env.MEUID
const block = process.env.BLOCK

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds, // Para que Funcione em Servidores e os reconheça também.
    GatewayIntentBits.GuildMessages, // Para que ouvça as mensagens.
    GatewayIntentBits.MessageContent, // Para que leia mensagens.
    GatewayIntentBits.GuildMessageReactions // Para que ele reaja com Emojis.
  ]
});


client.on('clientReady', () => {
  console.log(`Bot online como ${client.user.tag}`);
});

client.on('messageCreate', (message) => {

  // Ignorar bots
  if (message.author.bot) return;

  // Verificar prefixo
  if (!message.content.startsWith(prefix)) return;

  // Quebrar mensagem 
  const args = message.content.slice(prefix.length).trim().split(/ +/);

  const command = args.shift().toLowerCase();

  if (command !== 'eu') return;

  if (message.author.id === MEU_ID) {
    return message.reply(`Este é o meu criador ${message.member}!`)
  }

  if (command === 'eu') {
    return message.reply(`Oiee ${message.member}, sim eu sou um bot seu bobo.\n Ihh, tomou de bobo, seu boboca.`)
  }
});

const paginator = {

  async start(options) {
    const {
      message,
      userId,
      maxPages = 3,
      render
    } = options;

    let page = 0;

    const embed = render(page);

    const msg = await message.reply({ embeds: [embed] });

    const filter = (reaction, user) => {
      return user.id === userId &&
        (reaction.emoji.name === '⬅️' || reaction.emoji.name === '➡️');
    };

    await msg.react('⬅️');
    await msg.react('➡️');

    const collector = msg.createReactionCollector({
      filter,
      time: 240000
    });

    collector.on('collect', async (reaction, user) => {

      const emoji = reaction.emoji.name;

      if (emoji === '➡️' && page < maxPages - 1) {
        page++;
      }

      if (emoji === '⬅️' && page > 0) {
        page--;
      }

      const newEmbed = render(page);

      await msg.edit({ embeds: [newEmbed] });

      await reaction.users.remove(user.id);

    });
  }
};


client.on('messageCreate', (message) => {
  // Ignorar bots
  if (message.author.bot) return;

  // Verificar prefixo
  if (!message.content.startsWith(prefix)) return;

  // Quebrar mensagem
  const args = message.content.slice(prefix.length).trim().split(/ +/);

  const command = args.shift().toLowerCase();

  // !build
  if (command === 'build') {
    const nome = args[0];

    if (message.author.id === block) { //Retirar depois
      return message.reply(`${message.member}, para quieto, seu chato >:C `)
    };

    if (!nome) {
      return message.reply('Digite o nome do personagem.');
    };

    const personagem = personagens.hsr[nome.toLowerCase()];

    if (!personagem) {
      return message.reply('Personagem não encontrado.\nTem certeza que é este nome?');
    };

    function gerarEmbed(personagem, page) {

      const reliquias = personagem.relics
      const teams = personagem.teams
      const embed = new EmbedBuilder()
        .setTitle(`✨ Build - ${personagem.name}`)
        .setColor(personagem.color) // Cor do Personagem.

      switch (page) {
        case 0:
          embed
            .setDescription(personagem.description)
            .setImage(personagem.images.overview);
          break;

        case 1: {
          reliquias.forEach(item => {
            embed.addFields({
              name: item.nome,
              value: item.descricao
            })
          });
          embed.setImage(personagem.images.relics)
          break;
        };

        case 2: {

          let lista1 = ""; // Primeira lista -> BUFFERS
          teams.buffers.sort((a, b) => b.destaque - a.destaque)

          for (let i = 0; i < teams.buffers.length; i++) { // FOR

            const item = teams.buffers[i];

            if (item.destaque) {
              lista1 += '🔥' + item.nome + '\n';
            } else {
              lista1 += item.nome + '\n'
            };
          };

          let lista2 = ""; // Segunda lista -> FLEX
          teams.flex.sort((a, b) => b.destaque - a.destaque);

          for (let i = 0; i < teams.flex.length; i++) {

            const item = teams.flex[i];

            if (item.destaque) {
              lista2 += '🔥' + item.nome + '\n';
            } else {
              lista2 += item.nome + '\n'
            };
          };

          let lista3 = ""; // Terceira lista -> SUSTAINERS
          teams.sustainers.sort((a, b) => b.destaque - a.destaque)

          for (let i = 0; i < teams.sustainers.length; i++) {

            const item = teams.sustainers[i];

            if (item.destaque) {
              lista3 += '🔥' + item.nome + '\n';
            } else {
              lista3 += item.nome + '\n'
            }
          }

          embed.addFields({
            name: 'Buffers',
            value: lista1
          })

            .addFields({
              name: 'Flex',
              value: lista2
            })
            .addFields({
              name: 'Sustainers',
              value: lista3
            })

          embed.setImage(personagem.images.teams)
          break;
        };
      };

      return embed
    };

    paginator.start({
      message,
      userId: message.author.id,
      maxPages: 3,
      render: (page) => gerarEmbed(personagem, page)
    });
  }
});

client.login(token);