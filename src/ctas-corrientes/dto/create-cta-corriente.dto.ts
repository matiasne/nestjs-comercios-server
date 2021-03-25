import { IsNotEmpty } from "class-validator";
import { CreateClienteDto } from "src/clientes/dto/create-cliente.dto";
import { CreateMovimientoDto } from "src/movimientos/dto/create-movimiento.dto";
import { CreateUserDto } from "src/users/dto/create-user.dto";

export class CreateCtaCorrienteDto {

    @IsNotEmpty()
    createdBy: CreateUserDto;

    nombre: string;

    clientes: CreateClienteDto[];

    coTitulares: CreateUserDto[];

    montoTotal: Number;

    movimientos: CreateMovimientoDto[]
}
