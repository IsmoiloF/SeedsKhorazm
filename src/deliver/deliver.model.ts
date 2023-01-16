import { ApiProperty } from '@nestjs/swagger';
import { STRING } from 'sequelize';
import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { Cart } from 'src/cart/cart.model';
import { Customer } from 'src/customer/customer.model';

interface DeliverCreationAttrs {
  type: String;
}

@Table({ tableName: 'deliver' })
export class Deliver extends Model<Deliver, DeliverCreationAttrs> {
  @ApiProperty({ example: '1', description: 'ID' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({example:'1',description:'cart_id'})
  @ForeignKey(()=>Cart)
  @Column({
    type: DataType.INTEGER,
  })
  cart_id: number;
  @BelongsTo(()=>Cart)
  cart:Cart

  @ApiProperty({example:'1',description:'user_id'})
  @ForeignKey(()=>Customer)
  @Column({
    type: DataType.INTEGER,
  })
  user_id: number;
  @BelongsTo(()=>Customer)
  customer:Customer

  @ApiProperty({example:'type',description:'Type'})
  @Column({
    type: DataType.STRING,
  })
  type: String;

  @Column({
    type: DataType.STRING,
  })
  price: String;
}
