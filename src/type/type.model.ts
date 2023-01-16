import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface TypeCreationAttrs {
  name: String;
}

@Table({ tableName: 'type' })
export class Type extends Model<Type, TypeCreationAttrs> {
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
}
