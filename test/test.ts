import { dice_service } from "../src/services/dice.service";



const _dice_service = new dice_service()
const a = _dice_service.handleMethod("20d20 +20 Unsafe");

console.log(a)