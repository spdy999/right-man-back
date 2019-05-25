import {
  Table,
  Model,
  Column,
  PrimaryKey,
  CreatedAt,
} from 'sequelize-typescript';

@Table
export class Author extends Model<Author> {
  @PrimaryKey
  @Column
  id: string;

  @CreatedAt
  created: Date;

  @Column
  idea: string;

  @Column
  description: string;
}
