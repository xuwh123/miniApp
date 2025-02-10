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
  async list(@Query() query: any): Promise<ResponseModel<Goods[]>> {
    const goods_name = query.goods_name || '';
    const status = query.status || -1;
    const result = await this.goodsService.queryList(goods_name, status);
    return ResponseModel.success(result);
  }

  @Get('info')
  async info(
    @Query('id', ParseIntPipe) id: number,
  ): Promise<ResponseModel<Goods>> {
    const result = await this.goodsService.getInfo(id);
    return ResponseModel.success(result);
  }

  @Post('add')
  async add(@Body() goods: Goods): Promise<ResponseModel<Goods>> {
    goods.sale_price = Number(goods.sale_price || 0);
    goods.market_price = Number(goods.market_price || 0);

    if (goods.images && !Array.isArray(goods.images)) {
      goods.images = [goods.images];
    }

    goods.main_image = goods.images[0].url;

    const result = await this.goodsService.add(goods);
    //   this.goodImagesService.addImages(result.goods_id, goods.images);

    return ResponseModel.success(result);
  }

  @Post('edit')
  async edit(@Body() goods: Goods): Promise<ResponseModel<any>> {
    goods.sale_price = Number(goods.sale_price || 0);
    goods.market_price = Number(goods.market_price || 0);

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
