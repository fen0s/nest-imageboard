import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './user.model';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User)
    private readonly userModel: typeof User,
    private readonly jwtService: JwtService,
  ) {}

  async validate(login: string, password: string): Promise<string> {
    let user: User | null = await this.userModel.findOne({
      where: { login: login, password: password },
    });

    if (!user) {
      throw new UnauthorizedException()
    }
    let token: string = this.jwtService.sign(user.id);
    return token;
    
    
  }
}
