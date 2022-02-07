/*
 * @description: 门户导航containter
 * @Date: 2022-02-02 23:58:17
 * @LastEditTime: 2022-02-07 14:27:12
 * @Author: xingheng
 */

import styled from "@emotion/styled";
import { Fragment } from "react";
import { Route, Routes, Navigate } from "react-router";
import { BrowserRouter as Router, Link } from "react-router-dom";
import AncientPoetry from "../ancient-poetry/index";
const Container = styled.div`
  position: relative;
  width: 85%;
  min-width: 120rem;
  background: #fff;
  margin: 0 auto;
  padding: 1rem;
`;

const RouterListWrap = styled.div`
  background: #f7f7f7;
  min-height: 9rem;
  display: flex;
  justify-content: space-around;
`;

const RouterListItemWrap = styled.div`
  width: 20%;
  display: flex;
  align-items: center;
`;

const LeftName = styled.div`
  width: 6rem;
  height: 9rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #000;
  font-weight: bold;
  font-size: 1.8rem;
`;

const RightRouters = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  padding: 1rem;
  height: 7rem;
`;

const RouterLink = styled(Link)`
  display: inline-block;
  width: 42%;
  font-size: 1.6rem;
  cursor: pointer;
  color: #000;
`;

export const routerList = [
  {
    name: "诗词",
    children: [
      {
        name: "古代诗词",
        path: "ancientpoetry",
        element: AncientPoetry,
      },
      {
        name: "诗词录入",
        path: "",
        element: AncientPoetry,
      },
      {
        name: "诗词测试",
        path: "",
        element: AncientPoetry,
      },
      {
        name: "检索排行",
        path: "",
        element: AncientPoetry,
      },
    ],
  },
  {
    name: "诗人",
    children: [
      {
        name: "诗人排行",
        path: "",
        element: AncientPoetry,
      },
      {
        name: "诗人风采",
        path: "",
        element: AncientPoetry,
      },
      {
        name: "诗人轶事",
        path: "",
        element: AncientPoetry,
      },
    ],
  },
  {
    name: "诗韵",
    children: [
      {
        name: "诗词典故",
        path: "",
        element: AncientPoetry,
      },
      {
        name: "精选点评",
        path: "",
        element: AncientPoetry,
      },
      {
        name: "坐听诗语",
        path: "",
        element: AncientPoetry,
      },
    ],
  },
  {
    name: "诗讯",
    children: [
      {
        name: "官方活动",
        path: "",
        element: AncientPoetry,
      },
      {
        name: "诗讯列表",
        path: "",
        element: AncientPoetry,
      },
      {
        name: "诗讯投稿",
        path: "",
        element: AncientPoetry,
      },
    ],
  },
];

const NavContainer = () => {
  return (
    <Fragment>
      <Container>
        <RouterListWrap>
          <RouterList list={routerList} />
        </RouterListWrap>
      </Container>
    </Fragment>
  );
};

// @ts-ignore
const RouterList = ({ list }) => {
  return (
    <Fragment>
      {list.map(
        (router: { name: string; children: Array<any> }, index: number) => (
          <RouterListItemWrap key={index}>
            <LeftName>{router.name}</LeftName>
            <RightRouters>
              {router.children.map((_router, _index: number) => (
                <RouterLink to={_router.path} key={_index}>
                  {_router.name}
                </RouterLink>
              ))}
            </RightRouters>
          </RouterListItemWrap>
        )
      )}
    </Fragment>
  );
};
export default NavContainer;
