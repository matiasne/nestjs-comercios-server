import { Type } from "class-transformer";
import { IsNotEmpty } from "class-validator";


export class TipoDto {
   
    habilitado: string
  
    total: number
}


export class CreateCajaDto {
    
    @IsNotEmpty()
    nombre:string

    @Type(() => TipoDto)
    credito: TipoDto
  
    @Type(() => TipoDto)
    debito: TipoDto
  
    @Type(() => TipoDto)
    efectivo: TipoDto
  
    estado: string

}
