import axiosInstance from './axiosInterceptor';

const AuthService = {
  login: async (email, password) => {
    try {
      const response = await axiosInstance.post('/api/auth/login', { email, password });
      const { accessToken, refreshToken,isAdmin,isFirstTimeLogin } = response.data;
      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('refreshToken', refreshToken);
      localStorage.setItem('isAdmin', isAdmin);
      localStorage.setItem('isFirstTimeLogin', isFirstTimeLogin);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  },
  signup: async (name, email, password, confirmPassword) => {
    try {
      const response = await axiosInstance.post('/api/auth/register', { name, email, password, confirmPassword });
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
