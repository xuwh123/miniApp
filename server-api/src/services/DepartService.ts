import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Equal } from 'typeorm';
import { Department } from 'src/entities/depart.entity';


@Injectable()
export class DepartService {

  constructor(
    @InjectRepository(Department)
    private departRepository: Repository<Department>,
  ) {}

  async getTree(): Promise<Department[] | null> {
    return this.departRepository.find({ where: { deleted: 0 } });
  }

  async queryList(): Promise<Department[] | null> {
    return this.departRepository.find({ where: { deleted: 0 } });
  }

  async add(user: Department): Promise<Department | null> {
    return this.departRepository.save(user);
  }

  async edit(user: Department): Promise<Department | null> {
    return this.departRepository.save(user);
  }

  delete(id: number) {
    return this.departRepository.update(id, { deleted: 1 });
  }

}


