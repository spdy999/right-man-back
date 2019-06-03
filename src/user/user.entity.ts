import {
  Table,
  Model,
  Column,
  CreatedAt,
  DataType,
  BeforeCreate,
  HasMany,
} from 'sequelize-typescript';
import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
import { UserResponseObject } from './user.dto';
import { Logger } from '@nestjs/common';
import { Product } from '../product/product.entity';

@Table({ tableName: 'user' })
export class User extends Model<User> {
  // @Column({ primaryKey: true, autoIncrement: true })
  // id: number;

  @CreatedAt
  created: Date;

  @Column({ type: DataType.TEXT, unique: true })
  email: string;

  @Column({ type: DataType.TEXT })
  password: string;

  // @HasMany(() => Idea, 'authorId')
  // ideas: Idea[];
  @HasMany(() => Product)
  products: Product[];

  @BeforeCreate
  static async hashPassword(user: User) {
    Logger.error(user);
    user.password = await bcrypt.hash(user.password, 10);
  }

  toResponseObject(showToken: boolean = true): UserResponseObject {
    const { id, created, email, token } = this;
    const responseObj: UserResponseObject = { id, created, email };
    if (showToken) {
      responseObj.token = token;
    }
    return responseObj;
  }

  async comparePassword(attempt: string): Promise<boolean> {
    return bcrypt.compare(attempt, this.password);
  }

  private get token() {
    const { id, email } = this;
    return jwt.sign(
      {
        id,
        email,
      },
      process.env.JWT_SECRET || 'SECRET',
      { expiresIn: '7d' },
    );
  }
}
