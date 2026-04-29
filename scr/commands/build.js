import paginator from "../utils/paginator.js";
import personagens from "../data/personagens.js";
import gerarEmbed from "../embeds/buildEmbeds.js"

const block = process.env.BLOCK

async function buildCommand(message, args) {
    const nome = args[0];

    if (message.author.id === block) { //BlockList.
        return message.reply(`${message.member}, para quieto, seu chato >:C `)
    };

    if (!nome) {
        return message.reply('Digite o nome do personagem.');
    };

    const personagem = personagens.hsr[nome.toLowerCase()];

    if (!personagem) {
        return message.reply('Personagem não encontrado.\nTem certeza que é este nome?');
    };


    await paginator.start({
        message,
        userId: message.author.id,
        maxPages: 3,
        render: (page) => gerarEmbed(personagem, page)
    });
};

export default buildCommand