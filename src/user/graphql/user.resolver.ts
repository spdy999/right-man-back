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
  user(@Args('email') email: string) {
    return this.userService.read(email);
  }

  @Query()
  @UseGuards(new AuthGuard())
  whoami(@Context('user') user) {
    const { email } = user;
    return this.userService.read(email);
  }

  @Mutation()
  login(@Args('email') email: string, @Args('password') password: string) {
    const user: UserDTO = { email, password };
    return this.userService.login(user);
  }

  @Mutation()
  register(@Args('email') email: string, @Args('password') password: string) {
    const user: UserDTO = { email, password };
    return this.userService.register(user);
  }

  // @ResolveProperty()
  // async ideas() {
  //   // const { id } = user;
  //   return await this.ideaService.showAll();
  // }
}
