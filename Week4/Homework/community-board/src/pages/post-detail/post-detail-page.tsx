import { useState, type FormEvent } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Button from '@shared/components/button';
import { PATH } from '@app/router/path';
import { usePost } from './hooks/use-post';
import { useUpdatePost } from './hooks/use-update-post';
import PostDetailContent from './components/post-detail-content';
import PostEditForm from './components/post-edit-form';

const PostDetailPage = () => {
  const { id } = useParams();
  const postId = Number(id);
  const navigate = useNavigate();
  const postQuery = usePost(postId);
  const updateMutation = useUpdatePost(postId);
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  if (postQuery.isPending) {
    return (
      <section className="mx-auto flex w-full max-w-3xl flex-col items-center gap-4 px-5 py-12">
        <p className="text-body-01 text-text-secondary">게시글을 불러오는 중입니다...</p>
      </section>
    );
  }
  if (postQuery.isError || !postQuery.data?.isSuccess) {
    return (
      <section className="mx-auto flex w-full max-w-3xl flex-col items-center gap-4 px-5 py-12">
        <p className="text-body-01 text-text-secondary">
          {postQuery.data?.message || '게시글을 불러오지 못했습니다.'}
        </p>
        <Button type="button" fullWidth={false} onClick={() => void postQuery.refetch()}>
          다시 시도
        </Button>
      </section>
    );
  }

  const post = postQuery.data.data;

  const startEditing = () => {
    setTitle(post.title);
    setContent(post.content);
    setIsEditing(true);
  };

  const handleUpdate = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    updateMutation.mutate(
      { title: title.trim(), content: content.trim() },
      {
        onSuccess: () => {
          window.alert('게시글이 수정되었습니다.');
          setIsEditing(false);
        },
        onError: (error) => {
          window.alert(error instanceof Error ? error.message : '게시글 수정에 실패했습니다.');
        },
      },
    );
  };

  return (
    <section className="mx-auto flex w-full max-w-3xl flex-col gap-5 px-5 py-8">
      <Button
        type="button"
        variant="secondary"
        fullWidth={false}
        className="self-start"
        onClick={() => navigate(PATH.postList)}
      >
        ← 목록으로
      </Button>

      {isEditing ? (
        <PostEditForm
          title={title}
          content={content}
          isPending={updateMutation.isPending}
          onTitleChange={setTitle}
          onContentChange={setContent}
          onCancel={() => setIsEditing(false)}
          onSubmit={handleUpdate}
        />
      ) : (
        <PostDetailContent post={post} onEdit={startEditing} />
      )}
    </section>
  );
};

export default PostDetailPage;
