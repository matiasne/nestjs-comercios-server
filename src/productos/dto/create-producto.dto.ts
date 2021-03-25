import { Type } from "class-transformer";
import { IsArray, IsNotEmpty, ValidateNested } from "class-validator"
import { CreateCategoriaDto } from "src/categorias/dto/create-categoria.dto";
import { CreateCocinaDto } from "src/cocinas/dto/create-cocina.dto";
import { CreateGrupoOpcionesDto } from "src/grupo-opciones/dto/create-grupo-opcione.dto";

export class CreateProductoDto {

    @IsNotEmpty()
    nombre:string  
    
    barCode:string

    categoriasId:string[];


    cocinasId:string[];

    descripcion:string

    destacado:boolean

    enCarrito:boolean

    grupoOpcionesId:string[];

    precio:Number

    valorPor:Number

    unidad:string

    stock:Number

}
