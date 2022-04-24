import { useHttp } from "api/http";
import { useQuery } from "react-query";
import { Poem, PoemCount } from "types/Poem";

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
