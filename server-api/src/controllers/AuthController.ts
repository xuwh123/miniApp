import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { UserService } from 'src/services/UserService';
import { LoginDto } from '../dto/login.dto';
import { JwtService } from '@nestjs/jwt';

@Controller("/auth")
export class AuthController {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  @Post("/accountLogin")
  async accountLogin(@Body() loginDto: LoginDto) {
    // 验证用户
    const user = await this.userService.validateUser(loginDto.account, loginDto.password);

    // 生成 JWT token
    const payload = { username: user.username, sub: user.user_id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  @Get("/currentUser")
  async currentUser(@Req() request: Request) {
    return {};
  }
}
