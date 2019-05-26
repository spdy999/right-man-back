import {
  Controller,
  Get,
  Post,
  Body,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { IdeaService } from './idea.service';
import { IdeaDTO } from './idea.dto';
import { Idea } from 'dist/idea/idea.entity';

@Controller('idea')
export class IdeaController {
  constructor(private readonly ideaService: IdeaService) {}
  @Get()
  async showAllIdeas(): Promise<Idea[]> {
    const ideas = await this.ideaService.showAll();
    if (!ideas) {
      throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    }
    return ideas;
  }

  @Post()
  createIdea(@Body() data: IdeaDTO): Promise<Idea> {
    return this.ideaService.create(data);
  }
}
