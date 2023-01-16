import { ApiProperty } from '@nestjs/swagger';
import { Type } from '../type/type.model';
import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';

interface VCreationAttrs {
  name: String;
}

@Table({ tableName: 'variety' })
export class Variety extends Model<Variety, VCreationAttrs> {
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

  @ForeignKey(()=>Type)
  @Column({
    type: DataType.INTEGER,
  })
  type_id: number;
  @BelongsTo(()=>Type)
  type:Type
}
