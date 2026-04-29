export default {
    hsr:
    { // Jogo com lista de personagens dentro.
        seele:
        {
            name: 'Seele',
            color: 0x201b75,
            description: 'Main-Dps focada em dano Quantum Bruto, como personagem do caminho da Caça, Seele é uma personagem que em sua NovaFlare tem um valor mais alto de dano por Repetição, quero dizer, ela vai causar muito dano utilizando muitas pericias, então tome cuidado com seu time para não ficar sem pontos, foque em personagens de Buff para o dano de sua Skill ou Sub-Dps que possam dar algum valor de dano para ela, assim como Tribbie, Cipher ou Ashveil.',

            images: {
                overview: 'https://media.discordapp.net/attachments/761056148135608320/1496914405529747688/image.png?ex=69eb9dad&is=69ea4c2d&hm=febffa13df356a7b5b1a095af312b529618a9e0316858825690ac1672232babc&=&format=webp&quality=lossless',
                relics: 'https://static.wikia.nocookie.net/houkai-star-rail/images/5/58/Character_Seele_Splash_Art.png/revision/latest/scale-to-width-down/1000?cb=20240121123334',
                teams: 'https://static.wikia.nocookie.net/houkai-star-rail/images/7/78/Light_Cone_In_the_Night.png/revision/latest?cb=20230719030418'
            },

            relics:
                [
                    { nome: '**Opção 1:**\n🧿Gênio das Estrelas Brilhantes🧿', descricao: 'A melhor opção para a Seele, provendo 10% de bônus de dano Quantum e ignorando 10% da Defesa inimiga, é o conjunto ideal para ser utilizado principalmente contra inimigos que possuem fraqueza Quantum.' },
                    { nome: '**Opção 2:**\n💡Uma Erudita Perdida na Erudição💡', descricao: 'Uma ótima opção para enfrentar inimigos que não possuem fraqueza Quantum, este conjunto fornece 8% de Taxa Crítica e bônus de 20% de dano para a Perícia e a Perícia Suprema que para Seele é ótimo, sendo tanto sua Skill e Ultimate, sua fonte de dano. \nAlém disso, após ativar o seu Supremo, a Seele recebe um aumento adicional de 25% de dano em sua próxima Perícia.' },
                    { nome: '**Opção 3:**\n2️⃣/2️⃣', descricao: 'Como acredito não haver uma opção Sólida para um Set, pode se utilizar o famoso 2/2, 2 peças de cada Set, tendo seus atributos como Taxa Crítica, Dano Crítico ou Ataque como foco principal.' }
                ],

            teams: {

                buffers:
                    [
                        { nome: 'Sparkle', destaque: true },
                        { nome: 'Sunday' }
                    ],

                flex:
                    [
                        { nome: 'Cerydra', destaque: true },
                        { nome: 'Tribbie' },
                        { nome: 'Cipher' },
                        { nome: 'Tingyun' },
                        { nome: 'Ashveil' },
                        { nome: 'TrailBlazer da Redordação' },
                        { nome: 'Ruan Mei' }
                    ],

                sustainers: [
                    { nome: 'Dan Heng Permansor Terrae', destaque: true },
                    { nome: 'Hyacine' },
                    { nome: 'HuoHuo' }
                ]
            }
        }
    }
}