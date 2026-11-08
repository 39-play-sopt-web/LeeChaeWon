import { API_ENDPOINTS } from '@shared/api/endpoints';
import { http } from '@shared/api/http';

export const deletePost = (postId: number) =>
  http.delete<string>(API_ENDPOINTS.posts.delete(postId));
