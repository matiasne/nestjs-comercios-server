import { Injectable } from '@nestjs/common';
import { CreateCtaCorrienteDto } from './dto/create-cta-corriente.dto';
import { UpdateCtaCorrienteDto } from './dto/update-cta-corriente.dto';

@Injectable()
export class CtasCorrientesService {
  create(createCtaCorrienteDto: CreateCtaCorrienteDto) {
    return 'This action adds a new ctasCorriente';
  }

  findAll() {
    return `This action returns all ctasCorrientes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} ctasCorriente`;
  }

  update(id: number, updateCtaCorrienteDto: UpdateCtaCorrienteDto) {
    return `This action updates a #${id} ctasCorriente`;
  }

  remove(id: number) {
    return `This action removes a #${id} ctasCorriente`;
  }
}
