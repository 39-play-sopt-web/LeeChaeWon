import { useState, type FormEvent } from 'react';
import Button from '@shared/components/button';
import PostListContent from './components/post-list-content';
import { usePostList } from './hooks/use-post-list';

const PostListPage = () => {
  const [input, setInput] = useState('');
  const [keyword, setKeyword] = useState('');
  const postList = usePostList(keyword);

  const handleSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmed = input.trim();
    if (trimmed) setKeyword(trimmed);
  };

  return (
    <section className="mx-auto flex w-full max-w-3xl flex-col gap-4 px-5 py-8">
      <h1 className="text-heading-01 text-text-primary">게시글 목록</h1>

      <form onSubmit={handleSearch} className="flex gap-2">
        <label className="sr-only" htmlFor="post-search">게시글 제목 검색</label>
        <input
          id="post-search"
          type="search"
          value={input}
          onChange={(event) => {
            const value = event.target.value;
            setInput(value);
            if (!value.trim()) setKeyword('');
          }}
          placeholder="제목으로 검색"
          className="min-w-0 flex-1 rounded-lg border border-border bg-surface px-4 py-3 text-body-02 text-text-primary"
        />
        <Button type="submit" fullWidth={false} disabled={!input.trim() || postList.isPending}>
          검색
        </Button>
      </form>

      <PostListContent
        posts={postList.posts}
        isPending={postList.isPending}
        isError={postList.isError}
        isFetchingNextPage={postList.isFetchingNextPage}
        hasNextPage={postList.hasNextPage}
        observerTarget={postList.observerTarget}
        onRetry={() => void postList.refetch()}
      />
    </section>
  );
};

export default PostListPage;
