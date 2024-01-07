export type Type_Parmas_config = {
  page?: number;
  search?: string;
  take?: number;
  sort?: string;
};

export type Type_Pagination = {
  current_page: number;
  per_page: number;
  items_per_page?: number;
  total: number;
  last_page: number;
  hasPreviousPage?: boolean;
  hasNextPage?: boolean;
};
