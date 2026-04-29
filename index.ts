import { DISCORD_TOKEN } from "./app/core/env/index.js";
import { client } from "./app/server.js";

try{
    console.log("Running Bot...")
    client.login(DISCORD_TOKEN)
}catch(err){
    console.error(err)
}
