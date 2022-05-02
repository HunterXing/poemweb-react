/*
 * @description: 诗词相关类型接口
 * @Date: 2022-04-24 21:09:34
 * @Author: xingheng
 */
export interface PoemCount {
  name: string;
  value: number;
}

export interface Poem {
  author: string;
  chapter: string;
  classify: string;
  content: string;
  create_time: string;
  hot: number;
  id: string;
  isPublish: number;
  poem_id: string;
  poem_img?: string | null;
  section?: string | null;
  title: string;
}

export interface KeyWord {
  key_word: string;
  count: number;
}
