import {
  Table,
  Model,
  Column,
  CreatedAt,
  ForeignKey,
  BelongsTo,
  UpdatedAt,
} from 'sequelize-typescript';
import { User } from '../user/user.entity';

@Table({ tableName: 'idea' })
export class Idea extends Model<Idea> {
  @Column({ primaryKey: true, autoIncrement: true, unique: true })
  id: number;

  @CreatedAt
  created: Date;

  @Column
  idea: string;

  @Column
  description: string;

  @UpdatedAt
  updated: Date;

  @ForeignKey(() => User)
  @Column
  authorId: number;

  @BelongsTo(() => User)
  author: User;
}
