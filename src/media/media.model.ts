import { ApiProperty } from '@nestjs/swagger';
import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { Seed } from 'src/seed/seed.model';

interface MediaCreationAttrs {
  url: String;
}

@Table({ tableName: 'media' })
export class Media extends Model<Media, MediaCreationAttrs> {
  @ApiProperty({ example: '1', description: 'ID' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 'url', description: 'URL' })
  @Column({
    type: DataType.STRING,
  })
  url: String;

  
  @ApiProperty({ example: '1', description: 'seed_id' })
  @ForeignKey(()=>Seed)
  @Column({
    type: DataType.INTEGER,
  })
  seed_id: number;
  @BelongsTo(()=>Seed)
  seed:Seed
}
