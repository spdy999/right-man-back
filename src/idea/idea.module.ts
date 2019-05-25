import { Module } from '@nestjs/common';
import { IdeaService } from './idea.service';

@Module({
  providers: [IdeaService],
})
export class IdeaModule {}
