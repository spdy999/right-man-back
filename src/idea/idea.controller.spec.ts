import { Test, TestingModule } from '@nestjs/testing';
import { IdeaController } from './idea.controller';
import { IdeaDTO } from './idea.dto';
import { IdeaService } from './idea.service';

describe('Idea Controller', () => {
  let ideaController: IdeaController;
  // let ideaService: IdeaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [IdeaController],
    }).compile();

    ideaController = module.get<IdeaController>(IdeaController);
    // ideaService = new IdeaService();
  });

  const result: IdeaDTO[] = [
    {
      idea: 'idea',
      description: 'description',
    },
  ];
  it('should be defined', () => {
    expect(ideaController.showAllIdeas).toBeDefined();
  });
  it('show all ideas', () => {
    // expect(ideaController.showAllIdeas).toBeDefined();
    // jest.spyOn(IdeaService, 'showAll').mockImplementation(() => result);
    expect(ideaController.showAllIdeas()).toBe(result);
  });
});
