const Discord = require('discord.js');
const GuildSettings = require('../models/GuildSettings');

module.exports = {
    name: "guildMemberAdd",
    async execute (member) {
        // member.guild.channels.cache.get("939534567658909766").send(`${member.user} has fucking joined our server`);
        console.log(member.user);
        const guildSettings = await GuildSettings.findOne({ guild_id: member.guild.id });

        if (!guildSettings && !guildSettings.welcome_channel_id) {
            return;
        }

        const newMemberEmbed = new Discord.MessageEmbed()
        .setColor("#16104a")
        .setTitle("New Member!")
        .setDescription(`Greetings ${member.user}! 
Welcome to Crypt Zero, 
A community server where you can hangout with other investors and find potential NFTs.
Kindly read the #rules and #informations channel so you could know more about the community. Enjoy!

To gain access
Verify yourself at the #verification and choose your network at #network-options.`)
        .setThumbnail(member.user.displayAvatarURL())
        .setTimestamp();

        member.guild.channels.cache.get(guildSettings.welcome_channel_id).send({ 
            embeds:[newMemberEmbed] 
        })
    }
}