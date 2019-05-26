import { Module } from '@nestjs/common';
import { IdeaService } from './idea.service';
import { IdeaController } from './idea.controller';
import { ideaProviders } from './idea.providers';
import { DatabaseModule } from '../db/database.module';
import { IdeaResolver } from './idea.resolver';

@Module({
  imports: [DatabaseModule],
  controllers: [IdeaController],
  providers: [IdeaService, ...ideaProviders, IdeaResolver],
})
export class IdeaModule {}
