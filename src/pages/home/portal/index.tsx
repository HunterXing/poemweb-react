/*
 * @description: 诗词网门户首页
 * @Date: 2022-02-02 23:17:45
 * @LastEditTime: 2022-02-03 00:03:05
 * @Author: xingheng
 */

import { Fragment } from "react";

import PortalHeader from "./components/PortalHeader";
import NavContainer from "./components/NavContainer";
const PortalHome = () => {
  return (
    <Fragment>
      {/* 头部搜索 */}
      <PortalHeader />
      {/* 导航 */}
      <NavContainer />
    </Fragment>
  );
};

export default PortalHome;
