export const API_ENDPOINTS = {
  MOVIE_LIST: 'discover/movie',
  MOVIE_DETAIL: (movieId: number) => `movie/${movieId}`,
} as const;