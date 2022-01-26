const Discord = require("discord.js");
const { ButtonRow } = require("..");
const ButtonError = require("../ButtonError");

module.exports.check = async (buttons) => {
    if(!buttons) throw new ButtonError(
        `buttons cannot be null`,
        ButtonError.Errors.INVALID_ARG
    );
    if(!Array.isArray(buttons)) throw new ButtonError(
        `buttons must be an array of MessageButtons`,
        ButtonError.Errors.INVALID_ARG
    );
    if(!(buttons instanceof [Discord.MessageButton])) throw new ButtonError(
        `buttons must be a MessageButton`,
        ButtonError.Errors.INVALID_ARG
    );
}
/**
 * Sets all the buttons in that row or array disabled or not disabled.
 * @param {Discord.MessageButton[]} buttons 
 * @returns {Discord.MessageButton[]}
 */
module.exports = (buttons, disabled=true) => {
    await this.check();

    for(const button of buttons){
        button.setDisabled(disabled);
    }

    return buttons;
}