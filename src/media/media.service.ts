import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateMediaDto } from './dto/create-media.dto';
import { UpdateMediaDto } from './dto/update-media.dto';
import { Media } from './media.model';

@Injectable()
export class MediaService {
  constructor(@InjectModel(Media) private MediaRepasitory: typeof Media) {}
  async create(createMediaDto: CreateMediaDto) {
    const newM = await this.MediaRepasitory.create(createMediaDto);
    return newM;
  }

  async findAll() {
    const newM = await this.MediaRepasitory.findAll({ include: { all: true } });
    return newM;
  }

  async findOne(id: number) {
    const newM = await this.MediaRepasitory.findAll({
      where: { id },
      include: { all: true },
    });
    return newM;
  }

  async update(id: number, updateMediaDto: UpdateMediaDto) {
    const newM = await this.MediaRepasitory.findByPk(id)
    if(!newM) {
      throw new HttpException('Id notogri',HttpStatus.NOT_FOUND)
    }
    return this.MediaRepasitory.update(updateMediaDto,{where:{id},returning:true})
  }

  async remove(id: number) {
    const D = await this.MediaRepasitory.findByPk(id);
    if (!D) {
      console.log(D);
      throw new HttpException('Foydalunvchi topilmadi', HttpStatus.NOT_FOUND);
    }
    await this.MediaRepasitory.destroy({ where: { id } });
    return D;
  }
}
