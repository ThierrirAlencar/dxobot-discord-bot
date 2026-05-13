import {command as PingCommand} from "../commands/ping.js" 
import {command as CommandType} from "../utils/types/command.type"
import {command as shutdownCommand} from "../commands/close.ts"
import {command as diceCommand} from "../commands/dice.ts"
import {command as coinflipCommand} from "../commands/coinflip.ts"

export async function defineCommands():Promise<CommandType[]>{
    const conlist:CommandType[] = [
        PingCommand,
        shutdownCommand,
        diceCommand,
        coinflipCommand
    ]

    conlist.map(e=>{
        console.log(`/=>${e.name} loaded ${e.description}`)
    })

    return conlist
}