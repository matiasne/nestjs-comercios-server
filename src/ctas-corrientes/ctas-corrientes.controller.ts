import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CtasCorrientesService } from './ctas-corrientes.service';
import { CreateCtaCorrienteDto } from './dto/create-cta-corriente.dto';
import { UpdateCtaCorrienteDto } from './dto/update-cta-corriente.dto';

@Controller('ctas-corrientes')
export class CtasCorrientesController {
  constructor(private readonly ctasCorrientesService: CtasCorrientesService) {}

  @Post()
  create(@Body() createCtaCorrienteDto: CreateCtaCorrienteDto) {
    return this.ctasCorrientesService.create(createCtaCorrienteDto);
  }

  @Get()
  findAll() {
    return this.ctasCorrientesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ctasCorrientesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCtaCorrienteDto: UpdateCtaCorrienteDto) {
    return this.ctasCorrientesService.update(+id, updateCtaCorrienteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ctasCorrientesService.remove(+id);
  }
}
