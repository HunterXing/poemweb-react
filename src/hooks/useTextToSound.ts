/*
 * @description: 文字转语音
 * @Date: 2022-05-02 20:27:39
 * @Author: xingheng
 */
import { useEffect, useState } from "react";

const useTextToSound = (text: string) => {
  // const [u, setU] = useState<SpeechSynthesisUtterance>(
  //   new SpeechSynthesisUtterance()
  // );
  const [u, setU] = useState<SpeechSynthesisUtterance>(
    new SpeechSynthesisUtterance()
  );
  useEffect(() => {
    u.text = text;
    u.lang = "zh";
    u.rate = 0.7;
    speechSynthesis.speak(u);
  }, [text, u]);
  // alert(1);
  // setU(new SpeechSynthesisUtterance());
  // if (u) {
  //   u = new SpeechSynthesisUtterance();
  // }

  // setU(new SpeechSynthesisUtterance());

  // u.text = text;
  // u.lang = "zh";
  // u.rate = 0.7;
  // speechSynthesis.speak(u);

  return setU;
};
export default useTextToSound;
