import { IDEA_REPOSITORY } from './idea.constant';
import { Idea } from './idea.entity';
import { ProviderType } from '../provider/providers.type';

export const ideaProviders: ProviderType[] = [
  {
    provide: IDEA_REPOSITORY,
    useValue: Idea,
  },
];
