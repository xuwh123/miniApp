import {
    Body,
    Controller,
    Delete,
    Get,
    Post,
    Query,
    ParseIntPipe,
  } from '@nestjs/common';
  import { ResponseModel } from '../common/response.model';
import { GoodsService } from 'src/services/GoodsService';
import { Goods } from 'src/entities/goods.entity';

  @Controller('goods')
  export class GoodsController {

    constructor(private readonly goodsService: GoodsService) {}

    @Get('list')
    async list(): Promise<ResponseModel<Goods[]>> {
      const result = await this.goodsService.queryList();
      return ResponseModel.success(result);
    }



    @Post('add')
    async add(@Body() goods: Goods): Promise<ResponseModel<Goods>> {
      const result = await this.goodsService.add(goods);
      return ResponseModel.success(result);
    }

    @Post('edit')
    async edit(@Body() goods: Goods): Promise<ResponseModel<any>> {
      const result = await this.goodsService.edit(goods);
      return ResponseModel.success(result);
    }

    @Delete('delete')
    async delete(
      @Query('id', ParseIntPipe) id: number,
    ): Promise<ResponseModel<any>> {
      try {
        const result = await this.goodsService.delete(id);
        return ResponseModel.success(result);
      } catch (error) {
        return ResponseModel.error('删除失败');
      }
    }
  }
