import { Sequelize } from 'sequelize-typescript';
import { Author } from '../author/author.entity';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize(
        'postgres://username:password@db:5432/rightman',
      );
      sequelize.addModels([Author]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
