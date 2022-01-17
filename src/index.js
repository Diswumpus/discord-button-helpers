//Require files
const { disabled, undo } = require("./functions/setAll");
const createLinkButton = require("./functions/createLinkButton");
const createButton = require("./functions/createButton");

//Export all files
module.exports = {
    disableAllButtons: disabled,
    unDisableAllButtons: undo,
    createButton,
    createLinkButton
};