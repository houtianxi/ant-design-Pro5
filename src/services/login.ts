import { request } from 'umi';

//import defaultSettings  from '../../config/defaultSettings';
export interface LoginParamsType {
  username: string;
  password: string;
  mobile: string;
  captcha: string;
  type: string;
}
addEventListener




//const proxyurl:string="http://localhost:8000"
const proxyurl:string=""
export async function fakeAccountLogin(params: LoginParamsType) {

  return request<API.LoginStateType>(proxyurl+'/api/login/account', {
    method: 'POST',
    data: params,

  });
}

export async function getFakeCaptcha(mobile: string) {
  return request(proxyurl+`/api/login/captcha?Mobile=${mobile}`);
}

export async function outLogin() {
  return request(proxyurl+'/api/login/outLogin');
}
