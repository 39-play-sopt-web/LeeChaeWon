import kyInstance from './ky-instance';
export interface ApiResponse<T> {
  isSuccess: boolean;
  code: string;
  message: string;
  data: T;
}

export const http = {
  get<T>(
    url: string,
    searchParams?: Record<string, string | number | undefined>,
  ) {
    return kyInstance
      .get(url, { searchParams })
      .json<ApiResponse<T>>();
  },

  post<TResponse, TBody>(url: string, body: TBody) {
    return kyInstance
      .post(url, { json: body })
      .json<ApiResponse<TResponse>>();
  },

  put<TResponse, TBody>(url: string, body: TBody) {
    return kyInstance
      .put(url, { json: body })
      .json<ApiResponse<TResponse>>();
  },

  delete<T>(url: string) {
    return kyInstance
      .delete(url)
      .json<ApiResponse<T>>();
  },
};