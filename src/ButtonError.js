module.exports = class ButtonError extends Error {
    /**
     * @param {String} message 
     * @param {String} header 
     */
    constructor(message, header) {
      if (typeof message != "string")
        throw new ButtonError(
          `Expected a string for 'message', recieved ${typeof message}`,
          "INVALID_CONSTRUCTOR_ARGUMENT"
        );
      if (typeof header != "string")
        throw new ButtonError(
          `Expected a string for 'header', recieved ${typeof header}`,
          "INVALID_CONSTRUCTOR_ARGUMENT"
        );
  
      super(message);
      this.name = `DiscordButtonError [${header}]`;
    }
  }

  module.exports.Errors = {
    "INVALID_ARG": "INVALID_ARG",
  }
  