import { Module } from '@nestjs/common';
import { IdeaService } from './idea.service';
import { IdeaController } from './idea.controller';
import { ideaProviders } from './idea.providers';
import { DatabaseModule } from '../db/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [IdeaController],
  providers: [IdeaService, ...ideaProviders],
})
export class IdeaModule {}
