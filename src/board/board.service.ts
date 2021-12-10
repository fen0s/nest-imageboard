import { Injectable} from '@nestjs/common';
import { CreateBoardDto } from './dto/create-board.dto';
import { Board } from './entities/board.entity';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class BoardService {
  constructor(
    @InjectModel(Board)
    private readonly boardModel: typeof Board,
  ) {}

  async create(createBoardDto: CreateBoardDto) {
    return await this.boardModel.create(createBoardDto);
  }

  async findAll() {
    return await this.boardModel.findAll();
  }

  async findOne(id: number) {
    let result: null | Board = await this.boardModel.findByPk(id);
    return result;
  }

  async getThreads(id: number) {
    let board: Board = await this.boardModel.findByPk(id);
    let threads = await board.$get('threads');
    let threadsJSON = []
    for(let thread of threads){
      
      let replies = await thread.$get('replies')
      thread = await thread.toJSON()
      thread.replies = replies
      threadsJSON.push(thread)
      
    }
    return threadsJSON
    
  }

  async remove(id: number) {
    let result: null | number = await this.boardModel.destroy({
      where: { id: id },
    });
    return result;
  }

  async edit(id: number, updateBoardDto: CreateBoardDto) {
    let board: Board = await this.boardModel.findByPk(id);
    await board.set(updateBoardDto);
    await board.save();
    return board;
  }
}
