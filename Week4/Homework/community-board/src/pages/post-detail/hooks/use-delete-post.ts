import { useMutation, useQueryClient } from '@tanstack/react-query';
import { postQueryKeys } from '@shared/api/query-keys';
import { deletePost } from '../api/delete-post';

export const useDeletePost = (postId: number) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async () => {
      const response = await deletePost(postId);
      if (!response.isSuccess) {
        throw new Error(response.message || '게시글 삭제에 실패했습니다.');
      }
      return response;
    },
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: postQueryKeys.lists() }),
  });
};
