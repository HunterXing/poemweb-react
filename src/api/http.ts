/*
 * @description: http.ts
 * @Date: 2022-02-23 19:35:08
 * @Author: xingheng
 */
import axios from "axios";

import { message } from "antd";

// 创建 axios实例
const http = axios.create({
  baseURL: "http://localhost:8080/api",
  // 请求超时时间
  timeout: 15000,
});
// 添加请求拦截器
http.interceptors.request.use(
  (config) => {
    return config;
  },
  (err) => {
    message.error(`请求失败 ${err}`);
  }
);

// 响应拦截器
http.interceptors.response.use(
  (response) => {
    return response.data;
  },

  (err) => {
    message.error(`响应失败 ${err}`);
    return new Promise((resolve, reject) => {
      reject(err);
    });
  }
);

export default http;
