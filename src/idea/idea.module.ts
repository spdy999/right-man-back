import { Module } from '@nestjs/common';
import { IdeaService } from './idea.service';
import { IdeaController } from './idea.controller';
import { ideaProviders } from './idea.providers';
import { DatabaseModule } from '../db/database.module';
import { IdeaResolver } from './idea.resolver';
import { userProviders } from '../user/user.provider';

@Module({
  imports: [DatabaseModule],
  controllers: [IdeaController],
  // TODO: Fix verbose providers using
  providers: [IdeaService, ...ideaProviders, IdeaResolver, ...userProviders],
})
export class IdeaModule {}
