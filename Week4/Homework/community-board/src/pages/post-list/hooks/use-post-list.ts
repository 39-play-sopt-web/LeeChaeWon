
import { useCallback, useEffect, useMemo, useRef } from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';
import { postQueryKeys } from '@shared/api/query-keys';
import { getPostList } from '../api/get-post-list';

type PostCursor = number | undefined;

export const usePostList = (keyword: string) => {
  const observerTarget = useRef<HTMLDivElement>(null);

  const query = useInfiniteQuery({
    queryKey: postQueryKeys.list(keyword),
    initialPageParam: undefined as PostCursor,
    queryFn: ({ pageParam }) =>
      getPostList({
        keyword: keyword || undefined,
        cursor: pageParam,
      }),
    getNextPageParam: (lastPage) =>
      lastPage.data.hasNext
        ? lastPage.data.nextCursor ?? undefined
        : undefined,
  });

  const posts = useMemo(
    () => query.data?.pages.flatMap((page) => page.data.posts) ?? [],
    [query.data],
  );

  const loadMore = useCallback(() => {
    if (query.hasNextPage && !query.isFetchingNextPage) {
      void query.fetchNextPage();
    }
  }, [
    query.hasNextPage,
    query.isFetchingNextPage,
    query.fetchNextPage,
  ]);

  useEffect(() => {
    const target = observerTarget.current;

    if (!target || !query.hasNextPage) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) loadMore();
      },
      { rootMargin: '160px' },
    );

    observer.observe(target);

    return () => observer.disconnect();
  }, [loadMore, query.hasNextPage]);

  return { ...query, posts, observerTarget };
};
