import { Module } from '@nestjs/common';
import { CommentService } from './comment.service';
import { CommentController } from './comment.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { JwtModule } from '@nestjs/jwt';
import { Comment } from './comment.model';

@Module({
  imports:[SequelizeModule.forFeature([ Comment]), JwtModule.register({})],
  controllers: [CommentController],
  providers: [CommentService]
})
export class CommentModule {}
