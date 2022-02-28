/*
 * @description: 古代诗词列表
 * @Date: 2022-02-03 20:26:03
 * @LastEditTime: 2022-02-07 14:29:48
 * @Author: xingheng
 */
import WordCloud, { WordCloudProps } from "./WordCloud";
import useMount from "../../../hooks/useMount";
import http from "../../../api/http";
import { useState } from "react";

const AncientPoetry = () => {
  const [words, setWords] = useState([]);
  useMount(() => {
    http.get(`/poem/count`).then((res) => {
      const words = res.data.map((word: { name: string; number: number }) => ({
        name: word.name,
        value: word.number,
      }));
      setWords(words);
    });
  });
  return (
    <div className="container">
      <WordCloud words={words} />
    </div>
  );
};

export default AncientPoetry;
