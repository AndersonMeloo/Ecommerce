import { apiFetch } from '../utils/api';

export interface LoginData {

  email: string;
  password: string;
}

export interface SignupData {

  name: string;
  email: string;
  password: string;
}

export interface AuthResponse {

  token: string;
  user: {
    name: string;
    email: string;
  };
}

export const authAPI = {

  login: async (data: LoginData): Promise<AuthResponse> => {

    return apiFetch('/auth/signin', {
      method: 'POST',
      body: JSON.stringify(data)
    });
  },

  signup: async (data: SignupData): Promise<AuthResponse> => {

    return apiFetch('/auth/signup', {
      method: 'POST',
      body: JSON.stringify(data)
    });
  },

  logout: (): void => {
    localStorage.removeItem('token');
    localStorage.removeItem('name');
    localStorage.removeItem('email');
  }
};