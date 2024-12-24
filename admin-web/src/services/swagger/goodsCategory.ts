// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 获取用户列表 GET /api/user/list */
export async function queryGoodsCategoryList(
  params: {
    // query
    /** 当前的页码 */
    current?: number;
    /** 页面的容量 */
    pageSize?: number;
  },
  options?: { [key: string]: any },
) {
  return request<API.ApiResponsePage<any>>('/api/category/List', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

export async function addCategory(data: any, options?: { [key: string]: any }) {
  return request<API.ApiResponsePage<any>>('/api/category/add', {
    method: 'POST',
    data: data,
    ...(options || {}),
  });
}
export async function editCategory(data: any, options?: { [key: string]: any }) {
  return request<API.ApiResponsePage<any>>('/api/category/edit', {
    method: 'POST',
    data: data,
    ...(options || {}),
  });
}
export async function deleteCategory(id: number, options?: { [key: string]: any }) {
  return request<API.ApiResponsePage<any>>('/api/category/delete', {
    method: 'DELETE',
    params: { id: id },
    ...(options || {}),
  });
}
