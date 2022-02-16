const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("mission")
        .setDescription("Write your answer to the mission!")
        .addStringOption((option) =>
            option
                .setName("answer")
                .setDescription("The mission was executed successfully")
                .setRequired(true)
            ),
    async execute(interaction) {
        interaction.reply({
            content: interaction.options.getString("answer"),
            ephemeral: true
        });
    }
}