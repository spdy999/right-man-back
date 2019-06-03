import { ProviderType } from '../provider/providers.type';
import { PRODUCT_REPOSITORY } from './product.constant';
import { Product } from './product.entity';

export const productProviders: ProviderType[] = [
  {
    provide: PRODUCT_REPOSITORY,
    useValue: Product,
  },
];
