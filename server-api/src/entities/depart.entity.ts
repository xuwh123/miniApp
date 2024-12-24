import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('department')
export class Department {
  @PrimaryGeneratedColumn()
  department_id: number;

  @Column({
    type: 'varchar',
    length: 50,
    nullable: false,
    comment: '部门名称'
  })
  department_name: string;

  @Column({
    type: 'int',
    default: 0,
    comment: '父级ID'
  })
  parent_id: number;

  @Column({
    type: 'int',
    default: 0,
    comment: '排序'
  })
  sort: number;

  @Column({
    type: 'varchar',
    length: 200,
    nullable: true,
    comment: '描述'
  })
  description: string;

  @Column({
    type: 'varchar',
    length: 50,
    nullable: true,
    comment: '负责人'
  })
  leader: string;

  @Column({
    type: 'varchar',
    length: 20,
    nullable: true,
    comment: '联系电话'
  })
  phone: string;

  @Column({
    type: 'varchar',
    length: 50,
    nullable: true,
    comment: '邮箱'
  })
  email: string;

  @Column({
    type: 'tinyint',
    default: 1,
    comment: '状态：0-禁用，1-启用'
  })
  status: number;

  @Column({
    type: 'tinyint',
    default: 0,
    comment: '是否删除：0-未删除，1-已删除'
  })
  deleted: number;

  // 非数据库字段，用于构建树形结构
  children?: Department[];
}