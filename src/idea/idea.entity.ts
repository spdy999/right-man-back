import { Table, Model, Column, CreatedAt } from 'sequelize-typescript';

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
}
