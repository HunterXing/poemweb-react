import { useHttp } from "api/http";
import { useQuery } from "react-query";
import { Poem, PoemCount } from "types/Poem";
import { PaginationProps } from "types/Page";

// 古诗词数量
export const usePoemCount = () => {
  const client = useHttp();
  return useQuery<PoemCount[]>(["poemCount"], async () => {
    const data = await client("/api/v1/poem/count", {
      method: "GET",
    });
    return data.result;
  });
};

// 推荐古诗词
export const useRecomendAncient = () => {
  const client = useHttp();
  return useQuery<Poem[]>(["recomendAncient"], async () => {
    const data = await client("/api/v1/poems/recomendAncient", {
      method: "GET",
    });
    return data.result;
  });
};

// 推荐古诗词
export const useAncientDetail = (params?: {
  id: string;
  isAncient?: boolean;
}) => {
  const client = useHttp();
  return useQuery<Poem>(["ancientDetail", params], async () => {
    const data = await client("/api/v1/poems/detail", {
      method: "GET",
      data: params,
    });
    return data.result;
  });
};

// 获得某类别的诗词列表
export const usePoemListByClassify = (params?: {
  classify: string;
  pageIndex: number;
  pageSize: number;
}) => {
  const client = useHttp();
  return useQuery<{
    pagination: PaginationProps;
    result: Poem[];
  }>(["poemList", params], async () => {
    const data = await client("/api/v1/poems/poemlist", {
      method: "GET",
      data: params,
    });
    return data;
  });
};
