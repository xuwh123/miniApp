// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 获取用户列表 GET /api/user/list */
export async function queryDepartList(
  params: {
    // query
    /** 当前的页码 */
    current?: number;
    /** 页面的容量 */
    pageSize?: number;
  },
  options?: { [key: string]: any },
) {
  return request<API.ApiResponsePage<any>>('/api/depart/list', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

export async function addDepart(data: any, options?: { [key: string]: any }) {
  return request<API.ApiResponsePage<any>>('/api/depart/add', {
    method: 'POST',
    data: data,
    ...(options || {}),
  });
}
export async function editDepart(data: any, options?: { [key: string]: any }) {
  return request<API.ApiResponsePage<any>>('/api/depart/edit', {
    method: 'POST',
    data: data,
    ...(options || {}),
  });
}
export async function deleteDepart(id: number, options?: { [key: string]: any }) {
  return request<API.ApiResponsePage<any>>('/api/depart/delete', {
    method: 'DELETE',
    params: { id: id },
    ...(options || {}),
  });
}
