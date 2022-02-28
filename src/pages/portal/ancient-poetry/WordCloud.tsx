/*
 * @description: 词云
 * @Date: 2022-02-28 17:24:29
 * @Author: xingheng
 */
import ReactEcharts from "echarts-for-react";
import "echarts-wordcloud";
import useMount from "hooks/useMount";
import http from "api/http";

export interface WordCloudProps {
  name: string;
  value: number;
}

const WordCloud = ({ words }: { words: WordCloudProps[] }) => {
  const wordOption = () => {
    let wordData = [...words];
    return {
      backgroundColor: "#fff",
      tooltip: {
        pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>",
      },
      series: [
        {
          type: "wordCloud",
          gridSize: 1,
          sizeRange: [12, 55],
          rotationRange: [-45, 0, 45, 90],
          // Global text style
          textStyle: {
            fontFamily: "sans-serif",
            fontWeight: "bold",
            // Color can be a callback function or a color string
            color: function () {
              // Random color
              return (
                "rgb(" +
                [
                  Math.round(Math.random() * 160),
                  Math.round(Math.random() * 160),
                  Math.round(Math.random() * 160),
                ].join(",") +
                ")"
              );
            },
          },
          emphasis: {
            focus: "self",
            textStyle: {
              textShadowBlur: 10,
              textShadowColor: "#333",
            },
          },

          left: "center",
          top: "center",
          right: null,
          bottom: null,
          width: "90%",
          height: "110%",
          data: wordData,
        },
      ],
    };
  };

  return <ReactEcharts option={wordOption()} theme="ThemeStyle" />;
};

export default WordCloud;
