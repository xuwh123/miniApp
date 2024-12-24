import {
  Controller,
  Get,
  Post,
  Body,
  Query,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { GoodsCategoryService } from '../services/GoodsCategoryService';
import { GoodsCategory } from '../entities/GoodsCategory.entity';
import { ResponseModel } from '../common/response.model';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: GoodsCategoryService) {}

  // 获取分类树形结构
  @Get('tree')
  async getTree(): Promise<ResponseModel<GoodsCategory[]>> {
    const result = await this.categoryService.getTree();
    return ResponseModel.success(result);
  }

  // 获取分类列表
  @Get('list')
  async list(@Query() query: any): Promise<ResponseModel<GoodsCategory[]>> {
    const result = await this.categoryService.queryList({
      category_name: query.category_name,
      is_show: query.is_show !== undefined ? parseInt(query.is_show) : undefined,
    });
    return ResponseModel.success(result);
  }

  // 获取分类详情
  @Get('info')
  async info(@Query('id', ParseIntPipe) id: number): Promise<ResponseModel<GoodsCategory>> {
    const result = await this.categoryService.getInfo(id);
    return ResponseModel.success(result);
  }

  // 添加分类
  @Post('add')
  async add(@Body() category: GoodsCategory): Promise<ResponseModel<GoodsCategory>> {
    // 确保添加时不包含 category_id
    delete category.category_id;

    const result = await this.categoryService.add(category);
    return ResponseModel.success(result);
  }

  // 编辑分类
  @Post('edit')
  async edit(@Body() category: GoodsCategory): Promise<ResponseModel<GoodsCategory>> {
    if (!category.category_id) {
      return ResponseModel.error('分类ID不能为空');
    }

    const result = await this.categoryService.edit(category);
    return ResponseModel.success(result);
  }

  // 删除分类
  @Delete('delete')
  async delete(@Query('id', ParseIntPipe) id: number): Promise<ResponseModel<boolean>> {
    const result = await this.categoryService.delete(id);
    return ResponseModel.success(result);
  }

  // 修改显示状态
  @Post('changeShow')
  async changeShow(
    @Query('id', ParseIntPipe) id: number,
    @Query('is_show', ParseIntPipe) is_show: number,
  ): Promise<ResponseModel<boolean>> {
    const result = await this.categoryService.changeShow(id, is_show);
    return ResponseModel.success(result);
  }

  // 修改排序
  @Post('changeSort')
  async changeSort(
    @Query('id', ParseIntPipe) id: number,
    @Query('sort', ParseIntPipe) sort: number,
  ): Promise<ResponseModel<boolean>> {
    const result = await this.categoryService.changeSort(id, sort);
    return ResponseModel.success(result);
  }

  // 修改状态
  @Post('changeStatus')
  async changeStatus(
    @Query('id', ParseIntPipe) id: number,
    @Query('status', ParseIntPipe) status: number,
  ): Promise<ResponseModel<boolean>> {
    const result = await this.categoryService.changeStatus(id, status);
    return ResponseModel.success(result);
  }
}
