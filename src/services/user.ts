import { request } from 'umi';
//import defaultSettings  from '../../config/defaultSettings';

//const { proxyurl } = defaultSettings;

//const proxyurl:string="http://localhost:8000"
const proxyurl:string="."
export async function query() {
  return request<API.CurrentUser[]>(proxyurl+'/api/users');
}

export async function queryCurrent() {
  return request<API.CurrentUser>(proxyurl+'/api/currentUser');
}

export async function queryNotices(): Promise<any> {
  return request<{ data: API.NoticeIconData[] }>(proxyurl+'/api/notices');
}
