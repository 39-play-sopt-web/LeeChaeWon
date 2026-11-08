import { API_ENDPOINTS } from '@shared/api/endpoints';
import { http } from '@shared/api/http';
import type { Post } from '@pages/post-list/types/post';

export interface CreatePostRequest {
  title: string;
  content: string;
  author: string;
}

export const createPost = (body: CreatePostRequest) =>
  http.post<Post, CreatePostRequest>(API_ENDPOINTS.posts.create, body);
