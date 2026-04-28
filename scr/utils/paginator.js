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

export default paginator;