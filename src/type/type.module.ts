import { Module } from '@nestjs/common';
import { TypeService } from './type.service';
import { TypeController } from './type.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { JwtModule } from '@nestjs/jwt';
import { Type } from './type.model';

@Module({
  imports:[SequelizeModule.forFeature([Type]), JwtModule.register({})],
  controllers: [TypeController],
  providers: [TypeService]
})
export class TypeModule {}
