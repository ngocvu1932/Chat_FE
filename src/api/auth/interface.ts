export interface ILoginRequest {
  username: string;
  password: string;
}

export interface ILoginResponse {
  status: number;
  message: string;
  data: User;
}

export interface User {
  _id: string;
  phone: string;
  username: string;
  fullname: string;
  email: string;
  password: string;
  avatar: string;
  address: string;
  createdAt: string;
  updatedAt: string;
  __v?: number;
  accessToken?: string;
  refreshToken?: string;
}
