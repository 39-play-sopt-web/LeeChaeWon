// Router.jsx

import { createBrowserRouter } from 'react-router';
import UserDetail from '../pages/UserDetail';
import Home from '../pages/Home';
import PostDetail from '../pages/PostDetail';
import MemberCode from '../pages/MemberCods';

const router = createBrowserRouter([
  {
    path: '/',
    Component: Home,
  },
  {
    path: '/member/:name',
    Component: UserDetail,
  },
  { path: "/posts/:postId", Component: PostDetail },
  {
    path: '/member-code',
    Component: MemberCode,
  },
]);

export default router;
