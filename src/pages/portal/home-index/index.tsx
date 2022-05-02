/*
 * @description: 首页默认路由页面
 * @Date: 2022-02-06 22:36:09
 * @LastEditTime: 2022-05-01 16:49:36
 * @Author: xingheng
 */

import styled from "@emotion/styled";
import { PlayCircleOutlined } from "@ant-design/icons";
import { useRecomendAncient } from "api/poemApi";
import { Poem } from "types/Poem";
import { useNavigate } from "react-router-dom";
import { setEllipsis, setRadomBgImg } from "assets/styles/vars";
const PortalFirst = () => {
  return (
    <div className="container">
      <PortalAncientRecommend />
    </div>
  );
};

const PortalAncientRecommend = () => {
  const navigate = useNavigate();
  const { data: poems } = useRecomendAncient();
  const topRecomend = (poems ? poems[0] : {}) as Poem;
  const secondRecomend = (poems ? poems[1] : {}) as Poem;
  const otherRecomend = poems ? [...poems].slice(2, poems.length) : [];

  // 去诗词详情页
  const goDetail = (id: string) => {
    navigate(`/ancientpoetry/detail?id=${id}`);
  };

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
        <AncientContent
          className={"pointer"}
          onClick={() => goDetail(topRecomend?.poem_id)}
        >
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
          <div
            className={"listen-left pointer"}
            onClick={() => goDetail(secondRecomend.poem_id)}
          >
            <img src={setRadomBgImg(4)} alt="title" />
            <div>《{secondRecomend.title}》</div>
            <div>作者：{secondRecomend.author}</div>
          </div>
          <RightListWrap>
            {otherRecomend?.map((poem) => (
              <div
                className={"list-group-item pointer"}
                onClick={() => goDetail(poem.poem_id)}
                key={poem.poem_id}
              >
                <img src={setRadomBgImg(4)} alt="" />
                <span className="poem-name">
                  {" "}
                  《{poem.title || poem.chapter}》
                </span>
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
  background-image: url(${setRadomBgImg(7)});
`;

const AncientContentRightItem = styled.div`
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: span 1;

  .poem-title {
    font-size: 1.8rem;
    font-weight: bold;
    ${setEllipsis(2)}
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
    height: 5.6rem;
    line-height: 4.5rem;
    border-bottom: 0.1rem solid #e8e8e8;
    padding: 1rem;
    cursor: pointer;

    .poem-name {
      flex: 1;
      ${setEllipsis()}
    }

    img {
      width: 3.8rem;
      height: 3.8rem;
      border-radius: 50%;
    }
  }
`;

export default PortalFirst;
