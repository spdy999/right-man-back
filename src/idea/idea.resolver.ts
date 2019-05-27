import { Resolver, Query, Args, ResolveProperty } from '@nestjs/graphql';
import { IdeaService } from './idea.service';

@Resolver('Idea')
export class IdeaResolver {
  constructor(private ideaService: IdeaService) {}

  @Query()
  @ResolveProperty()
  // ideas(@Args('page') page: number, @Args('newest') newest: boolean) {
  ideas() {
    return this.ideaService.showAll();
  }
}
