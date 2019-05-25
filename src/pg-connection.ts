import { Sequelize } from 'sequelize';

export const dbConnection = () => {
  const sequelize = new Sequelize(
    'postgres://username:password@db:5432/rightman',
  );

  sequelize
    .authenticate()
    .then(() => {
      console.log('Connection has been established successfully.');
    })
    .catch((err: any) => {
      console.error('Unable to connect to the database:', err);
    });
};
