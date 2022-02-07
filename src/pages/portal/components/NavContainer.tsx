/*
 * @description: 门户导航containter
 * @Date: 2022-02-02 23:58:17
 * @LastEditTime: 2022-02-07 21:16:20
 * @Author: xingheng
 */

import styled from "@emotion/styled";
import { Fragment } from "react";
import { NavLink } from "react-router-dom";

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

const RouterLink = styled(NavLink)`
  display: inline-block;
  width: 42%;
  text-align: center;
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
      },
      {
        name: "诗词录入",
        path: "addpoem",
      },
      {
        name: "诗词测试",
        path: "",
      },
      {
        name: "检索排行",
        path: "",
      },
    ],
  },
  {
    name: "诗人",
    children: [
      {
        name: "诗人排行",
        path: "",
      },
      {
        name: "诗人风采",
        path: "",
      },
      {
        name: "诗人轶事",
        path: "",
      },
    ],
  },
  {
    name: "诗韵",
    children: [
      {
        name: "诗词典故",
        path: "",
      },
      {
        name: "精选点评",
        path: "",
      },
      {
        name: "坐听诗语",
        path: "",
      },
    ],
  },
  {
    name: "诗讯",
    children: [
      {
        name: "官方活动",
        path: "",
      },
      {
        name: "诗讯列表",
        path: "",
      },
      {
        name: "诗讯投稿",
        path: "",
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
interface LinkProps {
  isActive: boolean;
}
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
                <RouterLink
                  to={_router.path}
                  key={_index}
                  style={({ isActive }: LinkProps) => ({
                    color: isActive ? "#ae1e03" : "",
                    borderBottom: isActive
                      ? "1px solid #ae1e03"
                      : "1px solid #f7f7f7",
                  })}
                >
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
