import { generatePath, Link } from 'react-router-dom';
import { PATH } from '@app/router/path';
import type { Post } from '@shared/types/post';

interface PostCardProps {
  post: Post;
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

const PostCard = ({ post }: PostCardProps) => (
    <Link
      to={generatePath(PATH.postDetail, { id: String(post.id) })}
      className="flex flex-col gap-2 border border-border bg-surface p-4">
      <h2 className="text-subheading-01 text-text-primary">{post.title}</h2>
      <p className="whitespace-pre-wrap break-words text-body-01 text-text-secondary">
        {post.content}
      </p>
      <div className="flex flex-wrap items-center gap-x-3 text-caption-01 text-text-secondary">
        <span className="text-text-primary">{post.author}</span>
        <time dateTime={post.createdAt}>{formatDate(post.createdAt)}</time>
      </div>
    </Link>
  );

export default PostCard;
