/*
 * @description: 路由统一管理
 * @Date: 2022-02-07 11:24:29
 * @LastEditTime: 2022-05-02 21:44:14
 * @Author: xingheng
 */
// 全局路由配置
const routes = [
  {
    path: "/",
    redirect: "/portal",
  },
  {
    path: "/login",
    component: () => import("pages/login"),
    meta: {
      title: "登录页",
      needLogin: false,
    },
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
        children: [
          {
            path: "",
            component: () => import("pages/portal/ancient-poetry/AncientData"),
          },
          {
            path: "list",
            component: () => import("pages/portal/ancient-poetry/AncientList"),
          },
          {
            path: "detail",
            component: () => import("pages/portal/ancient-poetry/PoemDetail"),
          },
        ],
      },
      {
        path: "addpoem",
        component: () => import("components/NoData/DevContainer"),
        meta: {
          title: "诗词录入",
          needLogin: true,
        },
      },
      {
        path: "poemtest",
        component: () => import("components/NoData/DevContainer"),
        meta: {
          title: "诗词测试",
          needLogin: true,
        },
      },
      {
        path: "searchrank",
        component: () => import("components/NoData/DevContainer"),
        meta: {
          title: "检索排行",
          needLogin: false,
        },
      },
      {
        path: "poetrank",
        component: () => import("components/NoData/DevContainer"),
        meta: {
          title: "诗人排行",
          needLogin: false,
        },
      },
      {
        path: "poetdetail",
        component: () => import("components/NoData/DevContainer"),
        meta: {
          title: "诗人风采",
          needLogin: false,
        },
      },
      {
        path: "poetstory",
        component: () => import("components/NoData/DevContainer"),
        meta: {
          title: "诗人轶事",
          needLogin: false,
        },
      },
      {
        path: "poemallusion",
        component: () => import("components/NoData/DevContainer"),
        meta: {
          title: "诗词典故",
          needLogin: false,
        },
      },
      {
        path: "poemdiscuss",
        component: () => import("components/NoData/DevContainer"),
        meta: {
          title: "精选点评",
          needLogin: false,
        },
      },
      {
        path: "listenpoem",
        component: () => import("components/NoData/DevContainer"),
        meta: {
          title: "坐听诗语",
          needLogin: false,
        },
      },
      {
        path: "activity",
        component: () => import("components/NoData/DevContainer"),
        meta: {
          title: "官方活动",
          needLogin: false,
        },
      },
      {
        path: "poemnews",
        component: () => import("components/NoData/DevContainer"),
        meta: {
          title: "诗讯列表",
          needLogin: false,
        },
      },
      {
        path: "poemnewsadd",
        component: () => import("components/NoData/DevContainer"),
        meta: {
          title: "诗讯投稿",
          needLogin: false,
        },
      },
    ],
  },
  {
    path: "search/*",
    component: () => import("pages/portal/search"),
    meta: {
      title: "诗词搜索",
      needLogin: false,
    },
  },
  {
    path: "test/*",
    component: () => import("pages/test"),
    meta: {
      title: "测试页面",
      needLogin: false,
    },
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
