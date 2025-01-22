import axiosInstance from '../axiosConfig';
import {ILoginRequest, ILoginResponse} from './interface';

class Auth {
  constructor() {}

  login(body: ILoginRequest): Promise<ILoginResponse> {
    return axiosInstance.post('/api/auth/login', body);
  }

  getProfile(): Promise<ILoginResponse> {
    return axiosInstance.get('/api/auth/get-profile');
  }
}

export const authAPIs = new Auth();
export default authAPIs;
