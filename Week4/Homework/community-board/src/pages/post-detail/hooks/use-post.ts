import { useQuery } from '@tanstack/react-query';
import { postQueryKeys } from '@shared/api/query-keys';
import { getPostDetail } from '../api/get-post-detail';

export const usePost = (postId: number) =>
  useQuery({
    queryKey: postQueryKeys.detail(postId),
    queryFn: () => getPostDetail(postId),
    enabled: Number.isSafeInteger(postId) && postId > 0,
  });
