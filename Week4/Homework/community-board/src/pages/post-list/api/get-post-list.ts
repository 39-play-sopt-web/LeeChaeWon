import { API_ENDPOINTS } from '@shared/api/endpoints';
import { http } from '@shared/api/http';
import type { PostListData } from '../types/post';

const PAGE_SIZE = 10;

interface GetPostListParams {
  keyword?: string;
  cursor?: number;
}

export const getPostList = ({ keyword, cursor }: GetPostListParams) =>
  http.get<PostListData>(API_ENDPOINTS.posts.list, {
    keyword,
    cursor,
    size: PAGE_SIZE,
  });
