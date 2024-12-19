import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('goods')
export class Goods {
  @PrimaryGeneratedColumn()
  goods_id: number;

  @Column({
    type: 'varchar',
    length: 100,
    nullable: false,
    comment: '商品名称'
  })
  goods_name: string;

  @Column({
    type: 'text',
    nullable: true,
    comment: '商品特点'
  })
  goods_features: string;

  @Column({
    type: 'varchar',
    length: 255,
    nullable: false,
    comment: '商品主图'
  })
  main_image: string;

  @Column({
    type: 'int',
    nullable: false,
    comment: '所属分类ID'
  })
  category_id: number;

  @Column({
    type: 'decimal',
    precision: 10,
    scale: 2,
    nullable: false,
    comment: '商品售价'
  })
  sale_price: number;

  @Column({
    type: 'decimal',
    precision: 10,
    scale: 2,
    nullable: false,
    comment: '市场价'
  })
  market_price: number;

  @Column({
    type: 'varchar',
    length: 20,
    nullable: true,
    comment: '商品单位'
  })
  unit: string;

  @Column({
    type: 'int',
    default: 0,
    comment: '商品总库存'
  })
  total_stock: number;

  @Column({
    type: 'int',
    default: 0,
    comment: '实际销量'
  })
  sales: number;

  @Column({
    type: 'int',
    default: 0,
    comment: '虚拟销量'
  })
  virtual_sales: number;

  @Column({
    type: 'decimal',
    precision: 10,
    scale: 2,
    nullable: true,
    comment: '商品重量(kg)'
  })
  weight: number;

  @Column({
    type: 'tinyint',
    default: 1,
    comment: '商品状态：0-下架，1-上架'
  })
  status: number;

  @Column({
    type: 'text',
    nullable: true,
    comment: '商品详细介绍'
  })
  description: string;

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    comment: '添加时间'
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

  // 非数据库字段，用于关联查询
  category?: any;
  images?: any[];
  recommends?: any[];
}