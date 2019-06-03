import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { productProviders } from './product.provider';
import { ProductResolver } from './graphql/product.resolver';

@Module({
  providers: [ProductService, ...productProviders, ProductResolver],
  controllers: [ProductController],
})
export class ProductModule {}
