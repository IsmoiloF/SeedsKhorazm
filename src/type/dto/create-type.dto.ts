import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class CreateTypeDto {
    @ApiProperty({example:'gvfdskj',description:'name'})
    @IsNotEmpty({message:"bo'sh bo'lmasligi kerak"})
    readonly name:String

}
