import { Module } from '@nestjs/common';
import { ThreadService } from './thread.service';
import { ThreadController } from './thread.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Thread } from './entities/thread.entity';
import { Board } from 'src/board/entities/board.entity';
@Module({
  imports: [SequelizeModule.forFeature([Thread, Board]),],
  controllers: [ThreadController],
  providers: [ThreadService]
})
export class ThreadModule {}
