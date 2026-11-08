import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

import Button from '@shared/components/button';
import { issueAuthorizationCode, type MemberPart } from './api/member';
import PartSelector from './components/part-selector';
import { PATH } from '@app/router/path';

const MemberCodePage = () => {
  const navigate = useNavigate();

  const [selectedPart, setSelectedPart] = useState<MemberPart | ''>('');

  const issueCodeMutation = useMutation({
    mutationFn: issueAuthorizationCode,
    onSuccess: (authorizationCode) => {
      localStorage.setItem('authorizationCode', authorizationCode);
      localStorage.setItem('selectedPart', selectedPart);
      navigate(PATH.postList);
    },
  });

  const handleIssueCode = () => {
    if (!selectedPart) return;
    issueCodeMutation.mutate(selectedPart);
  };

  const handleGoToBoard = () => {
    if (!localStorage.getItem('authorizationCode')) {
      window.alert('먼저 파트를 선택하고 회원 코드를 발급해 주세요.');
      return;
    }

    navigate(PATH.postList);
  };

  return (
    <main className="flex min-h-screen items-center justify-center">
      <section className="flex w-full max-w-sm flex-col gap-4">
        {/* 페이지 타이틀 */}
        <header className="flex flex-col gap-1">
          <h1 className="text-heading-01 text-text-primary">
            PLAY SOPT 게시판
          </h1>
          <p className="text-body-02 text-text-secondary">
            파트를 선택하면 코드가 발급됩니다.
          </p>
        </header>

        {/* 파트 선택 및 코드 발급 */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <PartSelector
              value={selectedPart}
              onChange={setSelectedPart}
            />

            <Button
              fullWidth={false}
              disabled={!selectedPart || issueCodeMutation.isPending}
              onClick={handleIssueCode}
            >
              {issueCodeMutation.isPending ? '발급 중...' : '코드 발급'}
            </Button>
          </div>

          {issueCodeMutation.isError && (
            <p role="alert" className="text-body-02 text-text-primary">
              {issueCodeMutation.error instanceof Error
                ? issueCodeMutation.error.message
                : '회원 코드 발급에 실패했습니다. 잠시 후 다시 시도해 주세요.'}
            </p>
          )}

          {/* 게시판 목록 이동 */}
          <Button variant="secondary" onClick={handleGoToBoard}>
            게시판 목록 보기
          </Button>
        </div>
      </section>
    </main>
  );
};

export default MemberCodePage;
