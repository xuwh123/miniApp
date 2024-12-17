import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Equal } from 'typeorm';
import { User } from '../entities/user.entity';
import { Controller, Delete, Param, ParseIntPipe } from '@nestjs/common';

@Injectable()
export class UserService {

  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async findByUsername(username: string): Promise<User | null> {
    return this.userRepository.findOne({ where: { username } });
  }

  async findByLoginAccount(account: string): Promise<User | null> {
    return this.userRepository.findOne({ where: { login_account: account } });
  }

  async queryList(account: string): Promise<User[] | null> {
    return this.userRepository.find({ where: { deleted: 0 } });
  }

  async add(user: User): Promise<User | null> {
    return this.userRepository.save(user);
  }

  async edit(user: User): Promise<User | null> {
    return this.userRepository.save(user);
  }

  delete(id: number) {
    return this.userRepository.update(id, { deleted: 1 });
  }

}


