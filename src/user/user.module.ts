import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { userProviders } from './user.provider';
import { UserResolver } from './graphql/user.resolver';
import { IdeaService } from '../idea/idea.service';
import { ideaProviders } from '../idea/idea.providers';

@Module({
  controllers: [UserController],
  providers: [
    UserService,
    ...userProviders,
    UserResolver,
    IdeaService,
    ...ideaProviders,
  ],
})
export class UserModule {}
