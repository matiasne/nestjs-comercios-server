import { PartialType } from '@nestjs/mapped-types';
import { CreateGrupoOpcionesDto } from './create-grupo-opcione.dto';

export class UpdateGrupoOpcionesDto extends PartialType(CreateGrupoOpcionesDto) {}
