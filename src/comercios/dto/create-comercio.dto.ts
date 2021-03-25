import { Prop } from "@nestjs/mongoose";
import { Type } from "class-transformer";
import { IsArray, IsNotEmpty, IsObject, IsString, ValidateNested } from "class-validator";
import { CreateCajaDto } from "src/cajas/dto/caja.dto";
import { CreateCategoriaDto } from "src/categorias/dto/create-categoria.dto";
import { CreateClienteDto } from "src/clientes/dto/create-cliente.dto";
import { CreateCocinaDto } from "src/cocinas/dto/create-cocina.dto";
import { CreateCtaCorrienteDto } from "src/ctas-corrientes/dto/create-cta-corriente.dto";
import { CreateDireccionDto } from "src/direcciones/dto/create-direccion.dto";
import { CreateGrupoOpcionesDto } from "src/grupo-opciones/dto/create-grupo-opcione.dto";
import { CreateMesaDto } from "src/mesas/dto/create-mesa.dto";
import { CreateProductoDto } from "src/productos/dto/create-producto.dto";
import { CreateRolDto } from "src/roles/dto/create-rol.dto"; 
import { Rol } from "src/roles/schema/rol.schema";
import { User } from "src/users/schemas/user.schema";

export class CreateComercioDto {

    @IsNotEmpty()
    nombre:string

    @IsNotEmpty()
    @ValidateNested()
    @Type(() => CreateDireccionDto)
    public direccion: CreateDireccionDto;


    @IsArray()
    @IsNotEmpty()
    @ValidateNested({ each: true })
    @Type(() => CreateCajaDto)
    public cajas: CreateCajaDto;


    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CreateCategoriaDto)
    public categorias: CreateCategoriaDto[];

    /*@IsArray()
    @ValidateNested({ each: true })
    @Type(() => CreateClienteDto)
    clientes: CreateClienteDto[];*/

    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CreateCocinaDto)
    cocinas: CreateCocinaDto[];

    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CreateGrupoOpcionesDto)
    grupoOpciones: CreateGrupoOpcionesDto[];

    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CreateMesaDto)
    mesas: CreateMesaDto[];

  /*  @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CreateProductoDto)
    productos: CreateProductoDto[];*/

    
}
