import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AuthModule } from './auth/auth.module';
import { BoardModule } from './board/board.module';
import { ThreadModule } from './thread/thread.module';
import { ReplyModule } from './reply/reply.module';
import { ImageuploadModule } from './imageupload/imageupload.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
@Module({
  imports: [
    SequelizeModule.forRoot({
      autoLoadModels: true,
      synchronize: true,
      dialect: 'sqlite',
      storage: "./database.sqlite"
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'static'),
      exclude: ['/api*'],
    }),
    AuthModule,
    BoardModule,
    ThreadModule,
    ReplyModule,
    ImageuploadModule,

  ]
})
export class AppModule {}
