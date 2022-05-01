/*
 * @description: 古代诗词详情页面
 * @Date: 2022-04-24 22:42:39
 * @Author: xingheng
 */
import styled from "@emotion/styled";
import { useAncientDetail } from "api/poemApi";
import { defaultMargin, primaryColor } from "assets/styles/vars";
import Loading from "components/Loading";
import { useSearchParams } from "react-router-dom";
import { Poem } from "types/Poem";
const PoemDetail = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id") || ""; // 获得诗词的id

  const { data: ancient, isLoading } = useAncientDetail({
    id,
    isAncient: true,
  });

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        ancient && <PoemDetailContent ancient={ancient} />
      )}
    </>
  );
};

const PoemDetailContent = ({ ancient }: { ancient: Poem }) => {
  return (
    <Container>
      <LeftImgWrap />
      <RightPoemWrap>
        <h1 className="title-font">{ancient.title}</h1>
        <div className="border-bottom-line"></div>
        <div className="clearfix author-container">
          <div className="fl pointer">
            <span className="iconfont icon-sound"></span>
          </div>
          <div className="fl" style={{ marginLeft: "15px" }}>
            <span>热度：{ancient.hot}</span>
          </div>
          <div className="fr">
            <span className="author-text pointer">作者：{ancient.author}</span>
          </div>
        </div>
        <div
          className="content-warp"
          dangerouslySetInnerHTML={{
            __html: ancient.content.replaceAll(/。/g, "。<br />"),
          }}
        ></div>
        <div className="poem-detail-bottom-wrap clearfix">
          <div className="fl pointer">返回上一层</div>
          <div className="fr pointer">
            <span className="iconfont icon-info-circle">纠错</span>
          </div>
          <div className="fr pointer">
            <span className="iconfont icon-message message">10</span>
          </div>
        </div>
      </RightPoemWrap>
      {/* {ancient.title} */}
    </Container>
  );
};

const Container = styled.div`
  width: 85%;
  margin: 1rem auto;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  background-image: url("http://poem.notfound404.cn/poem/image/he.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: 100% 100%;
`;

const LeftImgWrap = styled.div`
  width: 48%;
  height: 48rem;
  background-image: url("http://poem.notfound404.cn/img/20191230153812.png");
  background-size: cover;
`;

const RightPoemWrap = styled.div`
  height: 48rem;
  width: 48%;
  padding: 1.4rem;
  background: #fff;
  opacity: 0.8;
  border: 0.1rem solid #ccc;
  overflow: hidden;

  .title-font {
    padding: 2rem 0 0;
    font-size: 3rem;
    font-weight: bold;
  }
  .border-bottom-line {
    border-bottom: 3px solid #000;
    width: 100px;
    margin: 30px 0;
  }

  .author-container {
    height: 20px;
    line-height: 20px;
  }

  .clearfix {
    zoom: 1;
    .fl {
      float: left;
    }

    .fr {
      float: right;
    }
  }
  .clearfix:after {
    display: block;
    content: "";
    clear: both;
  }
  .content-warp {
    line-height: 36px;
    font-size: 20px;
    height: 250px;
    overflow-y: auto;
    margin-top: 15px;
  }
  .poem-detail-bottom-wrap {
    color: ${primaryColor};

    .message {
      margin-right: ${defaultMargin};
    }
  }
`;

export default PoemDetail;
