import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { TypeService } from './type.service';
import { CreateTypeDto } from './dto/create-type.dto';
import { UpdateTypeDto } from './dto/update-type.dto';
import { ApiOperation } from '@nestjs/swagger';
import { adminGuard } from 'src/common/guards/admin.guard';

@Controller('type')
export class TypeController {
  constructor(private readonly typeService: TypeService) {}

  @ApiOperation({summary:"typeni post qilish"})
  @UseGuards(adminGuard)
  @Post()
  create(@Body() createTypeDto: CreateTypeDto) {
    return this.typeService.create(createTypeDto);
  }

  @ApiOperation({summary:"typeni get qilish"})
  @UseGuards(adminGuard)
  @Get()
  findAll() {
    return this.typeService.findAll();
  }

  @ApiOperation({summary:"typeni get qilish"})
  @UseGuards(adminGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.typeService.findOne(+id);
  }

  @ApiOperation({summary:"typeni o'zgartirish"})
  @UseGuards(adminGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTypeDto: UpdateTypeDto) {
    return this.typeService.update(+id, updateTypeDto);
  }

  @ApiOperation({summary:"typeni o'chirish"})
  @UseGuards(adminGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.typeService.remove(+id);
  }
}
