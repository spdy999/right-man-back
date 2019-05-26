import { Injectable, Inject, Logger } from '@nestjs/common';
import { IDEA_REPOSITORY } from './idea.constant';
import { Idea } from './idea.entity';
import { IdeaDTO } from './idea.dto';

@Injectable()
export class IdeaService {
  constructor(
    @Inject(IDEA_REPOSITORY)
    private ideaRepository: typeof Idea,
  ) {}

  async showAll(): Promise<Idea[]> {
    const ideas = await this.ideaRepository.findAll<Idea>();
    return ideas;
  }

  async create(data: IdeaDTO): Promise<Idea> {
    return await this.ideaRepository.create(data);
  }
}
