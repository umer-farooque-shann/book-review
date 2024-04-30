import axiosInstance from './axiosInterceptor';

const AuthService = {
  login: async (email, password) => {
    try {
      const response = await axiosInstance.post('/api/auth/login', { email, password });
      const { accessToken, refreshToken } = response.data;
      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('refreshToken', refreshToken);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  },

  logout: () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
  },

  getAccessToken: () => {
    return localStorage.getItem('accessToken');
  },

  setAccessToken: (accessToken) => {
    axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
    localStorage.setItem('accessToken', accessToken);
  },

  refreshToken: async () => {
    try {
      const refreshToken = localStorage.getItem('refreshToken');
      const response = await axiosInstance.post('/api/auth/refresh-token', { refreshToken });
      const newAccessToken = response.data.accessToken;
      localStorage.setItem('accessToken', newAccessToken);
      return newAccessToken;
    } catch (error) {
      throw error.response.data;
    }
  }
};

export default AuthService;
