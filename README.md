# Discord (.js) Button Helpers
> Just a simple package that helps with Discord Buttons

## createButton
OPTION | TYPE | REQUIRED | DEFAULT | DESCRIPTION
--- | --- | --- | --- |---
`label` | String | false | None | The label of the button.
`emoji` | DiscordEmoji | false | None | The emoji of the button.
`disabled` | Boolean | false | `false` | If the button should be disabled/unusable.
`customId` | String | true | None | The developer set custom ID useful for handling the button responses.
`style` | [ButtonStyle](https://discordjs.guide/interactions/buttons.html#button-styles) (`PRIMARY`|`SECONDARY`|`SUCCESS`|`DANGER`) | false | `PRIMARY` | The style/color for the button.

### Example
```js
const Button = DiscordButtons.createButton({
    label: "Button",
    customId: "test_button_123"
});
```

## createLinkButton

## disableAllButtons

## unDisableAllButtons