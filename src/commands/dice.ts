import { ChatInputCommandInteraction } from "discord.js";
import { command as CommandType } from "../utils/types/command.type";
import { dice_service } from "../services/dice.service";

export const command:CommandType = {
    name:"dice",
    description:"Replies a random dice roll related to the input params",
    handler:async (interaction:ChatInputCommandInteraction)=>{
        var dice = 'd20'
        const dice_option = interaction.options.get('dice', false);
        if(dice_option)dice==dice_option.value
        
        try{
            const service = new dice_service()

            const _dice_result = service.handleMethod(dice)

            const resume_string = `
                Dice Result ${_dice_result.dice_total_value} -> Roll Resume ${_dice_result.dice_rolL_resume.forEach(e=>{return `${e.dice_roll} -> ${e.operation} = ${e.result}`})}`
            interaction.reply(resume_string)
        }catch(err){
            interaction.reply("Erro na resposta!")
        }

    }
}

