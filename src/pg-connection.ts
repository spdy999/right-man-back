import { Sequelize } from 'sequelize-typescript';

export const dbConnection = async () => {
  const sequelize = new Sequelize(
    process.env.DATABASE_URL || 'postgres://username:password@db:5432/rightman',
  );

  return await sequelize
    .authenticate()
    .then(() => {
      console.log('Connection has been established successfully.');
    })
    .catch((err: any) => {
      console.error('Unable to connect to the database:', err);
    });
};
