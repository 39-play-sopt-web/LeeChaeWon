import { API_ENDPOINTS } from '@shared/api/endpoints';
import { http } from '@shared/api/http';
import type { Post } from '@shared/types/post';

export const getPostDetail = (postId: number) =>
  http.get<Post>(API_ENDPOINTS.posts.detail(postId));
