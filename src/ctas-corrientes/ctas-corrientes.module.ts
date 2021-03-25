import { Module } from '@nestjs/common';
import { CtasCorrientesService } from './ctas-corrientes.service';
import { CtasCorrientesController } from './ctas-corrientes.controller';

@Module({
  controllers: [CtasCorrientesController],
  providers: [CtasCorrientesService]
})
export class CtasCorrientesModule {}
