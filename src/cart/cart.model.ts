import { ApiProperty } from '@nestjs/swagger';
import { STRING } from 'sequelize';
import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { Customer } from 'src/customer/customer.model';
import { Seed } from 'src/seed/seed.model';

interface CartCreationAttrs {
  seed_id: number;
}

@Table({ tableName: 'cart' })
export class Cart extends Model<Cart, CartCreationAttrs> {

  @ApiProperty({example:'1',description:'ID'})
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;


  @ForeignKey(()=>Seed)
  @ApiProperty({example:'1',description:'seed_id'})
  @Column({
    type: DataType.INTEGER,
  })
  seed_id: number;
  @BelongsTo(()=>Seed)
  seed:Seed

  @ForeignKey(()=>Customer)
  @ApiProperty({example:'1',description:'user_id'})
  @Column({
    type: DataType.INTEGER,
  })
  user_id: number;
  @BelongsTo(()=>Customer)
  customer:Customer
}
