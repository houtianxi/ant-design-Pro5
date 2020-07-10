import { request } from 'umi';


//import request from '@/utils/request';

export async function getMenuData() {
    const token = sessionStorage.getItem('access_token');
    return request(`/api/menu`, {
      method: 'GET',
      headers: { Authorization: `Bearer ${token}` },
    });
  }
