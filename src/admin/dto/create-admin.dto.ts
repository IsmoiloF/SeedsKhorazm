import { ApiProperty } from '@nestjs/swagger';
import {IsString,IsNumber,IsOptional} from 'class-validator'
export class CreateAdminDto {
    @ApiProperty({example:'name1',description:'name admin'})
    @IsString({message:'name string bolishi kerak'})
    readonly name:string;
    @ApiProperty({example:'login1',description:'login email'})
    @IsString({message:'login string bolishi kerak'})
    readonly login:string;
    @ApiProperty({example:'password1',description:'password admin'})
    @IsString()
    readonly hashed_password:string;

    readonly is_active:boolean;

    readonly is_creator:boolean;

    readonly hashed_refresh_token:string;

}
