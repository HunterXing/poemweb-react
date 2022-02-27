import { Button, Form, Input, message } from "antd";
import styled from "@emotion/styled";
import { useState } from "react";
import http from "api/http";
import { useNavigate } from "react-router-dom";
import { to } from "await-to-js";

interface ResponseProps<T> {
  code: number;
  data: T;

  message: string;
}

const LoginScreen = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  /**
   * @description: 登录表单提交
   */
  const onSubmit = async () => {
    let [err, response] = await to(
      http.post("/user/login", {
        ...form,
      })
    );
    if (!err && response?.data) {
      message.success("登录成功", 1, () => {
        navigate("/");
      });
    } else {
      if (!err) message.error("登录失败");
    }
  };

  return (
    <Container>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input
            onChange={(e) => setForm({ ...form, username: e.target.value })}
          />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit" onClick={onSubmit}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Container>
  );
};

const Container = styled.div`
  width: 80%;
  min-width: 1200px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default LoginScreen;
