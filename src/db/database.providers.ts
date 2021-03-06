import { Sequelize } from 'sequelize-typescript';
import { Idea } from '../idea/idea.entity';
import { User } from '../user/user.entity';
import { Product } from '../product/product.entity';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize(
        process.env.DATABASE_URL ||
          'postgres://username:password@db:5432/rightman',
      );
      sequelize.addModels([Idea, User, Product]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
