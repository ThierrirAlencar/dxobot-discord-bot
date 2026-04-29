
import { Client, Events } from 'discord.js';
import { defineCommands } from '../core/handleCommands';

export const clientCheckInteractionEvent = async (_client:Client)=> {
    _client.on(Events.InteractionCreate, async interaction=>{
        if(!interaction.isChatInputCommand()){return;}

        const commands = await defineCommands()

        commands.map(e=>{
            if(e.name==interaction.commandName && e.handler){
                e.handler(interaction)
            }
        })
    })
}