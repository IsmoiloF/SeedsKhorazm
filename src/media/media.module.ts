import { Module } from '@nestjs/common';
import { MediaService } from './media.service';
import { MediaController } from './media.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { JwtModule } from '@nestjs/jwt';
import { Media } from './media.model';

@Module({
  imports:[SequelizeModule.forFeature([Media]), JwtModule.register({})],
  controllers: [MediaController],
  providers: [MediaService]
})
export class MediaModule {}
