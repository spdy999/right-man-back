import { IDEA_REPOSITORY } from './idea.constant';
import { Idea } from './idea.entity';

export const ideaProviders = [
  {
    provide: IDEA_REPOSITORY,
    useValue: Idea,
  },
];
