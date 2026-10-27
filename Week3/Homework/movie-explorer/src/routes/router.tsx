import { createBrowserRouter } from 'react-router-dom';
import { ROUTES } from '@/routes/path';

export const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    lazy: async () => {
      const { default: MovieListPage } = await import(
        '@/pages/movie-list/movie-list-page'
      );

      return { Component: MovieListPage };
    },
  },
  {
    path: ROUTES.MOVIE_DETAIL,
    lazy: async () => {
      const { default: MovieDetailPage } = await import(
        '@/pages/movie-detail/movie-detail-page'
      );

      return { Component: MovieDetailPage };
    },
  },
]);