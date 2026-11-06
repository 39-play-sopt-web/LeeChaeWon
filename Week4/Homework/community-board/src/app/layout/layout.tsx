import { Outlet } from 'react-router-dom';
import BoardHeader from '@shared/components/board-header';

export default function BoardLayout() {
  return (
    <>
      <BoardHeader />
      <main>
        <Outlet />
      </main>
    </>
  );
}