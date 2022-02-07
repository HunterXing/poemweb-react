/*
 * @description: 路由统一管理
 * @Date: 2022-02-07 11:24:29
 * @LastEditTime: 2022-02-07 14:42:41
 * @Author: xingheng
 */
// 全局路由配置
const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/",
    component: () => import("../pages/home/portal"),
    meta: {
      title: "首页",
      needLogin: true,
    },
    children: [
      {
        path: "home",
        component: () => import("../pages/home/portal/first"),
        meta: {
          title: "首页",
          needLogin: true,
        },
      },
      {
        path: "ancientpoetry",
        component: () => import("../pages/home/portal/ancient-poetry"),
        meta: {
          title: "古诗词",
          needLogin: true,
        },
      },
    ],
  },
  // {
  //   path: "*",
  //   component: () =>
  //     import(/* webpackChunkName: "404" */ "./page/test/page404"),
  //   meta: {
  //     title: "404",
  //   },
  // },
];

/**
 * @description: 全局路由拦截
 * @param {string} pathname 当前路由路径
 * @param {object} meta 当前路由自定义meta字段
 * @return {string} 需要跳转到其他页时就return一个该页的path路径
 */
// @ts-ignore
const onRouteBefore = ({ pathname, meta }) => {
  // 动态修改页面title
  if (meta.title !== undefined) {
    document.title = meta.title;
  }
  // 判断未登录跳转登录页
  // if (meta.needLogin) {
  //   if (!isLogin) {
  //     return "/login";
  //   }
  // }
};

export { routes, onRouteBefore };
