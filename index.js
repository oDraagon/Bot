import { Client, GatewayIntentBits } from 'discord.js';
import buildCommand from './scr/commands/build.js';

const token = process.env.DISCORD_TOKEN;
const prefix = process.env.PREFIX;
const MEU_ID = process.env.MEUID

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
    buildCommand(message, args);
  }
});

client.login(token);