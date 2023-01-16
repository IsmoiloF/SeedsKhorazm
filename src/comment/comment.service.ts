import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Comment } from './comment.model';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';

@Injectable()
export class CommentService {
  constructor(@InjectModel(Comment) private CommentRepasitory: typeof Comment) {}
  async create(createCommentDto: CreateCommentDto) {
    const newcomment = await this.CommentRepasitory.create(createCommentDto)
    return newcomment;
  }

  async findAll() {
    const newcomment = await this.CommentRepasitory.findAll({ include: { all: true } })
    return newcomment;
  }

  async findOne(id: number) {
    const newcomment = await this.CommentRepasitory.findAll({ where:{id} ,include: { all: true } })
    return newcomment;
  }

  async update(id: number, updateCommentDto: UpdateCommentDto) {
    const newcomment = await this.CommentRepasitory.findByPk(id)
    if(!newcomment) {
      throw new HttpException('Id notogri',HttpStatus.NOT_FOUND)
    }
    return this.CommentRepasitory.update(updateCommentDto,{where:{id},returning:true})
  }

  async  remove(id: number) {
    const cart = await this.CommentRepasitory.findByPk(id);
    if (!cart) {
      console.log(cart);
      throw new HttpException('Foydalunvchi topilmadi', HttpStatus.NOT_FOUND);
    }
    await this.CommentRepasitory.destroy({ where: { id } });
    return cart;
  }
}
