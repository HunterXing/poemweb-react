/*
 * @description: 404页面
 * @Date: 2022-02-07 21:40:42
 * @LastEditTime: 2022-02-07 22:54:58
 * @Author: xingheng
 */

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Row, Col, Button } from "antd";
import { RollbackOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";

import useInterval from "hooks/useInterval";
import gif404 from "assets/images/404.gif";

const MyLayout = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Container = styled.div`
  width: 800px;
  height: 43rem;
`;

const Page404 = () => {
  let [time, setTime] = useState(5);
  const navigate = useNavigate();

  useInterval(() => {
    if (time > 1) {
      setTime(time - 1);
    } else {
      navigate("/");
    }
  }, 1000);

  /**
   * @description: 跳转到首页
   */
  const goHome = () => {
    navigate("/");
  };

  return (
    <MyLayout>
      <Container>
        <Row>
          <Col span={14}>
            <Button type="primary" onClick={goHome} icon={<RollbackOutlined />}>
              返回 {time}秒后自动返回首页）
            </Button>
            <br />
            <br />
            <h1>暮然回首 ，</h1>
            <h1>那人却在灯火阑珊处</h1>
            <h2>你访问的页面不存在</h2>
          </Col>
          <Col span={10}>
            <img src={gif404} alt="404" />
          </Col>
        </Row>
      </Container>
    </MyLayout>
  );
};

export default Page404;
