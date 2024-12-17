import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Query,
  ParseIntPipe,
} from '@nestjs/common';
import { Department } from '../entities/depart.entity';
import { DepartService } from '../services/DepartService';
import { ResponseModel } from '../common/response.model';

@Controller('depart')
export class DepartmentController {

  constructor(private readonly departmentService: DepartService) {}

  @Get('list')
  async list(): Promise<ResponseModel<Department[]>> {
    const result = await this.departmentService.queryList();
    return ResponseModel.success(result);
  }

  @Get('tree')
  async tree(): Promise<ResponseModel<Department[]>> {
    const result = await this.departmentService.getTree();
    return ResponseModel.success(result);
  }

  @Post('add')
  async add(@Body() department: Department): Promise<ResponseModel<Department>> {
    const result = await this.departmentService.add(department);
    return ResponseModel.success(result);
  }

  @Post('edit')
  async edit(@Body() department: Department): Promise<ResponseModel<any>> {
    const result = await this.departmentService.edit(department);
    return ResponseModel.success(result);
  }

  @Delete('delete')
  async delete(
    @Query('id', ParseIntPipe) id: number,
  ): Promise<ResponseModel<any>> {
    try {
      const result = await this.departmentService.delete(id);
      return ResponseModel.success(result);
    } catch (error) {
      return ResponseModel.error('删除失败');
    }
  }
}
