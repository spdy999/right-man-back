import { Sequelize } from 'sequelize-typescript';
import { Author } from '../author/author.entity';
import { Idea } from '../idea/idea.entity';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize(
        'postgres://username:password@db:5432/rightman',
      );
      sequelize.addModels([Author, Idea]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
