import { Module } from '@nestjs/common';
import {BrandController} from './brand.controller';
import {BrandService} from './brand.service';
import {PassportModule} from '@nestjs/passport';
import {MongooseModule} from '@nestjs/mongoose';
import {BrandSchema} from './brand.model';
import {ProductsSchema} from '../products/products.model';
// import {DealsSchema} from '../deals/deals.model';
// import { SubCategoryScema } from '../subcategory/subcategory.model';

@Module({
    imports: [
        PassportModule.register({defaultStrategy: 'jwt'}),
        MongooseModule.forFeature([{name: 'Brand ', schema: BrandSchema}, {name: 'Products', schema: ProductsSchema}, 
          
        ])
    ],
})
export class BrandModule {}
