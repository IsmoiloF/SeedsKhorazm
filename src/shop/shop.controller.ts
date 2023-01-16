import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ShopService } from './shop.service';
import { CreateShopDto } from './dto/create-shop.dto';
import { UpdateShopDto } from './dto/update-shop.dto';
import { ApiOperation } from '@nestjs/swagger';
import { adminGuard } from 'src/common/guards/admin.guard';

@Controller('shop')
export class ShopController {
  constructor(private readonly shopService: ShopService) {}

  @UseGuards(adminGuard)
  @ApiOperation({summary:"Shopni post qilish "})
  @Post()
  create(@Body() createShopDto: CreateShopDto) {
    return this.shopService.create(createShopDto);
  }

  @UseGuards(adminGuard)
  @ApiOperation({summary:"Shopni get qilish "})
  @Get()
  findAll() {
    return this.shopService.findAll();
  }

  @UseGuards(adminGuard)
  @ApiOperation({summary:"Shopni get qilish "})
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.shopService.findOne(+id);
  }

  @UseGuards(adminGuard)
  @ApiOperation({summary:"Shopni o'zgartirish "})
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateShopDto: UpdateShopDto) {
    return this.shopService.update(+id, updateShopDto);
  }

  @UseGuards(adminGuard)
  @ApiOperation({summary:"Shopni o'chirish"})
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.shopService.remove(+id);
  }
}
