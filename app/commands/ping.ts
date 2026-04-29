import { CacheType, ChatInputCommandInteraction, Interaction } from "discord.js";
import { command as CommandType } from "../utils/types/command.type";

export const command:CommandType = {
    name:"ping",
    description:"Replies with Pong!",
    handler:async (interaction:ChatInputCommandInteraction)=>{
        await interaction.reply("Pong!")
    }
}


