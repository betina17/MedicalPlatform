import axiosInstance from './axiosInstance';
import type {
  LoginRequest,
  LoginResponse,
  RegisterRequest,
  RegisterResponse,
  RefreshResponse,
  ApiSuccess,
} from '../types';

export const login = async (data: LoginRequest): Promise<LoginResponse> => {
  const response = await axiosInstance.post<ApiSuccess<LoginResponse>>('/api/auth/login', data);
  return response.data.data;
};

export const register = async (data: RegisterRequest): Promise<RegisterResponse> => {
  const response = await axiosInstance.post<ApiSuccess<RegisterResponse>>('/api/auth/register', data);
  return response.data.data;
};

// The refresh token is held in an httpOnly cookie, sent automatically.
export const refreshToken = async (): Promise<RefreshResponse> => {
  const response = await axiosInstance.post<ApiSuccess<RefreshResponse>>('/api/auth/refresh');
  return response.data.data;
};

export const logout = async (): Promise<void> => {
  await axiosInstance.post('/api/auth/logout');
};
