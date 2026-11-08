import type { RefObject } from 'react';
import Button from '@shared/components/button';
import PostCard from './post-card';
import type { Post } from '../types/post';

interface PostListContentProps {
  posts: Post[];
  isPending: boolean;
  isError: boolean;
  isFetchingNextPage: boolean;
  hasNextPage: boolean;
  observerTarget: RefObject<HTMLDivElement | null>;
  onRetry: () => void;
}

const PostListContent = ({
  posts,
  isPending,
  isError,
  isFetchingNextPage,
  hasNextPage,
  observerTarget,
  onRetry,
}: PostListContentProps) => {
  if (isPending) {
    return <p className="py-12 text-center text-body-02 text-text-secondary">게시글을 불러오는 중입니다...</p>;
  }

  if (isError) {
    return (
      <div role="alert" className="rounded-xl border border-border bg-surface p-6 text-center">
        <p className="text-body-02 text-text-primary">게시글을 불러오지 못했어요.</p>
        <Button type="button" fullWidth={false} variant="secondary" onClick={onRetry}>
          다시 시도
        </Button>
      </div>
    );
  }

  if (posts.length === 0) {
    return (
      <div className="flex flex-col border border-border bg-surface px-6 py-12 text-center gap-2">
        <p className="text-subheading-01 text-text-primary">게시글이 없습니다</p>
        <p className="text-body-02 text-text-secondary">다른 검색어로 찾아보세요.</p>
      </div>
    );
  }

  return (
    <>
      {posts.map((post) => <PostCard key={post.id} post={post} />)}
      {isFetchingNextPage && <p className="py-6 text-center text-body-02 text-text-secondary">더 불러오는 중...</p>}
      {hasNextPage && !isFetchingNextPage && <div ref={observerTarget} className="h-4" aria-hidden="true" />}
    </>
  );
};

export default PostListContent;
