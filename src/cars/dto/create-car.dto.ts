/* eslint-disable prettier/prettier */
import { IsString, IsUUID} from "class-validator";
/* import { v4 as uuid } from "uuid"; */

export class CreateCarDto {
    
    @IsString()
    readonly brand: string;
    @IsString()
    readonly model: string

    
}