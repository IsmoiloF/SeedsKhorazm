import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty } from "class-validator"

export class CreateMediaDto {
    @ApiProperty({example:'bhfrewkjgy',description:'url'})
    @IsNotEmpty({message:"bo'sh bo'lmasligi kerak"})
    readonly url:String

    @ApiProperty({example:'1',description:'seed_id'})
    @IsNotEmpty({message:"bo'sh bo'lmasligi kerak"})
    readonly seed_id:number
}
