import {
  Table,
  Model,
  Column,
  CreatedAt,
  DataType,
} from 'sequelize-typescript';
// import * as bcrypt from 'bcryptjs';
import { Logger } from '@nestjs/common';

@Table({ tableName: 'user' })
export class User extends Model<User> {
  @Column({ primaryKey: true, autoIncrement: true })
  id: number;

  @CreatedAt
  created: Date;

  @Column({ type: DataType.TEXT, unique: true })
  username: string;

  @Column({ type: DataType.TEXT })
  password: string;
}

// User.beforeCreate(async (user: User, options) => {
//   try {
//     // const hash = await hashPassword(user.password);
//     // user.password = hash;
//     user.password = await bcrypt.hash(user.password, 10);
//   } catch (error) {
//     Logger.error(error);
//   }
// });

// TODO:implement toResponseObject() {} in the sequelize-typescript
