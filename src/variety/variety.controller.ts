import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { VarietyService } from './variety.service';
import { CreateVarietyDto } from './dto/create-variety.dto';
import { UpdateVarietyDto } from './dto/update-variety.dto';
import { ApiOperation } from '@nestjs/swagger';
import { adminGuard } from 'src/common/guards/admin.guard';

@Controller('variety')
export class VarietyController {
  constructor(private readonly varietyService: VarietyService) {}

  @ApiOperation({summary:"varietyni post qilish"})
  @UseGuards(adminGuard)
  @Post()
  create(@Body() createVarietyDto: CreateVarietyDto) {
    return this.varietyService.create(createVarietyDto);
  }

  @ApiOperation({summary:"varietyni get qilish"})
  @UseGuards(adminGuard)
  @Get()
  findAll() {
    return this.varietyService.findAll();
  }

  @ApiOperation({summary:"varietyni get qilish"})
  @UseGuards(adminGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.varietyService.findOne(+id);
  }

  @ApiOperation({summary:"varietyni o'zgartirish"})
  @UseGuards(adminGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVarietyDto: UpdateVarietyDto) {
    return this.varietyService.update(+id, updateVarietyDto);
  }

  @ApiOperation({summary:"varietyni o'chirish"})
  @UseGuards(adminGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.varietyService.remove(+id);
  }
}
