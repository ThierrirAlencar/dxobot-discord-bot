import { DISCORD_TOKEN } from "./src/core/env/index.js";
import { client } from "./src/server.js";


console.log("Running Bot...")
client.login(DISCORD_TOKEN)

