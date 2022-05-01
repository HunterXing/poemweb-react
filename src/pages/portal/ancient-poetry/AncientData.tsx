/*
 * @description:
 * @Date: 2022-04-24 23:21:01
 * @Author: xingheng
 */
import { Suspense } from "react";
import WordCloud from "./WordCloud";
// import http from "api/http";
import styled from "@emotion/styled";
import ScrollList from "./ScrollList";
import Loading from "components/Loading";
import { usePoemCount } from "api/poemApi";
import { Outlet, useNavigate } from "react-router-dom";
import { containterCommon } from "assets/styles/vars";
import { Tag } from "antd";
import { sample } from "lodash";
import { LiteralUnion } from "antd/lib/_util/type";
import { PresetColorType, PresetStatusColorType } from "antd/lib/_util/colors";

const AncientData = () => {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <WordContent />
      </Suspense>
    </>
  );
};

const WordContent = () => {
  // const [count, setCount] = useState(0);
  const { data: words, isLoading } = usePoemCount();
  const count = words?.length;
  const navigate = useNavigate();
  return (
    <>
      {isLoading ? (
        <Loading height={"50rem"} size={"large"} />
      ) : (
        <>
          <Container>
            <LeftList>
              <p>
                中华诗词网现已收录 古代诗词共计 <RedText>{count}</RedText>{" "}
                首，其中
              </p>
              <ScrollList list={words} />
              <p>
                号召各位诗词爱好者对网站的内容进行修订，共同保护中华文化的瑰宝。
              </p>
            </LeftList>
            <WordCloud words={words} />
          </Container>
          <TagWrap>
            <h3>点击下方标签可进入查看相应类别诗词</h3>
            {words?.map((poemClass) => (
              <Tag
                key={poemClass.name}
                className={"pointer"}
                color={
                  sample([
                    "geekblue",
                    "green",
                    "purple",
                    "volcano",
                    "orange",
                    "gold",
                    "lime",
                    "pink",
                  ]) as LiteralUnion<
                    PresetColorType | PresetStatusColorType,
                    string
                  >
                }
                onClick={() => {
                  navigate(`list?classify=${poemClass.name}`);
                }}
              >
                {poemClass.name}
              </Tag>
            ))}
          </TagWrap>
          <Outlet />
        </>
      )}
      <Outlet />
    </>
  );
};

const Container = styled.div`
  width: 85%;
  padding: 1rem;
  margin: 0 auto 1rem;
  min-width: 120rem;
  border: 0.1rem solid #ccc;
  border-radius: 0.6rem;
  min-height: 20rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  font-size: 1.6rem;
`;

const TagWrap = styled.div`
  ${containterCommon};
`;

const LeftList = styled.div``;

const RedText = styled.span`
  color: #ae1e04;
  font-size: 1.8rem;
  font-weight: bold;
  font-style: italic;
`;

export default AncientData;
