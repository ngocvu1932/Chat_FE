export interface ILoginRequest {
  username: string;
  password: string;
}

export interface ILoginResponse {
  status: number;
  message: string;
  data: User;
}

export interface IRegisterRequest {
  username: string;
  password: string;
  email: string;
}

export interface IRegisterResponse {
  status: number;
  message: string;
  data: User;
}

export interface IVerifyEmailRequest {
  username: string;
  email: string;
  verifyCode: string;
}

export interface User {
  _id: string;
  phone: string;
  username: string;
  fullname: string;
  email: string;
  password: string;
  avatar: string;
  isVerified: boolean;
  address: string;
  createdAt: string;
  updatedAt: string;
  accessToken?: string;
  refreshToken?: string;
}
