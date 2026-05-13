import { extend } from "zod/mini";


export class NonValidDiceError extends Error{
    constructor(dice_text:string){
        super(`Non-valid dice type called. Ext:${dice_text}`)
    }
}