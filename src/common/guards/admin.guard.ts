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
import { Observable } from "rxjs";

@Injectable()
export class adminGuard implements CanActivate {
  constructor(private readonly jwtService: JwtService) {}
  canActivate(
    context: ExecutionContext
  ): boolean | Promise<boolean> | Observable<boolean> {
    const req = context.switchToHttp().getRequest();
    const adminHeader = req.headers.authorization;
    
    const bearer = adminHeader.split(" ")[0];
    const token = adminHeader.split(" ")[1];
    if (bearer !== "Bearer" || !token) {
      throw new UnauthorizedException({
        message: "UNATUHROZIED ADMIN!",
      });
    }
    const admin = this.jwtService.verify(token, {
      publicKey: process.env.ACCESS_TOKEN_KEY,
    });
    if (admin.is_active === false) {
      throw new HttpException("ADMIN IS NOT ACTIVE", HttpStatus.FORBIDDEN);
    }
    return true;
  }
}
