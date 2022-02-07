/*
 * @description: 空数据/正在开发等异常组件
 * @Date: 2022-02-07 17:48:07
 * @LastEditTime: 2022-02-07 21:25:25
 * @Author: xingheng
 */
import styled from "@emotion/styled";
import DevImg from "assets/images/dev_img.png";

const Container = styled.div`
  min-height: calc(100vh - 25rem);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const DevContainer = styled.div`
  width: 48rem;
  height: 23.3rem;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(${DevImg});
`;

const DevComponent = () => {
  return (
    <Container>
      <DevContainer />
    </Container>
  );
};

export default DevComponent;
