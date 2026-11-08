import type { FormEvent } from 'react';
import Button from '@shared/components/button';
import FormField from '@shared/components/form-field';

interface PostEditFormProps {
  title: string;
  content: string;
  isPending: boolean;
  onTitleChange: (value: string) => void;
  onContentChange: (value: string) => void;
  onCancel: () => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
}

const PostEditForm = ({
  title,
  content,
  isPending,
  onTitleChange,
  onContentChange,
  onCancel,
  onSubmit,
}: PostEditFormProps) => {
  const titleValid = title.trim().length > 0 && title.trim().length <= 50;
  const contentValid = content.trim().length > 0 && content.length <= 1000;

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-5">
      <h1 className="text-heading-01 text-text-primary">게시글 수정</h1>
      <FormField
        id="post-title"
        label="제목"
        value={title}
        onChange={onTitleChange}
        placeholder="제목을 입력해 주세요"
        maxLength={50}
        errorMessage="제목은 50글자 이내로 입력해 주세요."
      />
      <FormField
        id="post-content"
        label="본문"
        value={content}
        onChange={onContentChange}
        placeholder="본문을 입력해 주세요"
        maxLength={1000}
        errorMessage="본문은 1000글자 이내로 입력해 주세요."
        multiline
      />
      <div className="flex justify-end gap-3">
        <Button type="button" variant="secondary" fullWidth={false} onClick={onCancel}>
          취소
        </Button>
        <Button
          type="submit"
          fullWidth={false}
          disabled={!titleValid || !contentValid || isPending}
        >
          {isPending ? '수정 중...' : '수정 완료'}
        </Button>
      </div>
    </form>
  );
};

export default PostEditForm;
