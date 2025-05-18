export type ApiResponse<T> = {
  status: boolean;
  data: T;
  message?: string;
};
