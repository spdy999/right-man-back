import { Injectable, Inject, Logger } from '@nestjs/common';
import { Product } from './product.entity';
import { PRODUCT_REPOSITORY } from './product.constant';
import { ProductDTO, ProductRO } from './product.dto';

@Injectable()
export class ProductService {
  constructor(
    @Inject(PRODUCT_REPOSITORY) private productRepository: typeof Product,
  ) {}

  // create(userId: number, data: ProductDTO): void {
  async create(userId: number, data: ProductDTO): Promise<ProductRO> {
    Logger.error('create');
    const product = await this.productRepository.create({ userId, ...data });
    Logger.error(product);
    return product;
  }
  async delete(productId: string): Promise<boolean> {
    Logger.error('delete');
    try {
      const product = await this.productRepository.destroy({
        where: { id: productId },
      });
      Logger.error(product);
      return true;
    } catch (error) {
      Logger.error(error);
      return false;
    }
  }
}
