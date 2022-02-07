/*
 * @description: 封装路由容器组件guard
 * @Date: 2022-02-07 13:46:39
 * @LastEditTime: 2022-02-07 14:09:50
 * @Author: xingheng
 */
import { Navigate, useLocation } from "react-router-dom";
import { getRouteBefore } from "./fn";

let temp = null; // 用于防止重复渲染

function Guard({ element, meta }) {
  const location = useLocation();
  const { pathname } = location;
  meta = meta || {};

  const handleRouteBefore = getRouteBefore();
  if (handleRouteBefore) {
    if (temp === element) {
      return element;
    }
    const newPath = handleRouteBefore({ pathname, meta });
    if (newPath && newPath !== pathname) {
      element = <Navigate to={newPath} />;
    }
  }

  temp = element;
  return element;
}

export default Guard;
