import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateReplyDto } from './dto/create-reply.dto';

import { Reply } from "./entities/reply.entity"
import { Thread } from 'src/thread/entities/thread.entity';
import { InjectModel } from '@nestjs/sequelize';


@Injectable()
export class ReplyService {
  constructor(
    @InjectModel(Reply)
    private readonly replyModel: typeof Reply,
    @InjectModel(Thread)
    private readonly threadModel: typeof Thread,
  ) {}
  async create(createreplyDto: CreateReplyDto) {
    let thread: Thread = await this.threadModel.findByPk(+createreplyDto.threadId)
    delete createreplyDto.threadId
    let reply: Reply =  await thread.$create("reply", createreplyDto)
    return reply
    
  }

  async findAll() {
    return await this.replyModel.findAll()
  }

  async findOne(id: number) {
    return await this.replyModel.findByPk(id)
  }

  async remove(id: number) {
    return await this.replyModel.destroy({where: {id: id}})
  }

}
