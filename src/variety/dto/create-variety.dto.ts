import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateVarietyDto {
  @ApiProperty({ example: 'bhfdskbvh', description: 'name' })
  @IsNotEmpty({ message: "bo'sh bo'lmasligi kerak" })
  readonly name: String;
}
