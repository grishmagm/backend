import { Test, TestingModule } from '@nestjs/testing';
import { BrandseService } from './brandse.service';

describe('BrandseService', () => {
  let service: BrandseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BrandseService],
    }).compile();

    service = module.get<BrandseService>(BrandseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
