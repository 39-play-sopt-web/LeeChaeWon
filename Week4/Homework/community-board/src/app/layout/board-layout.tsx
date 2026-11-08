import { Outlet } from 'react-router-dom';
import BoardHeader from '@shared/components/board-header';

const BoardLayout = () => {
  return (
    <>
      <BoardHeader />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default BoardLayout;