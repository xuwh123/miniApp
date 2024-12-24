import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Goods } from './goods.entity';

@Entity()
export class GoodsImage {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  url: string;

  @Column()
  filename: string;

  @ManyToOne(() => Goods, goods => goods.images)
  goods: Goods;
}