/*
 * @description: 路由统一管理
 * @Date: 2022-02-07 11:24:29
 * @LastEditTime: 2022-02-07 21:27:38
 * @Author: xingheng
 */
// 全局路由配置
const routes = [
  {
    path: "/",
    redirect: "/portal",
  },
  {
    path: "/",
    component: () => import("pages/portal"),
    meta: {
      title: "首页",
      needLogin: true,
    },
    children: [
      {
        path: "portal",
        component: () => import("pages/portal/home-index"),
        meta: {
          title: "首页",
          needLogin: false,
        },
      },
      {
        path: "ancientpoetry",
        component: () => import("pages/portal/ancient-poetry"),
        meta: {
          title: "古诗词",
          needLogin: false,
        },
      },
      {
        path: "addpoem",
        component: () => import("components/NoData/DevContainer"),
        meta: {
          title: "诗词录入",
          needLogin: true,
        },
      },
    ],
  },
  {
    path: "/projectlist",
    component: () => import("pages/learn-pages/project-list"),
    meta: {
      title: "项目列表",
      needLogin: false,
    },
  },
  {
    path: "*",
    component: () => import("pages/error/page404"),
    meta: {
      title: "404",
    },
  },
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
