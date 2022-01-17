const Discord = require("discord.js");

/**
 * @typedef ButtonCreateOptions
 * @property {String} label
 * @property {Discord.EmojiResolvable} emoji
 * @property {Boolean} disabled
 * @property {String} customId
 * @property {Discord.MessageButtonStyle} style
 */

/**
 * Creates a button.
 * @param {ButtonCreateOptions} options 
 */
module.exports = (options={ }) => {
    return new Discord.MessageButton()
    .setStyle(options.style || "PRIMARY")
    .setCustomId(options.customId)
    .setLabel(options.label)
    .setURL(options.url || url)
    .setEmoji(options.emoji)
    .setDisabled(options.disabled);
};