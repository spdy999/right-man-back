import {
  Table,
  Model,
  Column,
  CreatedAt,
  DataType,
  BeforeCreate,
} from 'sequelize-typescript';
import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
import { UserResponseObject } from './user.dto';
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

  @BeforeCreate
  static async hashPassword(user: User) {
    user.password = await bcrypt.hash(user.password, 10);
  }

  toResponseObject(showToken: boolean = true): UserResponseObject {
    const { id, created, username, token } = this;
    const responseObj = { id, created, username, token };
    if (showToken) {
      responseObj.token = token;
    }
    return responseObj;
  }

  async comparePassword(attempt: string): Promise<boolean> {
    return bcrypt.compare(attempt, this.password);
  }

  private get token() {
    const { id, username } = this;
    return jwt.sign(
      {
        id,
        username,
      },
      process.env.JWT_SECRET || 'SECRET',
      { expiresIn: '7d' },
    );
  }
}
