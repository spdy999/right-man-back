import {
  Table,
  Model,
  Column,
  DataType,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { User } from '../user/user.entity';

@Table({ tableName: 'product' })
export class Product extends Model<Product> {
  @Column({ type: DataType.TEXT })
  name: string;

  @ForeignKey(() => User)
  @Column
  userId: number;

  @BelongsTo(() => User, {
    onDelete: 'CASCADE',
  })
  user: User;
}
