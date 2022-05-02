/*
 * @description: 搜索首页
 * @Date: 2022-05-01 22:26:26
 * @Author: xingheng
 */
import { Fragment, useState } from "react";
import PortalHeader from "../components/PortalHeader";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useHotKeywords, useSearchListByName } from "api/poemApi";
import styled from "@emotion/styled";
import {
  containterCommon,
  defaultBorder,
  defaultMargin,
  fontGray,
  primaryColor,
  setEllipsis,
} from "assets/styles/vars";
import { SearchPaginationProps } from "types/Page";
import { Poem } from "types/Poem";
import Loading from "../../../components/Loading";
import { Empty, Pagination, Tag } from "antd";
import { NoData } from "components/NoData/NoData";
import { sample } from "lodash";
import { LiteralUnion } from "antd/lib/_util/type";
import { PresetColorType, PresetStatusColorType } from "antd/lib/_util/colors";

const SearchIndex = () => {
  const [searchParams] = useSearchParams();
  const keyWord = searchParams.get("keyword") || ""; // 获得查询关键字
  const [pageIndex, setPageIndex] = useState(1); // 当前页码
  const [pageSize, setPageSize] = useState(10); // 每页显示条数
  const { data, isLoading } = useSearchListByName({
    keyWord,
    pageIndex,
    pageSize,
  });

  return (
    <Fragment>
      {/* 头部搜索 */}
      <PortalHeader />
      <SearchWrap>
        <SearchList
          keyWord={keyWord}
          data={data}
          isLoading={isLoading}
          pageIndex={pageIndex}
          setPageIndex={setPageIndex}
          setPageSize={setPageSize}
        />
        <SearchHotKeyWords />
      </SearchWrap>
    </Fragment>
  );
};

const SearchList = ({
  keyWord,
  data,
  isLoading,
  pageIndex,
  setPageIndex,
  setPageSize,
}: {
  keyWord: string;
  data:
    | {
        code: number;
        pagination: SearchPaginationProps;
        result_ancient: Poem[];
        result_modern?: Poem[] | undefined;
      }
    | undefined;
  isLoading: boolean;
  pageIndex: number;
  setPageIndex: (pageIndex: number) => void;
  setPageSize: (pageSize: number) => void;
}) => {
  const poemList = data?.result_ancient || [];
  const totalCount = data?.pagination?.result_count_ancient || 0;
  const onPaginationChange = (pageIndex: number, pageSize: number) => {
    setPageIndex(pageIndex);
    setPageSize(pageSize);
  };
  return (
    <SearchListWrap>
      {isLoading ? (
        <Loading height={"calc(100vh - 20rem)"} />
      ) : (
        <>
          {keyWord && (
            <div className={"tabs-warp"}>
              <div className={"poem-total-count-text"}>
                共找到<span className={"red-text"}>“{keyWord}”</span>{" "}
                的相关内容共
                <span className={"red-text"}>
                  {data?.pagination?.result_count_ancient}
                </span>
                个
              </div>
            </div>
          )}
          {totalCount ? (
            <div className="poem-list-wrap">
              {poemList.map((poem) => (
                <PoemItem key={poem.id} poem={poem} keyWord={keyWord} />
              ))}
            </div>
          ) : (
            <NoData description={"暂无数据，请输入其他关键字搜索"} />
          )}
        </>
      )}
      <Pagination
        className={`poem-list-pagination`}
        defaultCurrent={pageIndex}
        total={totalCount}
        showTotal={(total) => `共 ${total} 首`}
        onChange={onPaginationChange}
        size="small"
      />
    </SearchListWrap>
  );
};

const PoemItem = ({ poem, keyWord }: { poem: Poem; keyWord: string }) => {
  const navigate = useNavigate();
  return (
    <PoemItemWrap
      onClick={() => navigate(`/ancientpoetry/detail?id=${poem.id}`)}
    >
      <div
        className={"poem-title"}
        dangerouslySetInnerHTML={{
          __html: (poem?.title || poem?.chapter).replace(
            keyWord,
            `<span class="red-text">${keyWord}</span>`
          ),
        }}
      ></div>
      <div
        className={"poem-content"}
        dangerouslySetInnerHTML={{
          __html: poem.content.replace(
            keyWord,
            `<span class="red-text">${keyWord}</span>`
          ),
        }}
      ></div>
      <div className={"poem-author"}>
        <span
          dangerouslySetInnerHTML={{
            __html: poem.author.replace(
              keyWord,
              `<span class="red-text">${keyWord}</span>`
            ),
          }}
        ></span>{" "}
        - 《
        <span
          dangerouslySetInnerHTML={{
            __html: poem.classify.replace(
              keyWord,
              `<span class="red-text">${keyWord}</span>`
            ),
          }}
        ></span>
        》
      </div>
    </PoemItemWrap>
  );
};

const SearchHotKeyWords = () => {
  const { data: keywords, isLoading } = useHotKeywords();
  const [, setSearchParams] = useSearchParams();
  const searhByKeyWord = (keyword: string) => {
    setSearchParams({
      keyword,
    });
  };
  return (
    <SearchHotKeyWordsWrap>
      <h2>热搜关键词</h2>
      {isLoading ? (
        <Loading height={"calc(100vh - 20rem)"} />
      ) : (
        <>
          {keywords &&
            keywords?.map(
              (keyword) =>
                keyword?.key_word && (
                  <Tag
                    className={"pointer"}
                    key={keyword.key_word}
                    color={sample(["geekblue", "pink", "purple", "volcano"])}
                    onClick={() => searhByKeyWord(keyword.key_word)}
                  >
                    {keyword?.key_word}
                  </Tag>
                )
            )}
        </>
      )}
    </SearchHotKeyWordsWrap>
  );
};

const SearchWrap = styled.div`
  ${containterCommon};
  display: flex;
  height: calc(100vh - 14rem);
  .tabs-warp {
    display: flex;
    align-items: center;
    height: 6rem;
    border-bottom: ${defaultBorder};
    display: flex;
    align-items: center;

    .poem-classify-tag {
      margin-right: ${defaultMargin};
      border: 0.1rem solid ${primaryColor};
      border-radius: 0.5rem;
      padding: 0.4rem 0.6rem;
    }

    .poem-total-count-text {
      color: ${fontGray};
    }
  }

  .red-text {
    color: ${primaryColor};
  }
`;

const SearchListWrap = styled.div`
  flex: 2;

  .poem-list-wrap {
    height: calc(100vh - 26rem);
    overflow-y: auto;
  }
  .poem-list-pagination {
    height: 5rem;
    display: flex;
    align-items: center;
  }
`;

const SearchHotKeyWordsWrap = styled.div`
  flex: 1;
  padding: 0.8rem;
`;

const PoemItemWrap = styled.div`
  border-bottom: ${defaultBorder};
  padding: 1rem 0;
  cursor: pointer;

  .poem-title {
    font-weight: bold;
  }
  .poem-content {
    ${setEllipsis(3)};
    line-height: 2.5rem;
    font-size: 1.4rem;
  }
  .poem-author {
    padding: 0.5rem;
  }
`;

export default SearchIndex;
