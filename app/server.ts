import { Client, GatewayIntentBits, REST, Routes, Events} from 'discord.js'
import {DISCORD_TOKEN, CLIENT_ID} from "./core/env/index.js"
import {defineCommands} from "./core/handleCommands.js"
import { clientOnlineEvent } from './events/checkClientReady.event.js';
import { clientCheckInteractionEvent } from './events/interaction.event.js';


const rest = new REST({ version: '10' }).setToken(DISCORD_TOKEN);

export const client = new Client({
    intents:[
        GatewayIntentBits.Guilds
    ],
    rest:rest.options
})



try{    
    console.log('Started refreshing application (/) commands.');
    
    const commands = await defineCommands();
    
    await rest.put(Routes.applicationCommands(CLIENT_ID), { body: commands });
    
    await clientOnlineEvent(client)

    console.log('Successfully reloaded application (/) commands.');
    
    await clientCheckInteractionEvent(client)

    console.log("Successfully reading application (/) commands.")

}catch(err){
    console.log(err)
}

