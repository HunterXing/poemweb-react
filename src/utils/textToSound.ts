/*
 * @description: 文字转语音
 * @Date: 2022-05-02 20:27:39
 * @Author: xingheng
 */
const textToSound = (text: string) => {
  debugger;
  let u = new SpeechSynthesisUtterance();
  u.text = text;
  u.lang = "zh";
  u.rate = 0.7;
  speechSynthesis.speak(u);
  return u;
};

export default textToSound;
