import { Test, TestingModule } from '@nestjs/testing';
import { BrandseController } from './brandse.controller';
import { BrandseService } from './brandse.service';

describe('BrandseController', () => {
  let controller: BrandseController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BrandseController],
      providers: [BrandseService],
    }).compile();

    controller = module.get<BrandseController>(BrandseController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
