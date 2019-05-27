import {
  Resolver,
  Query,
  Args,
  ResolveProperty,
  Parent,
} from '@nestjs/graphql';
import { UserService } from '../user.service';
import { IdeaService } from '../../idea/idea.service';

@Resolver('User')
export class UserResolver {
  constructor(
    private userService: UserService,
    private ideaService: IdeaService,
  ) {}
  @Query()
  users(@Args('page') page: number) {
    // return [{ id: 'id', username: 'username' }];
    return this.userService.showAll();
  }

  // @ResolveProperty()
  // async ideas() {
  //   // const { id } = user;
  //   return await this.ideaService.showAll();
  // }
}
