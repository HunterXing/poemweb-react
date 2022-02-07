/*
 * @description: 诗词网门户首页
 * @Date: 2022-02-02 23:17:45
 * @LastEditTime: 2022-02-07 14:23:30
 * @Author: xingheng
 */

import PortalHeader from "./components/PortalHeader";
import NavContainer from "./components/NavContainer";
import { Fragment } from "react";
import { Outlet } from "react-router-dom";
const PortalHome = () => {
  return (
    <Fragment>
      {/* 头部搜索 */}
      <PortalHeader />
      {/* 导航 */}
      <NavContainer />
      <Outlet />
    </Fragment>
  );
};

export default PortalHome;
