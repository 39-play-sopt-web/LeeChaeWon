import type { Post } from '@shared/types/post';
export interface PostListData {
  posts: Post[];
  nextCursor: number | null;
  hasNext: boolean;
}
