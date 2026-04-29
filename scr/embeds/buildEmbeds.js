import { EmbedBuilder } from 'discord.js'

export default function gerarEmbed(personagem, page) {

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