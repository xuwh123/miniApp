import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('sys_department')
export class Department {
  @PrimaryGeneratedColumn()
  department_id: number;

  @Column({
    name: 'department_name',
    type: 'varchar',
    length: 50,
    nullable: false
  })
  department_name: string;

  @Column({ nullable: true })
  parent_id: number;

  @Column({ nullable: true })
  created_by: number;

  @Column({ nullable: true })
  updated_by: number;

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP'
  })
  created_time: Date;

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP'
  })
  updated_time: Date;

  @Column({ default: 0 })
  deleted: number;

  @Column({ default: 1 })
  status: number;
}