import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ShopSeedService } from './shop_seed.service';
import { CreateShopSeedDto } from './dto/create-shop_seed.dto';
import { UpdateShopSeedDto } from './dto/update-shop_seed.dto';
import { ApiOperation } from '@nestjs/swagger';
import { adminGuard } from 'src/common/guards/admin.guard';

@Controller('shop-seed')
export class ShopSeedController {
  constructor(private readonly shopSeedService: ShopSeedService) {}

  @UseGuards(adminGuard)
  @ApiOperation({summary:"Shop_seed post qilish "})
  @Post()
  create(@Body() createShopSeedDto: CreateShopSeedDto) {
    return this.shopSeedService.create(createShopSeedDto);
  }


  @ApiOperation({summary:"Shop_seed get qilish "})
  @UseGuards(adminGuard)
  @Get()
  findAll() {
    return this.shopSeedService.findAll();
  }

  @ApiOperation({summary:"Shop_seed get qilish "})
  @UseGuards(adminGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.shopSeedService.findOne(+id);
  }

  @ApiOperation({summary:"Shop_seed o'zgartirish"})
  @UseGuards(adminGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateShopSeedDto: UpdateShopSeedDto) {
    return this.shopSeedService.update(+id, updateShopSeedDto);
  }

  @ApiOperation({summary:"Shop_seed o'chirish"})
  @UseGuards(adminGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.shopSeedService.remove(+id);
  }
}
