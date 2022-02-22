/*
 * @description: Loading 加载
 * @Date: 2022-02-07 14:46:40
 * @LastEditTime: 2022-02-07 15:12:58
 * @Author: xingheng
 */

import styled from "@emotion/styled";
import { Spin, SpinProps } from "antd";

const Container = styled.div<{
  h?: string;
}>`
  width: 100%;
  height: ${(props) => props.h || "100vh"};
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export interface LoadingProps extends SpinProps {
  heigth?: string;
}

const Loading = ({ ...props }: LoadingProps) => {
  return (
    <Container h={props.heigth}>
      <Spin size={props.size} />
    </Container>
  );
};

export default Loading;
