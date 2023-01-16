import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { MediaService } from './media.service';
import { CreateMediaDto } from './dto/create-media.dto';
import { UpdateMediaDto } from './dto/update-media.dto';
import { ApiOperation } from '@nestjs/swagger';
import { adminGuard } from 'src/common/guards/admin.guard';

@Controller('media')
export class MediaController {
  constructor(private readonly mediaService: MediaService) {}

  @UseGuards(adminGuard)
  @ApiOperation({summary:"Media O'post qilish "})
  @Post()
  create(@Body() createMediaDto: CreateMediaDto) {
    return this.mediaService.create(createMediaDto);
  }

  @UseGuards(adminGuard)
  @ApiOperation({summary:"Media get qilish "})
  @Get()
  findAll() {
    return this.mediaService.findAll();
  }

  @UseGuards(adminGuard)
  @ApiOperation({summary:"Media O'zgartirish "})
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mediaService.findOne(+id);
  }
  @UseGuards(adminGuard)
  @ApiOperation({summary:"Media O'chirish "})
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMediaDto: UpdateMediaDto) {
    return this.mediaService.update(+id, updateMediaDto);
  }

  @UseGuards(adminGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mediaService.remove(+id);
  }
}
