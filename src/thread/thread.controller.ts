import { Controller, UseGuards, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ThreadService } from './thread.service';
import { CreateThreadDto } from './dto/create-thread.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('api/thread')
export class ThreadController {
  constructor(private readonly threadService: ThreadService) {}

  @Post("create")
  async create(@Body() createThreadDto: CreateThreadDto) {
    return await this.threadService.create(createThreadDto);
  }

  @Get("getAll")
  async findAll() {
    return await this.threadService.findAll();
  }

  @Get('get/:id')
  async findOne(@Param('id') id: string) {
    return await this.threadService.findOne(+id);
  }

  @Get("getReplies/:id")
  async getReplies(@Param("id") id: string) {
    return await this.threadService.getReplies(+id)
  }

  @UseGuards(AuthGuard("jwt"))
  @Post('remove/:id')
  async remove(@Param('id') id: string) {
    return await this.threadService.remove(+id);
  }
}
