/*
 * @description: ScrollList.tsx
 * @Date: 2022-03-01 16:24:10
 * @Author: xingheng
 */

import styled from "@emotion/styled";
import { PoemCount } from "types/Poem";

const ScrollList = ({ list }: { list: PoemCount[] | undefined }) => {
  return (
    <>
      <ScrollListWrap>
        {list?.map((item, index) => (
          <ScrollListItem key={index}>
            <div className="scroll-list-item-title">《{item.name}》</div>
            <div className="scroll-list-item-content">{item.value} </div> 首
          </ScrollListItem>
        ))}
      </ScrollListWrap>
    </>
  );
};
const ScrollListWrap = styled.div`
  height: 22rem;
  overflow: auto;
`;

const ScrollListItem = styled.div`
  display: flex;
  align-items: center;
  padding: 0.2rem 0;

  .scroll-list-item-title {
    font-weight: bold;
  }

  .scroll-list-item-content {
    font-size: 1.6rem;
    color: #ae1e04;
    font-style: italic;
    font-weight: bold;
  }
`;

export default ScrollList;
