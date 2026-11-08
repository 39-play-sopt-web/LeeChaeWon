import { Link, NavLink } from 'react-router-dom';
import { PATH } from '@app/router/path';
import Button from '@shared/components/button';

export default function BoardHeader() {
  const selectedPart = localStorage.getItem('selectedPart');

  return (
    <header className="border-b border-border bg-secondary">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4">
        <Link to={PATH.postList} className="text-subheading-01 text-text-primary">
          SOPT BOARD
          {selectedPart && (
            <span className="ml-2 text-body-02 text-text-secondary">
              · {selectedPart}
            </span>
          )}
        </Link>
        <nav aria-label="게시판 메뉴" className="flex items-center gap-4 text-body-02">
          <NavLink to={PATH.postList} end className={({ isActive }) => isActive ? 'text-text-primary' : 'text-text-secondary'}>
            게시글 목록
          </NavLink>
          <NavLink to={PATH.postWrite} className={({ isActive }) => isActive ? 'text-text-primary' : 'text-text-secondary'}>
            글쓰기
          </NavLink>
          <Button
            type="button"
            variant="primary"
            fullWidth={false}
            onClick={() => {
              localStorage.removeItem('authorizationCode');
              localStorage.removeItem('selectedPart');
              window.location.assign(PATH.memberCode);
            }}
          >
            로그아웃
          </Button>
        </nav>
      </div>
    </header>
  );
}
