import { Controller, UseGuards, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ReplyService } from './reply.service';
import { CreateReplyDto } from './dto/create-reply.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('api/reply')
export class ReplyController {
  constructor(private readonly replyService: ReplyService) {}

  @Post("create")
  async create(@Body() createReplyDto: CreateReplyDto) {
    return await this.replyService.create(createReplyDto);
  }

  @Get("getAll")
  async findAll() {
    return await this.replyService.findAll();
  }

  @Get('get/:id')
  async findOne(@Param('id') id: string) {
    return await this.replyService.findOne(+id);
  }

  @UseGuards(AuthGuard("jwt"))
  @Post('remove/:id')
  async remove(@Param('id') id: string) {
    return await this.replyService.remove(+id);
  }

}
