import { Module } from "@nestjs/common";
import { AdminService } from "./admin.service";
import { AdminController } from "./admin.controller";
import { InjectModel, SequelizeModule } from "@nestjs/sequelize";
import { Admin } from "./admin.model";
import { JwtModule, JwtService } from "@nestjs/jwt";
@Module({
  imports: [SequelizeModule.forFeature([Admin]), JwtModule],
  controllers: [AdminController],
  providers: [AdminService],
  exports: [AdminService, AdminModule],
})
export class AdminModule {}