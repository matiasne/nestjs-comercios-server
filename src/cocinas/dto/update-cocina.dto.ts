import { PartialType } from '@nestjs/mapped-types';
import { CreateCocinaDto } from './create-cocina.dto';

export class UpdateCocinaDto extends PartialType(CreateCocinaDto) {}
