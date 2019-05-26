import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { userProviders } from './user.provider';

@Module({
  controllers: [UserController],
  providers: [UserService, ...userProviders],
})
export class UserModule {}
