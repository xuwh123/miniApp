// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 获取用户列表 GET /api/user/list */
export async function queryGoodsAllList(
  params: {
    // query
    /** 当前的页码 */
    current?: number;
    /** 页面的容量 */
    pageSize?: number;
  },
  options?: { [key: string]: any },
) {
  return request<API.ApiResponsePage<any>>(`'/api/goods/list'`, {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

export async function addGoods(data: any, options?: { [key: string]: any }) {
  return request<API.ApiResponsePage<any>>('/api/goods/add', {
    method: 'POST',
    data: data,
    ...(options || {}),
  });
}
export async function editGoods(data: any, options?: { [key: string]: any }) {
  return request<API.ApiResponsePage<any>>('/api/goods/edit', {
    method: 'POST',
    data: data,
    ...(options || {}),
  });
}
export async function deleteGoods(id: number, options?: { [key: string]: any }) {
  return request<API.ApiResponsePage<any>>('/api/goods/delete', {
    method: 'DELETE',
    params: { id: id },
    ...(options || {}),
  });
}
export async function queryGoodsById(id: number, options?: { [key: string]: any }) {
  return request<API.ApiResponsePage<any>>('/api/goods/info', {
    method: 'GET',
    params: {
      id: id,
    },
    ...(options || {}),
  });
}
