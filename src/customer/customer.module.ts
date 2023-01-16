import { Module } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CustomerController } from './customer.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Customer } from './customer.model';
import { JwtModule } from '@nestjs/jwt';
import { Cart } from 'src/cart/cart.model';

@Module({
  imports:[SequelizeModule.forFeature([Customer]),
  JwtModule.register({})],
  controllers: [CustomerController],
  providers: [CustomerService],
  exports:[CustomerService]
})
export class CustomerModule {}
