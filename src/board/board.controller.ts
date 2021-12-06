import {
  Controller,
  Get,
  Post,
  Body,
  UseGuards,
  Param,
} from '@nestjs/common';
import { BoardService } from './board.service';
import { CreateBoardDto } from './dto/create-board.dto';

import { AuthGuard } from '@nestjs/passport';

@Controller('api/board')
export class BoardController {
  constructor(private readonly boardService: BoardService) {}
  @UseGuards(AuthGuard('jwt'))
  @Post('create')
  async create(@Body() createBoardDto: CreateBoardDto) {
    return await this.boardService.create(createBoardDto);
  }

  @Get('getAll')
  async findAll() {
    return await this.boardService.findAll();
  }

  @Get('get/:id')
  async findOne(@Param('id') id: string) {
    return await this.boardService.findOne(+id);
  }


  @Get('getThreads/:id')
  async getThreads(@Param('id') id: string) {
    return await this.boardService.getThreads(+id);
  }

  @UseGuards(AuthGuard('jwt'))
  @Post('remove/:id')
  async remove(@Param('id') id: string) {
    return await this.boardService.remove(+id);
  }

  @UseGuards(AuthGuard('jwt'))
  @Post('edit/:id')
  async edit(@Param('id') id: string, @Body() updateBoardDto: CreateBoardDto) {
    return await this.boardService.edit(+id, updateBoardDto);
  }
}
