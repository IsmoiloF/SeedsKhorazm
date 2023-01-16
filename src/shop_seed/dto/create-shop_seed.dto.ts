import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class CreateShopSeedDto {
    @ApiProperty({example:'1',description:'shop_id'})
    @IsNotEmpty({message:"bo'sh bo'lmasligi kerak"})
    readonly shop_id:number

    @ApiProperty({example:'1',description:'seed_id'})
    @IsNotEmpty({message:"bo'sh bo'lmasligi kerak"})
    readonly seed_id:number
}
