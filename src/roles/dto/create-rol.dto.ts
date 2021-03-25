import { IsNotEmpty } from "class-validator";

export class CreateRolDto {
    
    @IsNotEmpty()
    estado:string

    @IsNotEmpty()
    rol:string

    @IsNotEmpty()
    userId:string
}