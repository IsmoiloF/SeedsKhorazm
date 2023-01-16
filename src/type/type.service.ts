import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateTypeDto } from './dto/create-type.dto';
import { UpdateTypeDto } from './dto/update-type.dto';
import { Type } from './type.model';

@Injectable()
export class TypeService {
  constructor(@InjectModel(Type) private TypeRepository: typeof Type) {}
  async create(createTypeDto: CreateTypeDto) {
    return await this.TypeRepository.create(createTypeDto);
  }

  async findAll() {
    return await this.TypeRepository.findAll({include:{all:true}});
  }

  async findOne(id: number) {
    return await this.TypeRepository.findOne({where:{id},include:{all:true}});
  }

  async update(id: number, updateTypeDto: UpdateTypeDto) {
    const newSh = await this.TypeRepository.findByPk(id)
    if(!newSh) {
      throw new HttpException('Id notogri',HttpStatus.NOT_FOUND)
    }
    return this.TypeRepository.update(updateTypeDto,{where:{id},returning:true})
  }

  async remove(id: number) {
    const D = await this.TypeRepository.findByPk(id);
    if (!D) {
      console.log(D);
      throw new HttpException('Foydalunvchi topilmadi', HttpStatus.NOT_FOUND);
    }
    await this.TypeRepository.destroy({ where: { id } });
  }
}
