import {
  Injectable,
  CanActivate,
  ExecutionContext,
  HttpStatus,
} from "@nestjs/common";
import {
  HttpException,
  UnauthorizedException,
} from "@nestjs/common/exceptions";
import { JwtService } from "@nestjs/jwt";
import { InjectModel } from "@nestjs/sequelize";
import { Observable } from "rxjs";
import { Admin } from "src/admin/admin.model";
import { AdminService } from "src/admin/admin.service";

@Injectable()
export class isCreatorGuard implements CanActivate {
  constructor(
    private readonly jwtService: JwtService
  ) // @InjectModel(Admin) private readonly adminRepo: typeof Admin
  {}
  canActivate(
    context: ExecutionContext
  ): boolean | Promise<boolean> | Observable<boolean> {
    try {
      const req = context.switchToHttp().getRequest();
      const adminHeader = req.headers.authorization;
      const id = req.params.id;

      if (!adminHeader) {
        throw new HttpException("ERROR", 404);
      }
      const bearer = adminHeader.split(" ")[0];
      const token = adminHeader.split(" ")[1];
      // const adminn = this.adminRepo.findByPk(id)
      if (bearer !== "Bearer" || !token) {
        throw new UnauthorizedException({
          message: "YOU ARE NOT ADMIN",
        });
      }
      const admin = this.jwtService.verify(token, {
        publicKey: process.env.ACCESS_TOKEN_KEY,
      });
      if (admin.sub !== +id && admin.is_creator === false) {
        throw new HttpException("IT IS NOT YOUR ID!!", HttpStatus.UNAUTHORIZED);
      }
      if (admin.is_creator === false) {
        throw new HttpException("Admin creator emas", HttpStatus.FORBIDDEN);
      }
      return true;
    } catch (err) {
      throw new HttpException(err.message, HttpStatus.BAD_REQUEST);
    }
  }
}
