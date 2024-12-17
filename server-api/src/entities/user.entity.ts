import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('sys_user')
export class User {
  @PrimaryGeneratedColumn()
  user_id: number;

  @Column({ length: 50, nullable: true })
  username: string;

  @Column({ length: 20, nullable: true })
  phone_number: string;

  @Column({ length: 100, nullable: true })
  reset_question: string;

  @Column({ length: 100, nullable: true })
  reset_answer: string;

  @Column({ nullable: true })
  department_id: number;

  @Column({ length: 50, nullable: true })
  login_account: string;

  @Column({ length: 100, nullable: true })
  login_password: string;

  @Column({ nullable: true })
  last_login_time: Date;

  @Column({ length: 50, nullable: true })
  login_ip: string;

  @Column({ nullable: true })
  created_by: number;

  @Column({ nullable: true })
  updated_by: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_time: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
  updated_time: Date;

  @Column({ type: 'tinyint', default: 0 })
  deleted: number;

  @Column({ type: 'tinyint', default: 1 })
  status: number;
}