import Button from "./button";
import { PAGES } from "../constants/page";

const Header = ({ currentPage, setCurrentPage, level, setLevel, elapsedTime }) => {
  return (
    <header className="flex items-center justify-between border-b border-border bg-secondary px-8 py-4">
      {/* 왼쪽 제목 */}
      <h1 className="flex-1 text-heading-01 text-text-primary whitespace-nowrap">숫자 선택 게임</h1>

      {/* 가운데 페이지 전환 메뉴 */}
      <nav className="flex flex-1 justify-center gap-4">
        <Button
          variant={currentPage === PAGES.GAME ? 'primary' : 'secondary'}
          onClick={() => setCurrentPage(PAGES.GAME)}
        >
          게임
        </Button>

        <Button
          variant={currentPage === PAGES.RANKING ? 'primary' : 'secondary'}
          onClick={() => setCurrentPage(PAGES.RANKING)}
        >
          랭킹
        </Button>     
      </nav>

      {/* 오른쪽 영역 */}
      <div className="flex flex-1 justify-end">
        {currentPage === PAGES.GAME && (
          <div className="flex items-center gap-4 whitespace-nowrap">
            {/* 레벨 선택창 */}
            <select
              value={level}
              onChange={(event) => setLevel(Number(event.target.value))}
              className="rounded-md bg-primary p-2 text-body-01 text-text-primary"
              aria-label="레벨 선택"
            >
              <option value={1}>Level 1 (3x3)</option>
              <option value={2}>Level 2 (4x4)</option>
              <option value={3}>Level 3 (5x5)</option>
            </select>

            {/* 타이머 */}
            <div className="min-w-20 text-center tabular-nums rounded-md bg-primary p-2 text-body-01 text-text-primary">
              {(elapsedTime / 1000).toFixed(2)}초
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;