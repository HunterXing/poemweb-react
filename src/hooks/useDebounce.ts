/*
 * @description: 防抖hooks
 * @Author: xingheng
 */

import { useEffect, useState } from "react";

const useDebounce = <T>(value: T, delay: number = 500) => {
  // 分析: 在一定时间内，快速执行一个函数，只执行一次
  /**
   * 利用闭包知识
   */
  const [debounceValue, setDebounceValue] = useState(value);

  useEffect(() => {
    // 每次在value变化的时候，设置一个定时器
    const timeout = setTimeout(() => setDebounceValue(value), delay);
    // 每次在上一次 useEffect处理完之后再运行
    return () => clearTimeout(timeout);
  }, [value]);

  // const debounce = (func: () => any, delay: number) => {
  //   let timeout: NodeJS.Timeout;
  //   return () => {
  //     if (timeout) {
  //       clearTimeout(timeout);
  //     } else {
  //       timeout = setTimeout(() => {
  //         func();
  //       }, delay);
  //     }
  //   };
  return debounceValue;
};

export default useDebounce;
