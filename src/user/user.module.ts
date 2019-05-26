import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { userProviders } from './user.provider';
import { UserResolver } from './graphql/user.resolver';

@Module({
  controllers: [UserController],
  providers: [UserService, ...userProviders, UserResolver],
})
export class UserModule {}
