import { ApiProperty } from '@nestjs/swagger';
import { IsString,IsOptional,IsNumber} from 'class-validator'
export class CreateCustomerDto {
    @ApiProperty({example:'firstname1',description:'first_name of customer'})
    // @IsString({message:'first_name string bolishi kerak'})
    readonly first_name:string;
    @ApiProperty({example:'lastname1',description:'last_name of customer'})
    // @IsString({message:'last_name string bolishi kerak'})
    readonly last_name:string;
    @ApiProperty({example:'998914325836',description:'phone of customer'})
    @IsOptional()
    @IsString({message:'phone string bolishi kerak'})
    readonly phone:string;
    @ApiProperty({example:'password1',description:'password of customer'})
    @IsOptional()
    @IsString({message:'hashed_password string bolishi kerak'})
    readonly hashed_password:string;
    @ApiProperty({example:'email',description:'email of customer'})
    @IsOptional()
    @IsString({message:'email string bolishi kerak'})
    readonly email:string;
}
