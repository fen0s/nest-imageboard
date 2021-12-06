import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { InjectModel } from '@nestjs/sequelize';
import { User } from '../user.model';


@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor( @InjectModel(User)
  private readonly userModel: typeof User) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: "test"
    });
  }

  async validate(payload: any) {
    
    return await this.userModel.findByPk(payload)
  }
}