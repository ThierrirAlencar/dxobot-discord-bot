import { client } from "../server";
import { Client, Events, GatewayIntentBits } from 'discord.js';


export const clientOnlineEvent = async(_client:Client)=>{ 
    _client.on(Events.ClientReady, readyClient => {
      console.log(`Logged in as ${readyClient.user.tag}!`);
    });
}