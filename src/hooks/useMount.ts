/*
 * @description: 组件挂载后的自定义hooks
 * @Author: xingheng
 */

import { useEffect, useRef } from "react";

const useMount = (callback: () => any) => {
  useEffect(() => {
    callback();
  }, []);
};

export default useMount;
