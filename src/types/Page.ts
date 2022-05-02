/*
 * @description: 分页类型
 * @Date: 2022-05-01 18:39:54
 * @Author: xingheng
 */
export interface PaginationProps {
  pageIndex: number;
  pageSize: number;
  totalCount?: number;
}

export interface SearchPaginationProps extends PaginationProps {
  result_count_modern: number;
  result_count_ancient: number;
}
