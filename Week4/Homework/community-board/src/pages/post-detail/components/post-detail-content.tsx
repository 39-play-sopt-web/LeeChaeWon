import Button from '@shared/components/button';
import type { Post } from '@shared/types/post';

interface PostDetailContentProps {
  post: Post;
  onEdit: () => void;
}

const formatDate = (date: string) => {
  const parsed = new Date(`${date}Z`);
  if (Number.isNaN(parsed.getTime())) return date;

  return new Intl.DateTimeFormat('ko-KR', {
    timeZone: 'Asia/Seoul',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  }).format(parsed);
};

const PostDetailContent = ({ post, onEdit }: PostDetailContentProps) => (
  <article className="flex flex-col gap-5 rounded-xl border border-border bg-surface p-6">
    <header className="flex flex-col gap-3 border-b border-border pb-4">
      <h1 className="text-heading-01 text-text-primary">{post.title}</h1>
      <div className="flex flex-wrap items-center gap-x-3 text-caption-01 text-text-secondary">
        <span className="text-text-primary">{post.author}</span>
        <time dateTime={post.createdAt}>{formatDate(post.createdAt)}</time>
      </div>
    </header>
    <p className="min-h-32 whitespace-pre-wrap break-words text-body-01 text-text-primary">
      {post.content}
    </p>
    <div className="flex justify-end gap-3 border-t border-border pt-4">
      <Button type="button" fullWidth={false} onClick={onEdit}>수정</Button>
      <Button type="button" fullWidth={false}>삭제</Button>
    </div>
  </article>
);

export default PostDetailContent;
