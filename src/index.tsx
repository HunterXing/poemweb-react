import "./wdyr";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import CommonFooter from "components/CommonFooter";
import styled from "@emotion/styled";
import { QueryClient, QueryClientProvider } from "react-query";
// import "http://at.alicdn.com/t/font_3370713_eyn2i9rtrbe.css";
const ContainWrap = styled.div`
  min-height: 100vh;
`;

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={new QueryClient()}>
      <ContainWrap>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ContainWrap>
    </QueryClientProvider>
    <CommonFooter />
  </React.StrictMode>,
  document.getElementById("root")
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
