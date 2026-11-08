import { API_ENDPOINTS } from '@shared/api/endpoints';
import { http } from '@shared/api/http';
import type { Post } from '@shared/types/post';

export interface UpdatePostRequest {
  title: string;
  content: string;
}

export const updatePost = (postId: number, body: UpdatePostRequest) =>
  http.put<Post, UpdatePostRequest>(API_ENDPOINTS.posts.update(postId), body);
