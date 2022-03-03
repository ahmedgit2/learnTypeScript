export interface Page<T> {
  data: T[];
  pageCount: number;
  page: number;
  totalCount: number;
  limit: number;
}
