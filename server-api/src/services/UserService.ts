import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';
import * as bcrypt from 'bcrypt';

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

  getHello(): string {
    return 'Hello World user !';
  }

  async validateUser(account: string, password: string) {
    const user = await this.findByLoginAccount(account);
    console.log(user);
    if (user && await bcrypt.compare(password, user.login_password)) {
      return user;
    }
    throw new UnauthorizedException('用户名或密码错误');
  }
}

