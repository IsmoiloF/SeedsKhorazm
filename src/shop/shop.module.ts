import { Module } from '@nestjs/common';
import { ShopService } from './shop.service';
import { ShopController } from './shop.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { JwtModule } from '@nestjs/jwt';
// import { Shop } from './entities/shop.entity';
import {Shop} from './shop.model'

@Module({
  imports:[SequelizeModule.forFeature([Shop]), JwtModule.register({})],
  controllers: [ShopController],
  providers: [ShopService]
})
export class ShopModule {}
