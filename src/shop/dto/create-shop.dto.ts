import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateShopDto {
  @ApiProperty({ example: 'tashkent shaxri', description: 'location' })
  @IsNotEmpty({ message: "bo'sh bo'lmasligi kerak" })
  readonly lacation: String;

  @ApiProperty({ example: '99892432678', description: 'phone_number' })
  @IsNotEmpty({ message: "bo'sh bo'lmasligi kerak" })
  readonly phone_number: String;

  @ApiProperty({ example: 'Ismoilov shoxruh', description: 'seller' })
  @IsNotEmpty({ message: "bo'sh bo'lmasligi kerak" })
  readonly seller: String;
}
