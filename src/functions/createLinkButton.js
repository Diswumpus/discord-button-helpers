const Discord = require("discord.js");

/**
 * @typedef LinkButtonCreateOptions
 * @property {String} label
 * @property {Discord.EmojiResolvable} emoji
 * @property {Boolean} disabled
 * @property {String} url
 */

/**
 * Creates a link button.
 * @param {LinkButtonCreateOptions} options 
 * @param {String} url 
 */
module.exports = (options={ }, url) => {
    return new Discord.MessageButton()
    .setStyle("LINK")
    .setLabel(options.label)
    .setURL(options.url || url)
    .setEmoji(options.emoji)
    .setDisabled(options.disabled);
};