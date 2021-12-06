import { Module, OnModuleInit } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { User } from './user.model';
import { SequelizeModule, InjectModel } from '@nestjs/sequelize';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './strategies/jwt.strategy';
@Module({
  imports: [
    SequelizeModule.forFeature([User]),
    JwtModule.register({
      secret: 'test',
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
})
export class AuthModule implements OnModuleInit {
  constructor(
    @InjectModel(User)
    private readonly userModel: typeof User,
  ) {}
  async onModuleInit() {
    const user: User | null = await this.userModel.findOne({
      where: { login: 'admin' },
    });
    if (!user) {
      this.userModel.create({ login: 'admin', password: 'test' });
    }
  }
}
