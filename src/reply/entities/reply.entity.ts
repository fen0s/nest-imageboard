import { Column, Model, Table, BelongsTo, ForeignKey } from 'sequelize-typescript'
import { Thread } from 'src/thread/entities/thread.entity';
@Table
export class Reply extends Model {

  @Column
  contents: string;

  @Column
  image: string;

  @ForeignKey(() => Thread)
  @Column
  threadId: number

  @BelongsTo(()=>Thread)
  thread: Thread;




}
