/*
 * @description: 古诗词列表.tsx
 * @Date: 2022-05-01 18:16:18
 * @Author: xingheng
 */

import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { usePoemListByClassify } from "api/poemApi";
import Loading from "components/Loading";
import { Container, LeftImgWrap, RightPoemWrap } from "./PoemDetail";
import { Poem } from "types/Poem";
import { PaginationProps } from "types/Page";
import { Input } from "antd";
import { ReloadOutlined, LoadingOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";
import { greenColor } from "assets/styles/vars";

const AncientList = () => {
  const [searchParams] = useSearchParams();
  const [pageIndex, setPageIndex] = useState(1);
  const [poemList, setPoemList] = useState<Poem[]>([]);
  const classify = searchParams.get("classify") || ""; // 获得诗词的类别
  const { data, isLoading } = usePoemListByClassify({
    classify,
    pageIndex,
    pageSize: 10,
  });
  const { result: poemListRaw, pagination } = data || {};
  // setPoemList(poemListRaw || []);
  // setPoemList(poemListRaw || []);
  useEffect(() => {
    setPoemList([...poemList, ...(poemListRaw || [])]);
    let ele = document.getElementById("poemList") as HTMLElement;
    ele.scrollTop = ele?.scrollHeight;
  }, [classify, poemListRaw]);

  return (
    <PoemListContent
      poemList={poemList}
      classify={classify}
      pagination={pagination}
      setPageIndex={setPageIndex}
      isLoading={isLoading}
    />
  );
};

const PoemListContent = ({
  poemList,
  classify,
  pagination,
  setPageIndex,
  isLoading,
}: {
  poemList: Poem[] | undefined;
  classify: string;
  pagination: PaginationProps | undefined;
  setPageIndex: (pageIndex: number) => void;
  isLoading: boolean;
}) => {
  const navigate = useNavigate();
  const getListMore = (current = 1) => {
    setPageIndex(current + 1);
  };
  return (
    <Container>
      <LeftImgWrap />
      <RightPoemListWrap>
        <h1 className="title-font">{classify}</h1>
        <div className="border-bottom-line"></div>
        <div className="clearfix author-container">
          <div className="fl pointer">
            <Input className="poemlist-input" placeholder="请输入诗词名称" />
          </div>
          <div className="fr">
            <span className="author-text pointer total-text">
              共{pagination?.totalCount}首
            </span>
          </div>
        </div>
        <div className="content-warp pointer" id={"poemList"}>
          {!isLoading ? (
            poemList?.map((poem) => (
              <div
                className="clearfix"
                key={poem.id}
                onClick={() => {
                  navigate(`/ancientpoetry/detail?id=${poem.id}`);
                }}
              >
                —&nbsp;
                <span className={"poem-author"}>{poem.author}</span>
                &nbsp;
                <span className="poem-title">{poem.title}</span>
              </div>
            ))
          ) : (
            <Loading height={"200px"} />
          )}
        </div>
        <div className="poem-detail-bottom-wrap">
          <div
            className={"more pointer"}
            onClick={() => getListMore(pagination?.pageIndex)}
          >
            {isLoading ? (
              <LoadingOutlined />
            ) : (
              <>
                <ReloadOutlined /> 点击加载更多
              </>
            )}
          </div>
          <div className={"pointer"}>返回诗词分类</div>
        </div>
      </RightPoemListWrap>
    </Container>
  );
};

const RightPoemListWrap = styled(RightPoemWrap)`
  font-size: 1.6rem;
  .poem-author {
    font-size: 1.6rem;
  }
  .poem-title {
    font-size: 1.6rem;
    color: ${greenColor};
  }
  .content-warp {
    height: 25rem;
  }
  .more {
    color: ${greenColor};
  }
`;

export default AncientList;
