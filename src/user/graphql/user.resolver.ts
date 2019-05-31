import {
  Resolver,
  Query,
  Args,
  Mutation,
} from '@nestjs/graphql';
import { UserService } from '../user.service';
import { UserDTO } from '../user.dto';

@Resolver('User')
export class UserResolver {
  constructor(
    private userService: UserService,
  ) {}

  @Query()
  users(@Args('page') page: number) {
    return this.userService.showAll();
  }

  @Query()
  user(@Args('username') username: string) {
    return this.userService.read(username);
  }

  @Query()
  whoami() {
  // whoami(@Args('username') username: string) {
    return;
  }

  @Mutation()
  login(@Args('username') username: string, @Args('password') password: string) {
    const user: UserDTO = { username, password };
    return this.userService.login(user);
  }

  @Mutation()
  register(@Args() { username, password}) {
    const user: UserDTO = {username, password};
    return this.userService.register(user);
  }

  // @ResolveProperty()
  // async ideas() {
  //   // const { id } = user;
  //   return await this.ideaService.showAll();
  // }
}
