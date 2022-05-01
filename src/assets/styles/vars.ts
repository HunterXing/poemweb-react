/*
 * @description: 全局css in js 及函数变量
 * @Date: 2022-05-01 16:31:26
 * @Author: xingheng
 */

// 颜色
export const primaryColor = "#ae1e03";

// 字体
export const defaultFont = "1.4rem";

// 边距
export const defaultMargin = "1.5rem";
export const defaultPadding = defaultMargin;

// 函数
/**
 * @description: 多行省略，默认一行
 * @param {*}
 * @return {*}
 */
export const setEllipsis = (line = 1): string => {
  return `
    overflow : hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: ${line};
    -webkit-box-orient: vertical;
  `;
};
