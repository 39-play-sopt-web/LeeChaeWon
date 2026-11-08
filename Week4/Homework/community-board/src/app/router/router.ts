import { createBrowserRouter, redirect } from 'react-router-dom';
import BoardLayout from '@app/layout/layout';
import MemberCodePage from '@pages/member-code/member-code-page';
import PostListPage from '@pages/post-list/post-list-page';
import PostWritePage from '@pages/post-write/post-write';
import PostDetailPage from '@pages/post-detail/post-detail';
import { PATH } from './path';

export const router = createBrowserRouter([
  {
    path: PATH.memberCode,
    Component: MemberCodePage,
  },
  {
    Component: BoardLayout,
    loader: () => {
      if (!localStorage.getItem('authorizationCode')) {
        window.alert('게시판을 이용하려면 먼저 회원 코드를 발급해 주세요.');
        return redirect(PATH.memberCode);
      }

      return null;
    },
    children: [
      { path: PATH.postList, Component: PostListPage },
      { path: PATH.postWrite, Component: PostWritePage },
      { path: PATH.postDetail, Component: PostDetailPage },
    ],
  },
]);
