import { CacheType, ChatInputCommandInteraction, Interaction } from "discord.js";
import { command as CommandType } from "../utils/types/command.type";
import { execSync } from "child_process";
import { Ping } from "../utils/functions/pingNet";


export const command:CommandType = {
    name:"ping",
    description:"Replies with Pong!",
    handler:async (interaction:ChatInputCommandInteraction)=>{
        const _ping = await Ping("google.com")
        // const result_google = Number(_ping) <=0 ? "Não está online! 🥵" :"Está online! 🚀"
        const result_minecraft_server = Number(await Ping("track-calendar.gl.joinmc.link")) <= 0 ?
            "O sever não está online! 🔎..." :
            "O server está online! 🔎 ..."
        const message = await interaction.reply(`Pong!
            \n **| Armario Server** ${result_minecraft_server} -> ${_ping}
            `)
    }
}


