import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateShopSeedDto } from './dto/create-shop_seed.dto';
import { UpdateShopSeedDto } from './dto/update-shop_seed.dto';
import { Shop_Seed } from './shoip_seed.model';

@Injectable()
export class ShopSeedService {
  constructor(@InjectModel(Shop_Seed) private ShopSRepasitory: typeof Shop_Seed) {}
  async create(createShopSeedDto: CreateShopSeedDto) {
    return await this.ShopSRepasitory.create(createShopSeedDto)
  }

  async findAll() {
    return await this.ShopSRepasitory.findAll({include:{all:true}})
  }

  async findOne(id: number) {
    return await this.ShopSRepasitory.findOne({where:{id},include:{all:true}})
  }

  async update(id: number, updateShopSeedDto: UpdateShopSeedDto) {
    const newSh = await this.ShopSRepasitory.findByPk(id)
    if(!newSh) {
      throw new HttpException('Id notogri',HttpStatus.NOT_FOUND)
    }
    return this.ShopSRepasitory.update(updateShopSeedDto,{where:{id},returning:true})
  }

  async remove(id: number) {
    const D = await this.ShopSRepasitory.findByPk(id);
    if (!D) {
      console.log(D);
      throw new HttpException('Foydalunvchi topilmadi', HttpStatus.NOT_FOUND);
    }
    await this.ShopSRepasitory.destroy({ where: { id } });
  }
}
