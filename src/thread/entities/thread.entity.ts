import { Column, Model, Table, BelongsTo, HasMany, ForeignKey } from 'sequelize-typescript'
import { Board } from 'src/board/entities/board.entity';
import { Reply } from 'src/reply/entities/reply.entity';
@Table
export class Thread extends Model {
  @Column
  image: string;

  @Column
  contents: string;
   
  @ForeignKey(() => Board)
  @Column
  boardId: number

  @BelongsTo(()=>Board)
  board: Board;

  @HasMany(()=>Reply)
  replies: Reply[];
}
