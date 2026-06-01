import 'dotenv/config'
import z from 'zod';


export const {CLIENT_ID,DISCORD_TOKEN, DEPLOY_LEVEL:APLICATION_DEPLOY_LEVEL} = z.object({
    DISCORD_TOKEN:z.string(),
    CLIENT_ID:z.string(),
    DEPLOY_LEVEL:z.enum(["dev","development","production","deploy"])
}).parse(process.env)