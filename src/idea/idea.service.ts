import { Injectable, Inject, Logger } from '@nestjs/common';
import { IDEA_REPOSITORY } from './idea.constant';
import { Idea } from './idea.entity';
import { IdeaDTO } from './idea.dto';
import { USER_REPOSITORY } from '../user/user.constant';
import { User } from '../user/user.entity';

@Injectable()
export class IdeaService {
  constructor(
    @Inject(IDEA_REPOSITORY)
    private ideaRepository: typeof Idea,
    @Inject(USER_REPOSITORY)
    private userRepository: typeof User,
  ) {}

  async showAll(): Promise<Idea[]> {
    const ideas = await this.ideaRepository.findAll<Idea>();
    return ideas;
  }

  async create(userId: string, data: IdeaDTO) {
    const user = await this.userRepository.findOne<User>({
      where: { id: userId },
    });
    const idea = await this.ideaRepository.create({
      ...data,
      authorId: user.id,
    });
    Logger.error(idea.author);
    // return { ...idea, author: idea.author.toResponseObject() };
    return idea;
  }
}
