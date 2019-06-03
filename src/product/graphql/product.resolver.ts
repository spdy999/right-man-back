import { Resolver, Mutation, Args, Context } from '@nestjs/graphql';
import { ProductService } from '../product.service';
import { UseGuards, Logger } from '@nestjs/common';
import { AuthGuard } from '../../shared/auth.guard';

@Resolver('Product')
export class ProductResolver {
  constructor(private productService: ProductService) {}

  @Mutation()
  @UseGuards(new AuthGuard())
  async createProduct(@Args('name') name: string, @Context('user') user) {
    Logger.error('create product');
    Logger.error({ name, user });
    const product = await this.productService.create(user.id, { name });
    return product;
  }
}
