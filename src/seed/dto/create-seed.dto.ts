import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty } from "class-validator"

export class CreateSeedDto {
    @ApiProperty({example:'tarvuz',description:'name'})
    @IsNotEmpty({message:"bo'sh bo'lmasligi kerak"})
    readonly name:String

    @ApiProperty({example:'qishki tarvuz',description:'description'})
    @IsNotEmpty({message:"bo'sh bo'lmasligi kerak"})
    readonly description:String

    @ApiProperty({example:'tarvuz rasmi',description:'photo'})
    @IsNotEmpty({message:"bo'sh bo'lmasligi kerak"})
    readonly photo:String

    @ApiProperty({example:'67890',description:'price'})
    @IsNotEmpty({message:"bo'sh bo'lmasligi kerak"})
    readonly price:String

    @ApiProperty({example:'1',description:'variety_id'})
    @IsNotEmpty({message:"bo'sh bo'lmasligi kerak"})
    readonly variety_id:number
}
