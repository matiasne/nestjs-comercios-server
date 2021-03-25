import { Test, TestingModule } from '@nestjs/testing';
import { CtasCorrientesController } from './ctas-corrientes.controller';
import { CtasCorrientesService } from './ctas-corrientes.service';

describe('CtasCorrientesController', () => {
  let controller: CtasCorrientesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CtasCorrientesController],
      providers: [CtasCorrientesService],
    }).compile();

    controller = module.get<CtasCorrientesController>(CtasCorrientesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
