
import { Client, DiscordAPIError, Events } from 'discord.js';
import { defineCommands } from '../core/handleCommands';

export const clientCheckInteractionEvent = async (_client:Client)=> {
    _client.on(Events.InteractionCreate, async interaction=>{
        if(!interaction.isChatInputCommand()){return;}

        const command = (await defineCommands()).find(e=>e.name==interaction.commandName)
        
        if(!command) return; 

        try{
            if(command.handler){
                command.handler(interaction)
            }
        }catch(err){
            console.error(err)
            if(err instanceof DiscordAPIError){
                interaction.reply(`Error While returning. Sorry for our mistake!`)
            }
        }
    })
}