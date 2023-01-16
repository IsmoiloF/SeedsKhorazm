import { BelongsTo, Column, DataType, ForeignKey, HasMany, HasOne, Model, Table } from "sequelize-typescript";
import {ApiProperty} from '@nestjs/swagger'


@Table({tableName:'customer'})

export class Customer extends Model<Customer>{

    @ApiProperty({example:'1',description:'Unique ID'})
    @Column({
        type:DataType.INTEGER,
        unique:true,
        autoIncrement:true,
        primaryKey:true
    })
    id:number;

    @ApiProperty({example:'Name1',description:'name of customer'})
    @Column({
        type:DataType.STRING,
        allowNull:false
    })
    first_name:string;

    @ApiProperty({example:'lastName1',description:'Lastname of customer'})
    @Column({
        type:DataType.STRING,
        allowNull:false
    })
    last_name:string;

    @ApiProperty({example:'+998 91 432 58 36',description:'phone number  of customer'})
    @Column({
        type:DataType.STRING
    })
    phone:string;

    @ApiProperty({example:'**********',description:'hashed password of customer'})
    @Column({
        type:DataType.STRING
    })
    hashed_password:string;

    @ApiProperty({example:'name@email.com',description:'email  of customer'})
    @Column({
        type:DataType.STRING
    })
    email:string;

    @ApiProperty({example:'**********',description:'hashed token of customer'})
    @Column({
        type:DataType.STRING
    })
    hashed_refresh_token:string;


}
