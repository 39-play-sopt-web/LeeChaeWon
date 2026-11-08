import { useMutation, useQueryClient } from '@tanstack/react-query';
import { postQueryKeys } from '@shared/api/query-keys';
import { updatePost, type UpdatePostRequest } from '../api/update-post';

export const useUpdatePost = (postId: number) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (post: UpdatePostRequest) => {
      const response = await updatePost(postId, post);
      if (!response.isSuccess) {
        throw new Error(response.message || '게시글 수정에 실패했습니다.');
      }
      return response;
    },
    onSuccess: async () => {
      await Promise.all([
        queryClient.invalidateQueries({ queryKey: postQueryKeys.lists() }),
        queryClient.invalidateQueries({ queryKey: postQueryKeys.detail(postId) }),
      ]);
    },
  });
};
