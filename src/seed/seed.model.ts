import { ApiProperty } from '@nestjs/swagger';
import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { Variety } from 'src/variety/variety.model';

interface SeedCreationAttrs {
  name: String;
}

@Table({ tableName: 'seed' })
export class Seed extends Model<Seed, SeedCreationAttrs> {
  @ApiProperty({ example: '1', description: 'ID' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 'name', description: 'name' })
  @Column({
    type: DataType.STRING,
  })
  name: String;

  @ApiProperty({ example: 'description', description: 'Description' })
  @Column({
    type: DataType.STRING,
  })
  description: String;

  @ApiProperty({ example: 'photo', description: 'photo' })
  @Column({
    type: DataType.STRING,
  })
  photo: String;

  @ApiProperty({ example: 'price', description: 'Price' })
  @Column({
    type: DataType.STRING,
  })
  price: String;

  @ApiProperty({ example: '1', description: 'ID' })
  @ForeignKey(()=>Variety)
  @Column({
    type: DataType.INTEGER,
  })
  variety_id: number;
  @BelongsTo(()=>Variety)
  variety:Variety

}
