import { Resolver, Query, Args, Mutation, Context } from '@nestjs/graphql';
import { UserService } from '../user.service';
import { UserDTO } from '../user.dto';
import { UseGuards, Logger } from '@nestjs/common';
import { AuthGuard } from '../../shared/auth.guard';

@Resolver('User')
export class UserResolver {
  constructor(private userService: UserService) {}

  @Query()
  users(@Args('page') page: number) {
    return this.userService.showAll();
  }

  @Query()
  user(@Args('username') username: string) {
    return this.userService.read(username);
  }

  // @Query()
  // @UseGuards(new AuthGuard())
  // whoami(@Context('user') user) {
  //   // Logger.error(user);
  //   const { username } = user;
  //   return this.userService.read(username);
  // }

  @Mutation()
  login(
    @Args('username') username: string,
    @Args('password') password: string,
  ) {
    const user: UserDTO = { username, password };
    return this.userService.login(user);
  }

  @Mutation()
  register(@Args() { username, password }) {
    const user: UserDTO = { username, password };
    return this.userService.register(user);
  }

  // @ResolveProperty()
  // async ideas() {
  //   // const { id } = user;
  //   return await this.ideaService.showAll();
  // }
}
