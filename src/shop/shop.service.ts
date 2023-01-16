import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateShopDto } from './dto/create-shop.dto';
import { UpdateShopDto } from './dto/update-shop.dto';
import { Shop } from './shop.model';

@Injectable()
export class ShopService {
  constructor(@InjectModel(Shop) private ShopRepasitory: typeof Shop) {}
  async create(createShopDto: CreateShopDto) {
    return await this.ShopRepasitory.create(createShopDto)
  }

  async findAll() {
    return await this.ShopRepasitory.findAll({include:{all:true}})
  }

  async findOne(id: number) {
    return await this.ShopRepasitory.findOne({where:{id} ,include:{all:true}})
  }

  async update(id: number, updateShopDto: UpdateShopDto) {
    const newSh = await this.ShopRepasitory.findByPk(id)
    if(!newSh) {
      throw new HttpException('Id notogri',HttpStatus.NOT_FOUND)
    }
    return this.ShopRepasitory.update(updateShopDto,{where:{id},returning:true})
  }

  async remove(id: number) {
    const D = await this.ShopRepasitory.findByPk(id);
    if (!D) {
      console.log(D);
      throw new HttpException('Foydalunvchi topilmadi', HttpStatus.NOT_FOUND);
    }
    await this.ShopRepasitory.destroy({ where: { id } });
    return D;
  }
}
