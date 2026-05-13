import { diceTypesEnum } from "../enums/diceTypes";

export interface dice_number_equation_interface {
    dice:diceTypesEnum, 
    number_of_times:number,
    equation:string
}

export interface dice_number_final_calculation extends dice_number_equation_interface{
    dice_total_value:number,
    diceMath:string | undefined,
    dice_rolL_resume:dice_operation_interface[]
}

export interface dice_operation_interface {
    operation:string,
    result:number,
    dice_roll:diceTypesEnum
}