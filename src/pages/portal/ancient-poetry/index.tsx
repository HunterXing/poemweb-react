/*
 * @description: 古代诗词列表
 * @Date: 2022-02-03 20:26:03
 * @LastEditTime: 2022-04-24 22:02:47
 * @Author: xingheng
 */
import { useState, Suspense } from "react";
import WordCloud from "./WordCloud";
import useMount from "hooks/useMount";
// import http from "api/http";
import styled from "@emotion/styled";
import ScrollList from "./ScrollList";
import Loading from "components/Loading";
import _ from "lodash";
import { usePoemCount } from "api/poemApi";

const AncientPoetry = () => {
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

  return (
    <>
      {isLoading ? (
        <Loading height={"50rem"} size={"large"} />
      ) : (
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
      )}
    </>
  );
};

const Container = styled.div`
  width: 85%;
  min-width: 120rem;
  margin: 0 auto 1rem;
  border: 0.1rem solid #ccc;
  padding: 10px;
  border-radius: 0.6rem;
  min-height: 20rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  font-size: 1.6rem;
`;

const LeftList = styled.div``;

const RedText = styled.span`
  color: #ae1e04;
  font-size: 1.8rem;
  font-weight: bold;
  font-style: italic;
`;

export default AncientPoetry;
