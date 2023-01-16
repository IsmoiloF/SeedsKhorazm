import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { DeliverService } from './deliver.service';
import { CreateDeliverDto } from './dto/create-deliver.dto';
import { UpdateDeliverDto } from './dto/update-deliver.dto';

@Controller('deliver')
export class DeliverController {
  constructor(private readonly deliverService: DeliverService) {}

  @ApiOperation({summary:"Deliverni post qilish"})
  @Post()
  create(@Body() createDeliverDto: CreateDeliverDto) {
    return this.deliverService.create(createDeliverDto);
  }

  @ApiOperation({summary:"Deliverni get qilish"})
  @Get()
  findAll() {
    return this.deliverService.findAll();
  }

  @ApiOperation({summary:"Deliverni get qilish"})
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.deliverService.findOne(+id);
  }

  @ApiOperation({summary:"Deliverni O'zgartirish "})
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDeliverDto: UpdateDeliverDto) {
    return this.deliverService.update(+id, updateDeliverDto);
  }

  @ApiOperation({summary:"Deliverni O'chirish "})
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.deliverService.remove(+id);
  }
}
