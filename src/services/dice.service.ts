import { string } from "zod";
import { NonValidDiceError } from "../utils/errors/nonValidDiceType";
import { diceTypesEnum } from "../utils/types/enums/diceTypes";
import { baseService } from "./base.service";
import { dice_number_equation_interface, dice_number_final_calculation, dice_operation_interface } from "../utils/types/interfaces/diceInterfaces";


interface cauculus_handle_interface{
    value:number,
    roll_resume:dice_operation_interface[]
}

export class dice_service extends baseService{
    public __service_name = "dice_service"

    public _separate_dice_string(raw_dice_text: string): dice_number_equation_interface {
        if (!raw_dice_text.toLowerCase().includes("d")) {
            throw new NonValidDiceError(raw_dice_text);
        }

        const numeric_string = raw_dice_text.slice(0, raw_dice_text.indexOf("d"));
        const dice_string = raw_dice_text.slice(raw_dice_text.indexOf("d"));

        // Extract the dice type (e.g., "d6" -> "6")
        const diceTypeMatch = dice_string.match(/^d(\d+)/i);
        if (!diceTypeMatch) {
            throw new NonValidDiceError(raw_dice_text);
        }

        // Match against valid enum values
        const diceTypeString = `d${diceTypeMatch[1]}`.toLowerCase();
        const matchedDiceType = this._getDiceTypeFromString(diceTypeString);

        return {
            dice: matchedDiceType as diceTypesEnum,
            number_of_times: Number(numeric_string),
            equation: dice_string,
        };
    }

    private _getDiceTypeFromString(diceString: string): diceTypesEnum {
        // Normalize to lowercase for case-insensitive matching
        const normalizedDice = diceString.toLowerCase();

        // Find the matching enum value
        const matchedDiceType = Object.values(diceTypesEnum).find(
            (type) => type === normalizedDice
        );

        if (!matchedDiceType) {
            throw new NonValidDiceError(diceString);
        }

        return matchedDiceType as diceTypesEnum;
    }

    private _handle_cauculus(ext:dice_number_equation_interface):cauculus_handle_interface{
        const dice_extract:dice_operation_interface[] = []
        // Extract the dice value from the equation (e.g., "d20" -> 20)
        const diceValueMatch = ext.equation.match(/d(\d+)/i);
        if (!diceValueMatch) {
            throw new NonValidDiceError(ext.equation);
        }

        const diceValue = Number(diceValueMatch[1]);
        let total = 0;

        // Roll the dice number_of_times
        for (let i = 0; i < ext.number_of_times; i++) {
            // Generate random number between 1 and diceValue
            const _random = Math.floor(Math.random() * diceValue) + 1
            total += _random;

            dice_extract.push({
                operation:`Dice Roll`,
                dice_roll:ext.dice,
                result:_random
            })
        }

        return {value:total, roll_resume:dice_extract};
    }

    public handleMethod(raw_dice_text:string):dice_number_final_calculation{
        const dice_separation = this._separate_dice_string(raw_dice_text);

        const _cauculus_result = this._handle_cauculus(dice_separation)

        return {
            dice:dice_separation.dice,
            equation:dice_separation.equation,
            number_of_times:dice_separation.number_of_times,
            dice_total_value:_cauculus_result.value,
            dice_rolL_resume:_cauculus_result.roll_resume,
            diceMath:""
        }
    }
}