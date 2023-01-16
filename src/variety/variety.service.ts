import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateVarietyDto } from './dto/create-variety.dto';
import { UpdateVarietyDto } from './dto/update-variety.dto';
import { Variety } from './variety.model';

@Injectable()
export class VarietyService {
  constructor(@InjectModel(Variety) private VRepository: typeof Variety) {}
  async create(createVarietyDto: CreateVarietyDto) {
    return await this.VRepository.create(createVarietyDto);
  }

  async findAll() {
    return await this.VRepository.findAll({include:{all:true}});

  }

  async findOne(id: number) {
    return await this.VRepository.findAll({where:{id}, include:{all:true}});
  }

  async update(id: number, updateVarietyDto: UpdateVarietyDto) {
    const newv = await this.VRepository.findByPk(id)
    if(!newv) {
      throw new HttpException('Id notogri',HttpStatus.NOT_FOUND)
    }
    return this.VRepository.update(updateVarietyDto,{where:{id},returning:true})
  }

  async remove(id: number) {
    const D = await this.VRepository.findByPk(id);
    if (!D) {
      console.log(D);
      throw new HttpException('Foydalunvchi topilmadi', HttpStatus.NOT_FOUND);
    }
    await this.VRepository.destroy({ where: { id } });
  }
}
