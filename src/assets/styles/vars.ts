/*
 * @description: 全局css in js 及函数变量
 * @Date: 2022-05-01 16:31:26
 * @Author: xingheng
 */
import { random } from "lodash";

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
    -webkit-box-orient: vertical
  `;
};

export const setRadomBgImg = (end = 5): string => {
  const imgArr = [
    "http://poem.notfound404.cn/poem/image/default-poem-detail-img.jpg",
    "http://poem.notfound404.cn/img/20191230153102.png",
    "http://poem.notfound404.cn/img/20191230153402.png",
    "http://poem.notfound404.cn/img/20191230153735.png",
    "http://poem.notfound404.cn/img/20191230153812.png",
    "http://poem.notfound404.cn/img/20191230153908.png",
    "https://www.zgshige.com//upload/resources/image/2022/04/22/373461_180x180c.jpg",
    "https://www.zgshige.com/upload/resources/image/2022/04/19/373298_40x40c.jpg",
  ];
  return `
    ${imgArr[random(0, end)]}
  `;
};
