import { Module } from '@nestjs/common';
import { ImageuploadController } from './imageupload.controller';

@Module({
  controllers: [ImageuploadController]
})
export class ImageuploadModule {}
