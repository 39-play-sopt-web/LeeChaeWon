import Button from '@shared/components/button';
import PartSelector from './components/part-selector';
import { useIssueAuthorizationCode } from './hooks/use-issue-authorization-code';

const MemberCodePage = () => {
  const {
    selectedPart,
    setSelectedPart,
    issueCodeMutation,
    handleIssueCode,
    handleGoToBoard,
  } = useIssueAuthorizationCode();

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
