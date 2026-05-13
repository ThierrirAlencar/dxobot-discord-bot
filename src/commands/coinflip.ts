import { CacheType, ChatInputCommandInteraction, Interaction } from "discord.js";
import { command as CommandType } from "../utils/types/command.type";

export const command:CommandType = {
    name:"coinflip",
    description:"Randomizes between 'Cara' and 'Coroa'!",
    handler:async(interaction:ChatInputCommandInteraction)=>{
        var _rand = Math.floor(Math.random()*2)
        console.log(_rand)
        var sigil = Number(_rand) == 1? 'Cara' : "Coroa"        
        await interaction.reply(`Hoje é festa para quem escolheu ${sigil} ! Você Ganhou!!`)
    }
}
