import { ApiProperty } from '@nestjs/swagger';
import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { Seed } from 'src/seed/seed.model';
import { Shop } from 'src/shop/shop.model';

interface Shop_SeedCreationAttrs {
  seed_id: number;
}

@Table({ tableName: 'shop_seed' })
export class Shop_Seed extends Model<Shop_Seed, Shop_SeedCreationAttrs> {
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

  @ApiProperty({ example: '1', description: 'shop_id' })
  @ForeignKey(()=>Shop)
  @Column({
    type: DataType.INTEGER,
  })
  shop_id: number;
  @BelongsTo(()=>Shop)
  shop:Shop
}
