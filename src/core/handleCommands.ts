import {command as PingCommand} from "../commands/ping.js" 
import {command as CommandType} from "../utils/types/command.type"
import {command as shutdownCommand} from "../commands/close.ts"

export async function defineCommands():Promise<CommandType[]>{
    const conlist:CommandType[] = [
        PingCommand,
        shutdownCommand
    ]

    // conlist.map(e=>{
    //     console.log(`/=>${e.name} loaded ${e.description}`)
    // })

    return conlist
}