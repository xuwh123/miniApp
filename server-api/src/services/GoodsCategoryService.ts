import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GoodsCategory } from '../entities/GoodsCategory.entity';

@Injectable()
export class GoodsCategoryService {
  constructor(
    @InjectRepository(GoodsCategory)
    private readonly categoryRepository: Repository<GoodsCategory>,
  ) {}

  // 获取分类树形结构
  async getTree(): Promise<any[]> {
    const allCategories = await this.categoryRepository.find({
      where: { deleted: 0 },
      order: { sort: 'DESC' }
    });

    // 构建树形结构
    const categoryMap = new Map();
    const result = [];

    // 转换数据结构
    allCategories.forEach(item => {
      categoryMap.set(item.category_id, {
        category_id: item.category_id,
        category_name: item.category_name,
        parent_id: item.parent_id,
        sort: item.sort,
        is_show: item.is_show,
        status: item.status,
        icon: item.icon,
        image: item.image,
        short_name: item.short_name,
        adv_image: item.adv_image,
        adv_url: item.adv_url,
        label: item.category_name,  // 用于前端显示
        value: item.category_id,    // 用于前端选择
        children: []
      });
    });

    // 构建树形结构
    categoryMap.forEach(item => {
      if (item.parent_id === 0) {
        // 顶级分类
        result.push(item);
      } else {
        // 子分类
        const parent = categoryMap.get(item.parent_id);
        if (parent) {
          if (!parent.children) {
            parent.children = [];
          }
          parent.children.push(item);
        } else {
          // 如果找不到父级，就作为顶级分类
          result.push(item);
        }
      }
    });

    // 按照 sort 排序
    result.sort((a, b) => b.sort - a.sort);
    result.forEach(item => {
      if (item.children && item.children.length > 0) {
        item.children.sort((a, b) => b.sort - a.sort);
      }
    });

    return result;
  }

  // 获取分类列表（平铺结构）
  async queryList(params: { category_name?: string; is_show?: number }): Promise<GoodsCategory[]> {
    const where: any = { deleted: 0 };

    if (params.category_name) {
      where.category_name = params.category_name;
    }
    if (typeof params.is_show === 'number') {
      where.is_show = params.is_show;
    }

    return this.categoryRepository.find({
      where,
      order: { sort: 'DESC' }
    });
  }

  // 获取分类详情
  async getInfo(id: number): Promise<GoodsCategory> {
    return this.categoryRepository.findOne({
      where: { category_id: id, deleted: 0 }
    });
  }

  // 添加分类
  async add(category: GoodsCategory): Promise<GoodsCategory> {
    try {
      // 创建一个新的分类实例
      const newCategory = new GoodsCategory();

      // 设置必填字段
      newCategory.category_name = category.category_name;
      newCategory.parent_id = category.parent_id || 0;
      newCategory.sort = category.sort || 0;
      newCategory.is_show = category.is_show || 1;
      newCategory.status = category.status || 1;
      newCategory.deleted = 0;

      // 设置可选字段
      if (category.short_name) newCategory.short_name = category.short_name;
      if (category.icon) newCategory.icon = category.icon;
      if (category.image) newCategory.image = category.image;
      if (category.adv_image) newCategory.adv_image = category.adv_image;
      if (category.adv_url) newCategory.adv_url = category.adv_url;

      // 保存数据
      const savedCategory = await this.categoryRepository.save(newCategory);
      console.log('Saved category:', savedCategory);

      return savedCategory;
    } catch (error) {
      console.error('Add category error:', error);
      console.error('Error details:', error.message);
      throw error;
    }
  }

  // 编辑分类
  async edit(category: GoodsCategory): Promise<GoodsCategory> {
    const {
      category_id,
      label,      // 排除 label
      value,      // 排除 value
      children,   // 排除 children
      status,     // 排除 status
      ...updateData
    } = category;

    // 使用 update 方法更新数据
    await this.categoryRepository.update(category_id, updateData);

    // 返回更新后的数据
    return this.getInfo(category_id);
  }

  // 删除分类（软删除）
  async delete(id: number): Promise<boolean> {
    const result = await this.categoryRepository.update(
      { category_id: id },
      { deleted: 1 }
    );
    return result.affected > 0;
  }

  // 修改显示状态
  async changeShow(id: number, is_show: number): Promise<boolean> {
    const result = await this.categoryRepository.update(
      { category_id: id },
      { is_show }
    );
    return result.affected > 0;
  }

  // 修改排序
  async changeSort(id: number, sort: number): Promise<boolean> {
    const result = await this.categoryRepository.update(
      { category_id: id },
      { sort }
    );
    return result.affected > 0;
  }

  // 修改状态
  async changeStatus(id: number, status: number): Promise<boolean> {
    const result = await this.categoryRepository.update(
      { category_id: id },
      { status }
    );
    return result.affected > 0;
  }
}