import { PartialType } from '@nestjs/mapped-types';
import { CreateShopSeedDto } from './create-shop_seed.dto';

export class UpdateShopSeedDto extends PartialType(CreateShopSeedDto) {}
