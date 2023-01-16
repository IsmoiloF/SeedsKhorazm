import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty } from "class-validator"

export class CreateCommentDto {
    @ApiProperty({example:'1',description:'id of ticket'})
    @IsNotEmpty({message:"bo'sh bo'lmasligi kerak"})
    readonly seed_id:number

    @ApiProperty({example:'1',description:'id of customer'})
    @IsNotEmpty({message:"bo'sh bo'lmasligi kerak"})
    readonly user_id:number

    @ApiProperty({example:'',description:'comment'})
    @IsNotEmpty({message:"bo'sh bo'lmasligi kerak"})
    readonly comment:String
}
