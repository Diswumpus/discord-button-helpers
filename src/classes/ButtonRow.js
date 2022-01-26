const { MessageButton } = require("discord.js");
const ButtonError = require("../ButtonError");

class ButtonRow {
    /**
     * Creates a message/interaction button row.
     * @param {...MessageButton | MessageButton[]} components 
     */
    constructor(components){
        this.row = {
            type: 1,
            components: components || []
        };
    }

    /**
     * Adds a buttons to the row.
     * @param {...MessageButton | MessageButton[]} buttons 
     */
    addButtons(buttons){
        if(!buttons) throw new ButtonError(
            `button cannot be left null`,
            ButtonError.Errors.INVALID_ARG
        );
        if(!(buttons instanceof [MessageButton])) throw new ButtonError(
            `button must be a MessageButton array or MessageButtons`,
            ButtonError.Errors.INVALID_ARG
        );
        buttons.forEach(b => this.row.components.push(b));
        return this;
    }

    /**
     * Returns the row useful for adding more rows to your components.
     * @returns 
     */
    raw(){
        return this.row;
    }

    /**
     * Builds the buttons into an array to put in the `components` part of the object when you send a message.
     */
    build(){
        return [this.row];
    }
}

module.exports = ButtonRow;