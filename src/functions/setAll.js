const Discord = require("discord.js");

/**
 * Sets all the buttons in that row or array disabled.
 * @param {Discord.MessageActionRow|Discord.MessageButton[]} buttons 
 * @returns {Discord.MessageButton[]}
 */
module.exports.disabled = (buttons) => {
    if(buttons?.components != null) buttons = buttons.components;

    for(const button of buttons){
        button.setDisabled(true);
    }

    return buttons;
}

/**
 * Sets all the buttons in that row or array __*not*__ disabled.
 * @param {Discord.MessageActionRow|Discord.MessageButton[]} buttons 
 * @returns {Discord.MessageButton[]}
 */
 module.exports.undo = (buttons) => {
    if(buttons?.components != null) buttons = buttons.components;

    for(const button of buttons){
        button.setDisabled(false);
    }

    return buttons;
}