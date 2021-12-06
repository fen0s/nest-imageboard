import { Module } from '@nestjs/common';
import { BoardService } from './board.service';
import { BoardController } from './board.controller';
import { Board } from "./entities/board.entity"
import { SequelizeModule} from '@nestjs/sequelize';

@Module({

  imports: [SequelizeModule.forFeature([Board]),],
  controllers: [BoardController],
  providers: [BoardService]
})
export class BoardModule {}
