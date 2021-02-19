import { PartialType } from '@nestjs/mapped-types';
import { CreateBrandseDto } from './create-brandse.dto';

export class UpdateBrandseDto extends PartialType(CreateBrandseDto) {}
