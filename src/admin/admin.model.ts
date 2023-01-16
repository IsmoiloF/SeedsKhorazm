import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";
import {ApiProperty} from '@nestjs/swagger'

@Table({tableName:'Admin'})

export class Admin extends Model<Admin> {

    @ApiProperty({example:'1',description:'Unique Id'})
    @Column({
        type:DataType.INTEGER,
        unique:true,
        autoIncrement:true,
        primaryKey:true
    })
    id:number;

    @ApiProperty({example:'name1',description:'admin name'})
    @Column({
        type:DataType.STRING,
        allowNull:false
    })
    name:string;

    @ApiProperty({example:'login',description:'admin login '})
    @Column({
        type:DataType.STRING,
        allowNull:false
    })
    login:string;
    
    @ApiProperty({example:'hashed_password',description:'admin hashed_password '})
    @Column({
        type:DataType.STRING
    })
    hashed_password:string;

    @ApiProperty({example:'true',description:'admin active'})
    @Column({
        type:DataType.BOOLEAN,
        defaultValue:false
    })
    is_active:boolean;

    @ApiProperty({example:'false',description:'admin creator'})
    @Column({
        type:DataType.BOOLEAN,
        defaultValue:false
    })
    is_creator:boolean;

    @ApiProperty({example:'refresh_token',description:'hashed_refresh_token'})
    @Column({
        type:DataType.STRING
    })
    hashed_refresh_token:string;   
}