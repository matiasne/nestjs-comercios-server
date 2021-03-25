import { PartialType } from '@nestjs/mapped-types';
import { CreateCtaCorrienteDto } from './create-cta-corriente.dto';

export class UpdateCtaCorrienteDto extends PartialType(CreateCtaCorrienteDto) {}
