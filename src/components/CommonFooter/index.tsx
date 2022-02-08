/*
 * @description: 公共footer
 * @Date: 2022-02-08 22:25:22
 * @LastEditTime: 2022-02-08 22:53:58
 * @Author: xingheng
 */

import styled from "@emotion/styled";
import "./style.less";

const CommonFooter = () => {
  return (
    <FooterWrap>
      <FooterInfoWrap>
        <div className="left-item item">
          <p className="title">版权信息</p>
          <p className="item-text">本站建设为本站管理员所有，不作为商业用途</p>
          <p className="item-text">
            若内容侵犯权益，请联系管理员（xingheng@tom.com）删除
          </p>
          <p>
            <img
              src="http://poem.notfound404.cn/policeLogo.png"
              className="china-emblem-img"
              alt=""
            />
            <span className="item-text color-light-white">
              皖ICP备18018069号
            </span>
          </p>
          <p className="item-text">Copyright © 2022-2023</p>
          <p>
            <span className="title">
              <i className="iconfont xh-yonghu"></i> 后台管理员入口
            </span>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span
              className="a-text item-text"
              style={{ color: "rgb(0, 0, 255)" }}
            >
              点击进入
            </span>
          </p>
        </div>
        <div className="right-item item fr">
          <p className="title">关于我们</p>
          <p className="item-text">
            <i className="iconfont xh-dizhi"></i> 地址
          </p>
          <p className="item-text">
            <i className="iconfont xh-xuefu"></i> 安徽省 芜湖市
            弋江区文津西路8号
          </p>
          <p className="title">
            <i className="iconfont xh-lianxifangshi"></i>联系方式
          </p>
          <p className="item-text">
            <i className="iconfont xh-youxiang">邮箱：xingheng@tom.com</i>
          </p>
          <p>
            <span className="title">
              <i className="iconfont xh-kechenggonggao"></i> 免责申明
            </span>
            <span className="a-text item-text">点击查看详情</span>
          </p>
        </div>
      </FooterInfoWrap>
    </FooterWrap>
  );
};

const FooterWrap = styled.div`
  height: 32rem;
  padding-bottom: 1rem;
  background: #000;
`;

const FooterInfoWrap = styled.div`
  height: 32rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 75%;
  margin: 0 auto;
  color: #fff;
`;

export default CommonFooter;
