import {
  Table,
  Model,
  Column,
  PrimaryKey,
  CreatedAt,
  IsUUID,
} from 'sequelize-typescript';

@Table({ tableName: 'author' })
export class Author extends Model<Author> {
  @IsUUID(4)
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
