import {
  Table,
  Model,
  Column,
  PrimaryKey,
  CreatedAt,
  AutoIncrement,
} from 'sequelize-typescript';

@Table({ tableName: 'idea' })
export class Idea extends Model<Idea> {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @CreatedAt
  created: Date;

  @Column
  idea: string;

  @Column
  description: string;
}
