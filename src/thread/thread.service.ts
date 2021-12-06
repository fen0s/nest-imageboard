import { Injectable } from '@nestjs/common';
import { CreateThreadDto } from './dto/create-thread.dto';
import { Board } from 'src/board/entities/board.entity';
import { Thread } from "./entities/thread.entity"
import { InjectModel } from '@nestjs/sequelize';


@Injectable()
export class ThreadService {
  constructor(
    @InjectModel(Thread)
    private readonly threadModel: typeof Thread,
    @InjectModel(Board)
    private readonly boardModel: typeof Board
  ) {}
  async create(createThreadDto: CreateThreadDto) {
    let board: Board = await this.boardModel.findByPk(+createThreadDto.boardId)
    delete createThreadDto.boardId
    let thread: Thread = await board.$create("thread", createThreadDto)
    return thread
  }

  async findAll() {
    return await this.threadModel.findAll()
  }

  async findOne(id: number) {
    return await this.threadModel.findByPk(id)
  }

  async getReplies (id: number) {
    let thread: Thread = await this.threadModel.findByPk(id)
    return await thread.$get("replies")
  }

  async remove(id: number) {
    return await this.threadModel.destroy({where: {id: id}})
  }
}
