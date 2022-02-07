import "./assets/styles/common.css";
import "antd/dist/antd.less";
import { useRoutes } from "react-router-dom";
import { onRouteBefore, routes } from "./router";
import { setRouteBefore, transformRoutes } from "router/router-guard/fn";

function App() {
  const elements = useRoutes(transformRoutes(routes));
  setRouteBefore(onRouteBefore);

  return elements;
}

export default App;
