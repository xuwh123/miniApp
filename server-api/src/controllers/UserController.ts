import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Query,
  Req,
} from '@nestjs/common';
import { User } from 'src/entities/user.entity';
import { UserService } from 'src/services/UserService';
import * as bcrypt from 'bcryptjs';
import { ResponseModel } from 'src/common/response.model';

@Controller('/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/list')
  async list(@Req() request: Request) {
    let rst = await this.userService.queryList('');
    return ResponseModel.success(rst);
  }
  @Post('/add')
  async add(@Body() addDto: User): Promise<ResponseModel<any>> {
    addDto.login_password = await bcrypt.hash(addDto.login_password, 10);
    let result = await this.userService.add(addDto);
    return ResponseModel.success(result);
  }
  @Post('/edit')
  async edit(@Body() addDto: User): Promise<ResponseModel<any>> {
    // addDto.login_password = await bcrypt.hash(addDto.login_password, 10);
    let result = await this.userService.edit(addDto);
    return ResponseModel.success(result);
  }

  @Delete('/delete')
  async delete(
    @Query('id', ParseIntPipe) id: number,
  ): Promise<ResponseModel<any>> {
    try {
      const result = await this.userService.delete(id);
      return ResponseModel.success(result);
    } catch (error) {
      return ResponseModel.error('删除失败');
    }
  }
}
