import { useState, type FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@shared/components/button';
import { PATH } from '@app/router/path';
import FormField from './components/form-field';
import { useCreatePost } from './hooks/use-create-post';

type Step = 0 | 1 | 2;

const PostWritePage = () => {
  const [step, setStep] = useState<Step>(0);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');
  const navigate = useNavigate();
  const mutation = useCreatePost();

  const goToList = () => navigate(PATH.postList);
  const goForward = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStep((current) => (current + 1) as Step);
  };

  const handleCreatePost = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    mutation.mutate(
      { title: title.trim(), content: content.trim(), author: author.trim() },
      {
        onSuccess: () => {
          window.alert(`${author.trim()}님, 게시글이 작성되었습니다.`);
          navigate(PATH.postList);
        },
        onError: (error) => {
          window.alert(error instanceof Error ? error.message : '게시글 작성에 실패했습니다.');
        },
      },
    );
  };

  const titleValid = title.trim().length > 0 && title.trim().length <= 50;
  const contentValid = content.trim().length > 0 && content.length <= 1000;
  const authorValid = author.trim().length > 0 && author.trim().length <= 20;

  return (
    <section className="mx-auto flex w-full max-w-3xl flex-col gap-6 px-5 py-8">
      <header className="flex items-center justify-between gap-3">
        <h1 className="text-heading-01 text-text-primary">게시글 작성</h1>
        <Button type="button" variant="secondary" fullWidth={false} onClick={goToList}>목록으로</Button>
      </header>

      {step === 0 && (
        <form onSubmit={goForward} className="flex flex-col gap-4">
          <FormField
            id="post-title"
            label="제목"
            value={title}
            onChange={setTitle}
            placeholder="제목을 입력해 주세요"
            maxLength={50}
            errorMessage="제목은 50글자 이내로 입력해 주세요."
          />
          <Button type="submit" fullWidth={false} className="self-end" disabled={!titleValid}>다음</Button>
        </form>
      )}

      {step === 1 && (
        <form onSubmit={goForward} className="flex flex-col gap-4">
          <FormField
            id="post-content"
            label="본문"
            value={content}
            onChange={setContent}
            placeholder="본문을 입력해 주세요"
            maxLength={1000}
            errorMessage="본문은 1000글자 이내로 입력해 주세요."
            multiline
          />
          <div className="flex self-end gap-3">
            <Button type="button" variant="secondary" onClick={() => setStep(0)}>이전</Button>
            <Button type="submit" fullWidth={false} disabled={!contentValid}>다음</Button>
          </div>
        </form>
      )}

      {step === 2 && (
        <form onSubmit={handleCreatePost} className="flex flex-col gap-4">
          <FormField
            id="post-author"
            label="작성자"
            value={author}
            onChange={setAuthor}
            placeholder="작성자 이름을 입력해 주세요"
            maxLength={20}
            errorMessage="작성자는 20글자 이내로 입력해 주세요."
          />
          <div className="flex self-end gap-3">
            <Button type="button" variant="secondary" onClick={() => setStep(1)}>이전</Button>
            <Button type="submit" disabled={!authorValid || mutation.isPending}>{mutation.isPending ? '작성 중...' : '작성'}</Button>
          </div>
        </form>
      )}
    </section>
  );
};

export default PostWritePage;
