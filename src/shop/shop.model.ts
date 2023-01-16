import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface ShopCreationAttrs {
  location: String;
}

@Table({ tableName: 'shop' })
export class Shop extends Model<Shop, ShopCreationAttrs> {
  @ApiProperty({ example: '1', description: 'ID' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;
  
  @ApiProperty({ example: 'location', description: 'LOcation' })
  @Column({
    type: DataType.STRING,
  })
  location: String;

  @ApiProperty({ example: 'phone_number', description: 'phone_number' })
  @Column({
    type: DataType.STRING,
  })
  phone_number: String;

  @ApiProperty({ example: 'seller', description: 'seller' })
  @Column({
    type: DataType.STRING,
  })
  seller: String;
}
