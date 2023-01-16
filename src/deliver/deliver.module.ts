import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { JwtModule } from '@nestjs/jwt';
import { DeliverController } from './deliver.controller';
import { DeliverService } from './deliver.service';
import { Deliver } from './deliver.model';

@Module({
  imports:[SequelizeModule.forFeature([Deliver]),
  JwtModule.register({})],
  controllers: [DeliverController],
  providers: [DeliverService],
  exports:[DeliverService]
})
export class DeliverModule {}
