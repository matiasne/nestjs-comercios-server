import { IsNotEmpty } from "class-validator";

export class CreateDireccionDto {

    @IsNotEmpty()
    pais: string;

    @IsNotEmpty()
    provincia: string;

    @IsNotEmpty()
    calleNombre: string;

    @IsNotEmpty()
    calleNumero: string;

    piso: string;

    puerta: string;

    latitud: string;

    longitud: string;
    
}