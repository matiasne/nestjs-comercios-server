import { IsNotEmpty } from "class-validator"
import { CreateDireccionDto } from "src/direcciones/dto/create-direccion.dto"

export class CreateClienteDto {

    @IsNotEmpty()
    nombre: string
    
    
    telefono: string    
    
    @IsNotEmpty()
    email: string
    

    estado: string
    
    fechaNacimiento: Date

    descripcion: string

    direccion: CreateDireccionDto

    dni: string
    
}
