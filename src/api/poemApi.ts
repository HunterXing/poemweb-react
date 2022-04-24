import { useHttp } from "api/http";
import { QueryKey, useMutation, useQuery, useQueryClient } from "react-query";
import { PoemCount } from "types/Poem";

export const usePoemCount = () => {
  const client = useHttp();
  return useQuery<PoemCount[]>(["poemCount"], async () => {
    const data = await client("/api/v1/poem/count", {
      method: "GET",
    });
    return data.result;
  });
};
