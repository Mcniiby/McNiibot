const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let botmessage = args.join(" ");
    message.channel.send("<http://clickerheroes.wikia.com/wiki/" + botmessage + ">");

}

module.exports.help = {
    name: "wikia"
}