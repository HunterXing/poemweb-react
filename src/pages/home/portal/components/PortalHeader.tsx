/*
 * @description: 门户头部
 * @Date: 2022-02-02 23:51:21
 * @LastEditTime: 2022-02-07 14:25:29
 * @Author: xingheng
 */
import { Fragment } from "react";
import styled from "@emotion/styled";
import { Input, Button } from "antd";
import { Link } from "react-router-dom";

const { Search } = Input;
const Header = styled.div`
  display: flex;
  align-items: center;
  height: 14rem;
  border-bottom: 0.5rem solid #ae1e03;
  position: relative;
  width: 85%;
  min-width: 120rem;
  background: #fff;
  margin: 0 auto;
  padding: 1rem;
`;

const ImageLogo = styled.div`
  background-image: url("http://poem.notfound404.cn/logo2.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
  display: inline-block;
  line-height: 11rem;
  width: 15rem;
  height: 11rem;
`;

const ImageLogoSecond = styled.div`
  background-image: url("http://poem.notfound404.cn/logo3.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
  display: inline-block;
  line-height: 11rem;
  width: 41rem;
  height: 4.5rem;
  margin-left: 1rem;
`;

const SearchPoem = styled(Search)`
  margin-left: 2rem;
`;

const ButtonWrapper = styled.div`
  position: absolute;
  right: 0;
  width: 15rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const PortalHeader = () => {
  return (
    <Fragment>
      <Header>
        <Link to={"/"}>
          <ImageLogo />
        </Link>
        <ImageLogoSecond />
        <SearchPoem
          placeholder="全局搜索诗词 "
          onSearch={onSearch}
          style={{ width: 300 }}
          size={"large"}
          allowClear
        />
        <ButtonWrapper>
          <Button type="primary" size="large">
            登录
          </Button>
          <Button type="default" size="large">
            注册
          </Button>
        </ButtonWrapper>
      </Header>
    </Fragment>
  );
};

const onSearch = () => {};

export default PortalHeader;
