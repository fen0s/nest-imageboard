import { Column, Model, Table, HasMany } from 'sequelize-typescript'
import { Thread } from 'src/thread/entities/thread.entity';

@Table
export class Board extends Model {

  @Column
  name: string;

  @Column
  description: string;

  @HasMany(()=>Thread)
  threads: Thread[]


}
