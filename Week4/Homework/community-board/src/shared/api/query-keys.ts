export const postQueryKeys = {
  all: ['posts'] as const,
  lists: () => [...postQueryKeys.all, 'list'] as const,
  list: (keyword: string) => [...postQueryKeys.lists(), keyword] as const,
};
