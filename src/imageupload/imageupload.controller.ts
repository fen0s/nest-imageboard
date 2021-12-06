import {
  Controller,
  UseInterceptors,
  Post,
  UploadedFile,
  BadRequestException
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { imageStorage } from './imageStorage.storage';
@Controller('api/imageupload')
export class ImageuploadController {
  @UseInterceptors(
    FileInterceptor('image', {
      storage: imageStorage,
      fileFilter: (req, file, cb) => {
        if (
          !file.originalname.endsWith('.jpg') &&
          !file.originalname.endsWith('.png')
        ) {
            return cb(new BadRequestException("Not an image uploaded"), false)
        }
        return cb(null, true)
      },
      limits: {files: 1,
    fileSize: 10 * 10 * 10 * 10 * 10 * 10 * 10} //10 mb
    }),
  )
  @Post()
  uploadFile(@UploadedFile() file: Express.Multer.File) {

    return { name: file.filename };
  }
}
