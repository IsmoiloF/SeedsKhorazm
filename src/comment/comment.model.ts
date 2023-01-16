import { ApiProperty } from '@nestjs/swagger';
import { STRING } from 'sequelize';
import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { Customer } from 'src/customer/customer.model';
import { Seed } from 'src/seed/seed.model';

interface CommentCreationAttrs {
  comment: String;
}

@Table({ tableName: 'comment' })
export class Comment extends Model<Comment, CommentCreationAttrs> {
  @ApiProperty({ example: '1', description: 'ID' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;
  @ApiProperty({ example: '1', description: 'seed_id' })
  @ForeignKey(()=>Seed)
  @Column({
    type: DataType.INTEGER,
  })
  seed_id: number;
  @BelongsTo(()=>Seed)
  seed:Seed

  @ApiProperty({ example: '1', description: 'user_id' })
  @ForeignKey(()=>Customer)
  @Column({
    type: DataType.INTEGER,
  })
  user_id: number;
  @BelongsTo(()=>Customer)
  customer:Customer

  @ApiProperty({example:'comment',description:'comment'})
  @Column({
    type: DataType.STRING,
  })
  comment: String;
}
