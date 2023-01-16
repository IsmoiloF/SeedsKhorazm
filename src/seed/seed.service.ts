import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateSeedDto } from './dto/create-seed.dto';
import { UpdateSeedDto } from './dto/update-seed.dto';
import { Seed } from './seed.model';

@Injectable()
export class SeedService {
  constructor(@InjectModel(Seed) private SeedRepasitory: typeof Seed) {}
  async create(createSeedDto: CreateSeedDto) {
    const newS = await this.SeedRepasitory.create(createSeedDto);
    return newS;
  }

  async findAll() {
    const newS = await this.SeedRepasitory.findAll({ include: { all: true } });
    return newS;
  }

  async findOne(id: number) {
    const newS = await this.SeedRepasitory.findAll({
      where: { id },
      include: { all: true },
    });
    return newS;
  }

  async update(id: number, updateSeedDto: UpdateSeedDto) {
    const newM = await this.SeedRepasitory.findByPk(id)
    if(!newM) {
      throw new HttpException('Id notogri',HttpStatus.NOT_FOUND)
    }
    return this.SeedRepasitory.update(updateSeedDto,{where:{id},returning:true})
  }

  async remove(id: number) {
    const D = await this.SeedRepasitory.findByPk(id);
    if (!D) {
      console.log(D);
      throw new HttpException('Foydalunvchi topilmadi', HttpStatus.NOT_FOUND);
    }
    await this.SeedRepasitory.destroy({ where: { id } });
    return D;
  }
}
