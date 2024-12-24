import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Goods } from './goods.entity';

@Entity('goods_category')
export class GoodsCategory {
  @PrimaryGeneratedColumn()
  category_id: number;

  @Column({
    type: 'varchar',
    length: 50,
    nullable: false,
    comment: '分类名称'
  })
  category_name: string;

  @Column({
    type: 'varchar',
    length: 100,
    nullable: true,
    comment: '分类简称'
  })
  short_name: string;

  @Column({
    type: 'int',
    default: 0,
    comment: '父级ID，0表示一级分类'
  })
  parent_id: number;

  @Column({
    type: 'varchar',
    length: 255,
    nullable: true,
    comment: '分类图标'
  })
  icon: string;

  @Column({
    type: 'varchar',
    length: 255,
    nullable: true,
    comment: '分类图片'
  })
  image: string;

  @Column({
    type: 'int',
    default: 0,
    comment: '排序权重'
  })
  sort: number;

  @Column({
    type: 'tinyint',
    default: 1,
    comment: '是否显示：0-隐藏，1-显示'
  })
  is_show: number;

  @Column({
    type: 'varchar',
    length: 255,
    nullable: true,
    comment: '分类广告图'
  })
  adv_image: string;

  @Column({
    type: 'varchar',
    length: 255,
    nullable: true,
    comment: '分类广告链接'
  })
  adv_url: string;

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    comment: '创建时间'
  })
  created_time: Date;

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
    comment: '更新时间'
  })
  updated_time: Date;

  @Column({
    type: 'tinyint',
    default: 0,
    comment: '是否删除：0-未删除，1-已删除'
  })
  deleted: number;

  @Column({
    type: 'tinyint',
    default: 1,
    comment: '状态：0-禁用，1-启用'
  })
  status: number;

  // 非数据库字段，用于构建树形结构
  children?: GoodsCategory[];

  // 添加 label 和 value 字段用于前端树形控件
  get label(): string {
    return this.category_name;
  }

  get value(): number {
    return this.category_id;
  }
}