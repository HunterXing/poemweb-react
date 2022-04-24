/*
 * @description: 设置代理
 * @Date: 2022-04-23 21:16:40
 * @Author: xingheng
 */

const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/api", {
      target: "http://127.0.0.1:7001", //转发到的ß域名或者ip地址
      // pathRewrite: {
      //   "^/api": "", //接口地址里没有"/api",将其重写置空
      // },
      changeOrigin: true, //必须设置为true
      // secure: false, //是否验证https的安全证书，如果域名是https需要配置此项
    })
  );
};
