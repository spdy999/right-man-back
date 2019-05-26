import { USER_REPOSITORY } from './user.constant';
import { User } from './user.entity';
import { ProviderType } from '../provider/providers.type';

export const userProviders: ProviderType[] = [
  {
    provide: USER_REPOSITORY,
    useValue: User,
  },
];
