import axios from "axios";


const service = axios.create({
  // 在请求地址前面加上baseURL
  baseURL: import.meta.env.VITE_BASE_API,
  // 当发送跨域请求时携带cookie
  withCredentials: true,
  timeout: 5000,
  ...config
});

service.interceptors.request.use((config) => config, error => error);
service.interceptors.response.use(res => res, error => error);


export default service;
