import { Module } from '@nestjs/common';
import { VarietyService } from './variety.service';
import { VarietyController } from './variety.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { JwtModule } from '@nestjs/jwt';
import { Variety } from './variety.model';

@Module({
  imports:[SequelizeModule.forFeature([Variety]), JwtModule.register({})],
  controllers: [VarietyController],
  providers: [VarietyService]
})
export class VarietyModule {}
