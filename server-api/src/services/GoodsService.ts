import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Equal } from 'typeorm';
import { Goods } from 'src/entities/goods.entity';
import { GoodsImage } from 'src/entities/goods-image.entity';

@Injectable()
export class GoodsService {

  constructor(
    @InjectRepository(Goods)
    private GoodsRepository: Repository<Goods>,
    @InjectRepository(GoodsImage)
    private GoodsImageRepository: Repository<GoodsImage>,
  ) {}

  async getTree(): Promise<Goods[] | null> {
    return this.GoodsRepository.find({ where: { deleted: 0 } });
  }

  async queryList(goods_name: string, status: number): Promise<Goods[] | null> {
    const where: any = { deleted: 0 };
    if (goods_name) {
      where.goods_name = goods_name;
    }
    if (status && status>=0) {
      where.status = status;
    }
    return this.GoodsRepository.find({ where });
  }

  async getInfo(id: number): Promise<Goods | null> {
    return this.GoodsRepository.findOne({ where: { goods_id: id } });
  }

  async add(goods: Goods): Promise<Goods> {
    if (goods.images && Array.isArray(goods.images)) {
      const images = goods.images.map(imageUrl => {
        return imageUrl;
      });
      goods.images = images;
    }

    return this.GoodsRepository.save(goods);
  }

  async edit(user: Goods): Promise<Goods | null> {
    return this.GoodsRepository.save(user);
  }

  delete(id: number) {
    return this.GoodsRepository.update(id, { deleted: 1 });
  }

}


