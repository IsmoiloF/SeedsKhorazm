import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty } from "class-validator"

export class CreateCartDto {

    @ApiProperty({example:'1',description:'seed_id'})
    @IsNotEmpty({message:"bo'sh bo'lmasligi kerak"})
    readonly seed_id:number

    @ApiProperty({example:'1',description:'user_id'})
    @IsNotEmpty({message:"bo'sh bo'lmasligi kerak"})
    readonly user_id:number
}
