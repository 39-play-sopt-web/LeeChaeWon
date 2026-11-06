import { createBrowserRouter } from 'react-router-dom';
import BoardLayout from '@app/layout/layout';
import MemberCodePage from '@pages/member-code/member-code';
import PostListPage from '@pages/post-list/post-list';
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
    children: [
      { path: PATH.postList, Component: PostListPage },
      { path: PATH.postWrite, Component: PostWritePage },
      { path: PATH.postDetail, Component: PostDetailPage },
    ],
  },
]);