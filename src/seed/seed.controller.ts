import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { SeedService } from './seed.service';
import { CreateSeedDto } from './dto/create-seed.dto';
import { UpdateSeedDto } from './dto/update-seed.dto';
import { ApiOperation } from '@nestjs/swagger';
import { adminGuard } from 'src/common/guards/admin.guard';

@Controller('seed')
export class SeedController {
  constructor(private readonly seedService: SeedService) {}

  @UseGuards(adminGuard)
  @ApiOperation({summary:"Seedni post qilish  "})
  @Post()
  create(@Body() createSeedDto: CreateSeedDto) {
    return this.seedService.create(createSeedDto);
  }

  @UseGuards(adminGuard)
  @ApiOperation({summary:"Seedni get qilish "})
  @Get()
  findAll() {
    return this.seedService.findAll();
  }

  @UseGuards(adminGuard)
  @ApiOperation({summary:"Seedni get qilish "})
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.seedService.findOne(+id);
  }

  @UseGuards(adminGuard)
  @ApiOperation({summary:"Seedni o'zgarirish "})
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSeedDto: UpdateSeedDto) {
    return this.seedService.update(+id, updateSeedDto);
  }

  @UseGuards(adminGuard)
  @ApiOperation({summary:"Seedni o'chirish "})
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.seedService.remove(+id);
  }
}
