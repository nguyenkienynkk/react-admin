// lib/axios.ts

import axios, { AxiosInstance } from 'axios';

const axiosConfig: AxiosInstance = axios.create({
  baseURL: 'http://localhost:8090/api', // Đặt URL cơ sở của API của bạn ở đây
  timeout: 5000, // Đặt thời gian chờ của yêu cầu (tính bằng mili giây)
});

// Bạn cũng có thể đặt tiêu đề hoặc thiết lập mặc định khác ở đây
// instance.defaults.headers.common['Authorization'] = 'Bearer your-api-token';

export default axiosConfig;
