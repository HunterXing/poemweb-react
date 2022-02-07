/*
 * @description: 计时器的hooks
 * @Date: 2022-02-07 22:23:20
 * @LastEditTime: 2022-02-07 22:26:32
 * @Author: xingheng
 */

import { useEffect, useRef } from "react";

// @ts-ignore
const useInterval = (callback, delay: number) => {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  });

  // Set up the interval.
  useEffect(() => {
    const tick = () => {
      // @ts-ignore
      savedCallback.current();
    };
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
};

export default useInterval;
