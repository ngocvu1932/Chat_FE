import axiosInstance from '../axiosConfig';
import {ILoginRequest, ILoginResponse, IRegisterRequest, IRegisterResponse, IVerifyEmailRequest} from './interface';

class Auth {
  constructor() {}

  login(body: ILoginRequest): Promise<ILoginResponse> {
    return axiosInstance.post('/api/auth/login', body);
  }

  register(body: IRegisterRequest): Promise<IRegisterResponse> {
    return axiosInstance.post('/api/auth/register', body);
  }

  verifyEmail(body: IVerifyEmailRequest): Promise<any> {
    return axiosInstance.post(`/api/auth/verify-email`, body);
  }

  getProfile(): Promise<ILoginResponse> {
    return axiosInstance.get('/api/auth/get-profile');
  }
}

export const authAPIs = new Auth();
export default authAPIs;
