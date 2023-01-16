import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { UpdateCommentDto } from 'src/comment/dto/update-comment.dto';
import { Deliver } from './deliver.model';
import { CreateDeliverDto } from './dto/create-deliver.dto';
import { UpdateDeliverDto } from './dto/update-deliver.dto';

@Injectable()
export class DeliverService {
  constructor(
    @InjectModel(Deliver) private DeliverRepasitory: typeof Deliver,
  ) {}
  async create(createDeliverDto: CreateDeliverDto) {
    const newD = await this.DeliverRepasitory.create(createDeliverDto);
    return newD;
  }

  async findAll() {
    const newD = await this.DeliverRepasitory.findAll({
      include: { all: true },
    });
    return newD;
  }

  async findOne(id: number) {
    const newD = await this.DeliverRepasitory.findAll({
      where: { id },
      include: { all: true },
    });
    return newD;
  }

  async update(id: number, updateDeliverDto: UpdateDeliverDto) {
    const newD = await this.DeliverRepasitory.findByPk(id)
    if(!newD) {
      throw new HttpException('Id notogri',HttpStatus.NOT_FOUND)
    }
    return this.DeliverRepasitory.update(updateDeliverDto,{where:{id},returning:true})
  }

  async remove(id: number) {
    const D = await this.DeliverRepasitory.findByPk(id);
    if (!D) {
      console.log(D);
      throw new HttpException('Foydalunvchi topilmadi', HttpStatus.NOT_FOUND);
    }
    await this.DeliverRepasitory.destroy({ where: { id } });
    return D;
  }
}
