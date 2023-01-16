import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { JwtModule } from '@nestjs/jwt';
import { Seed } from './seed.model';

@Module({
  imports:[SequelizeModule.forFeature([Seed]), JwtModule.register({})],
  controllers: [SeedController],
  providers: [SeedService]
})
export class SeedModule {}
