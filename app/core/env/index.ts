import 'dotenv/config'
import z from 'zod';


export const {CLIENT_ID,DISCORD_TOKEN} = z.object({
    DISCORD_TOKEN:z.string(),
    CLIENT_ID:z.string()
}).parse(process.env)