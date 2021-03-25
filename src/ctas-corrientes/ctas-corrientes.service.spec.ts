import { Test, TestingModule } from '@nestjs/testing';
import { CtasCorrientesService } from './ctas-corrientes.service';

describe('CtasCorrientesService', () => {
  let service: CtasCorrientesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CtasCorrientesService],
    }).compile();

    service = module.get<CtasCorrientesService>(CtasCorrientesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
