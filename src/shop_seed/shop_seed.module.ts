import { Module } from '@nestjs/common';
import { ShopSeedService } from './shop_seed.service';
import { ShopSeedController } from './shop_seed.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { JwtModule } from '@nestjs/jwt';
import { Shop_Seed } from './shoip_seed.model';

@Module({
  imports:[SequelizeModule.forFeature([Shop_Seed]), JwtModule.register({})],
  controllers: [ShopSeedController],
  providers: [ShopSeedService]
})
export class ShopSeedModule {}
