import { useMutation, useQueryClient } from '@tanstack/react-query';
import { postQueryKeys } from '@shared/api/query-keys';
import { createPost, type CreatePostRequest } from '../api/create-post';

export const useCreatePost = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (post: CreatePostRequest) => {
      const response = await createPost(post);
      if (!response.isSuccess) {
        throw new Error(response.message || '게시글 작성에 실패했습니다.');
      }
      return response;
    },
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: postQueryKeys.lists() }),
  });
};
