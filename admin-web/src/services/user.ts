// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 获取用户列表 GET /api/user/list */
export async function queryUserList(
  params: {
    // query
    /** 当前的页码 */
    current?: number;
    /** 页面的容量 */
    pageSize?: number;
  },
  options?: { [key: string]: any },
) {
  return request<API.ApiResponsePage<any>>('/api/user/list', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

export async function addUser(data: any, options?: { [key: string]: any }) {
  return request<API.ApiResponsePage<any>>('/api/user/add', {
    method: 'POST',
    data: data,
    ...(options || {}),
  });
}
export async function editUser(data: any, options?: { [key: string]: any }) {
  return request<API.ApiResponsePage<any>>('/api/user/edit', {
    method: 'POST',
    data: data,
    ...(options || {}),
  });
}
export async function deleteUser(id: number, options?: { [key: string]: any }) {
  return request<API.ApiResponsePage<any>>('/api/user/delete', {
    method: 'DELETE',
    params: { id: id },
    ...(options || {}),
  });
}
