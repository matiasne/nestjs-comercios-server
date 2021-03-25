import { IsNotEmpty } from "class-validator";

export class CreateCocinaDto {

    @IsNotEmpty()
    nombre:string
    
}
