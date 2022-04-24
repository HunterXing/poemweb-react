/*
 * @description: 首页默认路由页面
 * @Date: 2022-02-06 22:36:09
 * @LastEditTime: 2022-04-24 22:37:35
 * @Author: xingheng
 */

import styled from "@emotion/styled";
import { PlayCircleOutlined } from "@ant-design/icons";
import { useRecomendAncient } from "api/poemApi";
import { Poem } from "types/Poem";

const PortalFirst = () => {
  return (
    <div className="container">
      <PortalAncientRecommend />
    </div>
  );
};

const PortalAncientRecommend = () => {
  const { data: poems } = useRecomendAncient();
  const topRecomend = (poems ? poems[0] : {}) as Poem;
  const otherRecomend = poems ? [...poems].slice(1, poems.length) : [];
  return (
    <>
      <TitleImgWrap>
        <img src="http://poem.notfound404.cn/title-shici.png" alt="title" />
      </TitleImgWrap>
      <AncientPoetryWrapper>
        <TilteWrapper>
          <TitleSpan>
            每日古辞推荐<GraySpan>每日凌晨一点更新</GraySpan>
          </TitleSpan>
          <MoreText>更多&gt;&gt;</MoreText>
        </TilteWrapper>
        <TilteWrapper>
          <TitleSpan>
            听诗<GraySpan>每日凌晨一点更新</GraySpan>
          </TitleSpan>
          <MoreText>更多&gt;&gt;</MoreText>
        </TilteWrapper>
        <AncientContent>
          <AncientContentLeft></AncientContentLeft>
          <AncientContentRightItem>
            <div className={"poem-title"}>{topRecomend?.title}</div>
          </AncientContentRightItem>
          <AncientContentRightItem>
            <span className={"poem-author"}>作者：{topRecomend?.author}</span>
          </AncientContentRightItem>
          <AncientContentRightContent>
            {topRecomend?.content}
          </AncientContentRightContent>
        </AncientContent>
        <ListenPoemWrapper>
          <div className={"listen-left"}>
            <img
              src="http://poem.notfound404.cn/img/20191230153735.png"
              alt="title"
            />
            <div>《小桃源诗 二》</div>
            <div>作者：雍陶</div>
          </div>
          <RightListWrap>
            {otherRecomend?.map((poem) => (
              <div className={"list-group-item"}>
                <img
                  src="http://poem.notfound404.cn/img/20191230153735.png"
                  alt=""
                />
                <span className="poem-name"> 《{poem.title}》</span>

                <PlayCircleOutlined />
              </div>
            ))}
          </RightListWrap>
        </ListenPoemWrapper>
      </AncientPoetryWrapper>
    </>
  );
};

const TitleImgWrap = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 8rem;
`;

const AncientPoetryWrapper = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  grid-template-rows: 6rem 27rem;
`;

const TilteWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0.5rem;
  border-top: 2px solid #f1f1f1;
  border-bottom: 2px solid #f1f1f1;
`;

const TitleSpan = styled.span`
  font-size: 1.8rem;
  font-weight: bold;
`;

const GraySpan = styled.span`
  font-size: 1rem;
  color: #ccc;
  margin-left: 20px;
`;

const MoreText = styled.span`
  font-size: 1.4rem;
  cursor: pointer;
`;

const AncientContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 25rem;
  padding: 2rem 0;
  column-gap: 2rem;
  box-sizing: border-box;
`;

const AncientContentLeft = styled.div`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 6;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url("http://poem.notfound404.cn/img/20191230153102.png");
`;

const AncientContentRightItem = styled.div`
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: span 1;

  .poem-title {
    font-size: 1.8rem;
    font-weight: bold;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box; /* 将对象作为弹性伸缩盒子模型显示 */
    -webkit-line-clamp: 2; /* 控制最多显示几行 */
    -webkit-box-orient: vertical; /* 设置或检索伸缩盒对象的子元素的排列方式 */
  }

  .poem-author {
    font-size: 1.4rem;
    color: #999;
  }
`;

const AncientContentRightContent = styled.div`
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: span 3;
  font-size: 1.6rem;
`;

const ListenPoemWrapper = styled.div`
  display: grid;
  grid-template-columns: 180px auto;
  padding: 2rem;
  column-gap: 1rem;
  .listen-left {
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
      width: 17rem;
      height: 17rem;
      border-radius: 50%;
    }
  }
`;

const RightListWrap = styled.div`
  border: 0.1rem solid #e8e8e8;
  border-radius: 0.8rem;
  border-bottom: 0;

  .list-group-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 4.5rem;
    line-height: 4.5rem;
    border-bottom: 0.1rem solid #e8e8e8;
    padding: 1rem;

    .poem-name {
      flex: 1;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
    }

    img {
      width: 3.8rem;
      height: 3.8rem;
      border-radius: 50%;
    }
  }
`;

export default PortalFirst;
