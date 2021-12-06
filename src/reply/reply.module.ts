import { Module } from '@nestjs/common';
import { ReplyService } from './reply.service';
import { ReplyController } from './reply.controller';
import { Reply } from "./entities/reply.entity"
import { SequelizeModule } from '@nestjs/sequelize';
import { Thread } from 'src/thread/entities/thread.entity';

@Module({
  imports: [SequelizeModule.forFeature([Reply, Thread]), ],
  controllers: [ReplyController],
  providers: [ReplyService]
})
export class ReplyModule {}
