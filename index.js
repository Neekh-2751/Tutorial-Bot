const Discord = require('discord.js') //Discord.js API
const config = require('./config.json') //Config file (config.json)

const Client = new Discord.Client() //Variable that calls our bot

const token = config.token //Token of the bot

//Ready Event
Client.on('ready', ready => {
    console.log('The bot is ready and online!') //You can change the log to anything else you want
})

Client.login(token) //Logs into the bot
