import { Table, Model, Column, CreatedAt } from 'sequelize-typescript';

@Table({ tableName: 'author' })
export class Author extends Model<Author> {
  // @IsUUID(4)
  // @PrimaryKey
  // @Column
  // id: string;

  @CreatedAt
  created: Date;

  @Column
  idea: string;

  @Column
  description: string;
}
