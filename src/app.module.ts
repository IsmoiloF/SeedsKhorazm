import { Module } from '@nestjs/common';
import { SeedService } from './seed/seed.service';
import { SeedController } from './seed/seed.controller';
import { SeedModule } from './seed/seed.module';
import { AdminModule } from './admin/admin.module';
import { CommentModule } from './comment/comment.module';
import { VarietyModule } from './variety/variety.module';
import { TypeModule } from './type/type.module';
import { DeliverModule } from './deliver/deliver.module';
import { ShopSeedModule } from './shop_seed/shop_seed.module';
import { CartModule } from './cart/cart.module';
import { MediaModule } from './media/media.module';
import { ShopModule } from './shop/shop.module';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { Seed } from './seed/seed.model';
import { Shop } from './shop/shop.model';
import { Media } from './media/media.model';
import { Cart } from './cart/cart.model';
import { Shop_Seed } from './shop_seed/shoip_seed.model';
import { Deliver } from './deliver/deliver.model';
import { Type } from './type/type.model';
import { Variety } from './variety/variety.model';
import { Comment } from './comment/comment.model';
import { Admin } from './admin/admin.model';
import { CustomerModule } from './customer/customer.module';
import { Customer } from './customer/customer.model';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`,
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      models: [
        Seed,
        Shop,
        Media,
        Cart,
        Customer,
        Shop_Seed,
        Deliver,
        Type,
        Variety,
        Comment,
        Admin,
      ],
      autoLoadModels: true,
      logging: false,
    }),
    SeedModule,
    ShopModule,
    MediaModule,
    CartModule,
    CustomerModule,
    ShopSeedModule,
    DeliverModule,
    TypeModule,
    VarietyModule,
    CommentModule,
    AdminModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
