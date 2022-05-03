/*
 * @description: 测试页面
 * @Date: 2022-05-02 21:44:33
 * @Author: xingheng
 */

import useTextToSound from "hooks/useTextToSound";
import { useEffect, useState } from "react";

const Test = () => {
  const [text, setText] = useState("");
  const setU = useTextToSound(text);

  const play = () => {
    setU(new SpeechSynthesisUtterance());
    setText(`颜冉`);
  };

  return (
    <div>
      <button onClick={() => play()}>按钮</button>
    </div>
  );
};

export default Test;
