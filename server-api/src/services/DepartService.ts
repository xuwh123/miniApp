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

  async add(department: Department): Promise<Department> {
    try {
      // 创建新的部门实例
      const newDepartment = new Department();

      // 设置必填字段
      newDepartment.department_name = department.department_name; // 部门名称是必填的
      newDepartment.parent_id = department.parent_id || 0;       // 父级ID，默认为0
      newDepartment.sort = department.sort || 0;                 // 排序，默认为0
      newDepartment.status = department.status || 1;             // 状态，默认为1
      newDepartment.deleted = 0;                                 // 删除标记，默认为0

      // 设置可选字段
      if (department.description) newDepartment.description = department.description;
      if (department.leader) newDepartment.leader = department.leader;
      if (department.phone) newDepartment.phone = department.phone;
      if (department.email) newDepartment.email = department.email;

      // 保存并返回结果
      return await this.departRepository.save(newDepartment);
    } catch (error) {
      console.error('Add department error:', error);
      throw error;
    }
  }

  async edit(user: Department): Promise<Department | null> {
    return this.departRepository.save(user);
  }

  delete(id: number) {
    return this.departRepository.update(id, { deleted: 1 });
  }

}


