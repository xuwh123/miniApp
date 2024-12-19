import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Equal } from 'typeorm';
import { Goods } from 'src/entities/goods.entity';


@Injectable()
export class GoodsService {

  constructor(
    @InjectRepository(Goods)
    private GoodsRepository: Repository<Goods>,
  ) {}

  async getTree(): Promise<Goods[] | null> {
    return this.GoodsRepository.find({ where: { deleted: 0 } });
  }

  async queryList(): Promise<Goods[] | null> {
    return this.GoodsRepository.find({ where: { deleted: 0 } });
  }

  async add(user: Goods): Promise<Goods | null> {
    return this.GoodsRepository.save(user);
  }

  async edit(user: Goods): Promise<Goods | null> {
    return this.GoodsRepository.save(user);
  }

  delete(id: number) {
    return this.GoodsRepository.update(id, { deleted: 1 });
  }

}


