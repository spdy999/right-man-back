import { Test, TestingModule } from '@nestjs/testing';
import { IdeaController } from './idea.controller';
import { IdeaDTO } from './idea.dto';
import { IdeaService } from './idea.service';
import { Idea } from './idea.entity';
import { servicesVersion } from 'typescript';
import { AppModule } from '../app.module';

describe('Idea Controller', () => {
  let ideaService: IdeaService;
  let ideaController: IdeaController;
  let module: TestingModule;

  // jest.spyOn(ideaService, 'showAll').mockResolvedValue(result);
  // const spy = jest.spyOn(ideaService, 'showAll');
  beforeEach(async () => {
    module = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();
    ideaService = module.get<IdeaService>(IdeaService);
    ideaController = module.get<IdeaController>(IdeaController);
  });
  // beforeEach(() => {
  // });

  test('show all ideas', async () => {
    const result = [
      {
        id: 1,
        idea: 'idea',
        description: 'desc',
        created: new Date('2019-05-26T13:00:33.037Z'),
        updatedAt: new Date('2019-05-26T13:00:33.037Z'),
      },
      {
        id: 2,
        idea: 'idea',
        description: 'desc',
        created: new Date('2019-05-26T13:00:33.037Z'),
        updatedAt: new Date('2019-05-26T13:00:33.037Z'),
      },
    ];

    expect(await ideaController.showAllIdeas()).toBe(result);
  });
});
