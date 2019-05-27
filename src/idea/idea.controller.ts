import {
  Controller,
  Get,
  Post,
  Body,
  HttpException,
  HttpStatus,
  UseGuards,
  UsePipes,
  ValidationPipe,
  Logger,
} from '@nestjs/common';
import { IdeaService } from './idea.service';
import { IdeaDTO } from './idea.dto';
import { Idea } from './idea.entity';
import { AuthGuard } from '../shared/auth.guard';
import { User } from '../user/user.decorator';
import { UserDTO } from '../user/user.dto';

interface ILogData {
  user: UserDTO;
  data: IdeaDTO;
  id: number;
}
@Controller('api/idea')
export class IdeaController {
  constructor(private readonly ideaService: IdeaService) {}
  private logData(options: ILogData) {
    Logger.error(`USER:${options.user}`);
    Logger.error(`USER:${options.data}`);
    Logger.error(`USER:${options.id}`);
  }

  @Get()
  async showAllIdeas(): Promise<Idea[]> {
    const ideas = await this.ideaService.showAll();
    if (!ideas) {
      throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    }
    return ideas;
  }

  @Post()
  @UseGuards(new AuthGuard())
  @UsePipes(new ValidationPipe())
  createIdea(@User('id') user, @Body() data: IdeaDTO): Promise<Idea> {
    return this.ideaService.create(user, data);
  }
}
