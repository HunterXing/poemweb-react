/*
 * @description: 封装工具函数fn
 * @Date: 2022-02-07 13:45:29
 * @LastEditTime: 2022-05-02 20:26:37
 * @Author: xingheng
 */
import { Suspense, lazy } from "react";
import { Navigate } from "react-router-dom";
import Guard from "./guard";

import Loading from "components/Loading";

/**
 * @description: 路由懒加载
 */
function lazyLoad(importFn, meta) {
  meta = meta || {};
  const Element = lazy(importFn);
  const lazyElement = (
    <Suspense fallback={<Loading size={"large"} />}>
      <Element _meta={meta} />
    </Suspense>
  );
  return <Guard element={lazyElement} meta={meta} />;
}

/**
 * @description: 设置路由导航守卫函数
 */
let handleRouteBefore = null;
function setRouteBefore(fn) {
  handleRouteBefore = fn;
}
function getRouteBefore() {
  return handleRouteBefore;
}

/**
 * @description: 路由配置列表数据转换
 */
function transformRoutes(routes) {
  const list = [];
  routes.forEach((route) => {
    const obj = { ...route };
    if (obj.redirect) {
      obj.element = <Navigate to={obj.redirect} />;
    }
    if (obj.component) {
      obj.element = lazyLoad(obj.component, obj.meta);
    }
    delete obj.redirect;
    delete obj.component;
    delete obj.meta;
    if (obj.children) {
      obj.children = transformRoutes(obj.children);
    }
    list.push(obj);
  });
  return list;
}

export { transformRoutes, setRouteBefore, getRouteBefore };
