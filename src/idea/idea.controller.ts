import { Controller, Get, Post, Body } from '@nestjs/common';
import { IdeaService } from './idea.service';
import { IdeaDTO } from './idea.dto';
import { Idea } from 'dist/idea/idea.entity';

@Controller('idea')
export class IdeaController {
  constructor(private readonly ideaService: IdeaService) {}
  @Get()
  showAllIdeas(): Promise<Idea[]> {
    return this.ideaService.showAll();
  }

  @Post()
  createIdea(@Body() data: IdeaDTO): Promise<Idea> {
    return this.ideaService.create(data);
  }
}
