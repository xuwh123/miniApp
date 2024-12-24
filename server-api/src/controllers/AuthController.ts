import {
  Body,
  Controller,
  Get,
  Post,
  Req,
  UnauthorizedException,
} from '@nestjs/common';
import { UserService } from 'src/services/UserService';
import { LoginDto } from '../dto/login.dto';
import { JwtService } from '@nestjs/jwt';
import { Public } from '../decorators/public.decorator';
import * as bcrypt from 'bcrypt';
import { ResponseModel } from 'src/common/response.model';

@Controller('/auth')
export class AuthController {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  @Public()
  @Post('/accountLogin')
  async accountLogin(@Body() loginDto: LoginDto) {
    // 从数据库中查找用户
    // console.log(await bcrypt.hash(loginDto.password, 10));

    const user = await this.userService.findByLoginAccount(loginDto.account);
    if (!user) {
      return ResponseModel.error('用户不存在',401);
    }

    // 验证密码
    const isPasswordValid = await bcrypt.compare(
      loginDto.password,
      user.login_password,
    );
    if (!isPasswordValid) {
      return ResponseModel.error('密码错误',401);
    }

    // 生成 JWT token
    const payload = { username: user.username, sub: user.user_id };
    return ResponseModel.success({
      access_token: 'Bearer ' + this.jwtService.sign(payload),
    });

    return;
  }

  @Get('/currentUser')
  async currentUser(@Req() request: Request) {
    return ResponseModel.success(request['user']);
  }
}
