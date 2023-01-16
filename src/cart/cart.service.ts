import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Cart } from './cart.model';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';

@Injectable()
export class CartService {
  constructor(@InjectModel(Cart) private CartRepasitory: typeof Cart) {}
  async create(createCartDto: CreateCartDto) {
    const newcart = await this.CartRepasitory.create(createCartDto);
    return newcart;
  }

  async findAll() {
    const cart = await this.CartRepasitory.findAll({ include: { all: true } });
    return cart;
  }

  async findOne(id: number) {
    const cart = await this.CartRepasitory.findOne({
      where: { id },
      include: { all: true },
    });
    return cart;
  }

  async update(id:number,updatecartDto: UpdateCartDto) {
    const cart = await this.CartRepasitory.findByPk(id)
    if(!cart) {
      throw new HttpException('Id notogri',HttpStatus.NOT_FOUND)
    }
    return this.CartRepasitory.update(updatecartDto,{where:{id},returning:true})
  }

  async remove(id: number) {
    const cart = await this.CartRepasitory.findByPk(id);
    if (!cart) {
      console.log(cart);
      throw new HttpException('Foydalunvchi topilmadi', HttpStatus.NOT_FOUND);
    }
    await this.CartRepasitory.destroy({ where: { id } });
    return cart;
  }
}
