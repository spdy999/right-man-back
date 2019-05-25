import {
  Table,
  Model,
  Column,
  PrimaryKey,
  CreatedAt,
  IsUUID,
} from 'sequelize-typescript';

@Table({ tableName: 'idea' })
export class Idea extends Model<Idea> {
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
