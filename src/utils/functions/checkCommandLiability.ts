import { ChatInputCommandInteraction } from "discord.js";
import { command as CommandType } from "../types/command.type";


export function checkCommandLiability(command:CommandType, interaction:ChatInputCommandInteraction):Boolean{
    if (!command.handler) return false; //Se não possuir um handler
    if (!command.options && interaction.options) return false; //Se opções forem nescessárias, mas não houverem na interação
    if (!interaction.options && command.options) return false; //Se a interação possuir opções mas o evento não pedir
    return true; 
}