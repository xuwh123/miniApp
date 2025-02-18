import { Body, Controller, Get, Post, Query, Req } from '@nestjs/common';
import { UserService } from 'src/services/UserService';
import { LoginDto } from '../dto/login.dto';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { ResponseModel } from 'src/common/response.model';
import axios from 'axios';
import { Public } from 'src/decorators/public.decorator';

@Controller('/auth')
export class AuthController {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  @Post('/accountLogin')
  async accountLogin(@Body() loginDto: LoginDto) {
    // 从数据库中查找用户
    // console.log(await bcrypt.hash(loginDto.password, 10));

    const user = await this.userService.findByLoginAccount(loginDto.account);
    if (!user) {
      return ResponseModel.error('用户不存在', 401);
    }

    // 验证密码
    const isPasswordValid = await bcrypt.compare(
      loginDto.password,
      user.login_password,
    );
    if (!isPasswordValid) {
      return ResponseModel.error('密码错误', 401);
    }

    // 生成 JWT token
    const payload = { username: user.username, sub: user.user_id };
    return ResponseModel.success({
      access_token: 'Bearer ' + this.jwtService.sign(payload),
    });
  }
  @Get('/currentUser')
  async currentUser(@Req() request: Request) {
    return ResponseModel.success(request['user']);
  }
  @Public()
  @Get('/currentUser2')
  async currentUser2(@Query('code') code: string) {
    const appId = 'wx1e67b2f7d8ddc630';
    const appSecret = '1a10d3fe54210878f933bfe0f3c8e086';
    const url = `https://api.weixin.qq.com/sns/jscode2session?appid=${appId}&secret=${appSecret}&js_code=${code}&grant_type=authorization_code`;
    try {
      console.log(url)
      const response = await axios.get(url);
      console.log(response.data);
      const { openid, session_key } = response.data;
      if (!openid || !session_key) {
        return ResponseModel.error('Invalid response from WeChat Api', 400);
      }
      // let user=await this.userService.findUserByWechatOpenid(openid);
      return ResponseModel.success(openid);
    } catch (error) {
      console.error('微信登录失败', error);
      ResponseModel.error('微信登录失败', 500);
    }
  }
}
