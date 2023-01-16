import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty } from "class-validator"

export class CreateDeliverDto {
    @ApiProperty({example:'1',description:'id of ticket'})
    @IsNotEmpty({message:"bo'sh bo'lmasligi kerak"})
    readonly user_id:number

    @ApiProperty({example:'poliz ekinlari',description:'type'})
    @IsNotEmpty({message:"bo'sh bo'lmasligi kerak"})
    readonly type:String

    @ApiProperty({example:'70000',description:'price'})
    @IsNotEmpty({message:"bo'sh bo'lmasligi kerak"})
    readonly price:String
}
