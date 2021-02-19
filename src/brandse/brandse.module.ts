import { Module } from '@nestjs/common';
import { BrandseService } from './brandse.service';
import { BrandseController } from './brandse.controller';

@Module({
  controllers: [BrandseController],
  providers: [BrandseService]
})
export class BrandseModule {}
