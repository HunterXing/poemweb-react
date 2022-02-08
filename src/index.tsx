import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import CommonFooter from "components/CommonFooter";
import styled from "@emotion/styled";

const ContainWrap = styled.div`
  min-height: 100vh;
`;

ReactDOM.render(
  <React.StrictMode>
    <Fragment>
      <ContainWrap>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ContainWrap>
      <CommonFooter />
    </Fragment>
  </React.StrictMode>,
  document.getElementById("root")
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
