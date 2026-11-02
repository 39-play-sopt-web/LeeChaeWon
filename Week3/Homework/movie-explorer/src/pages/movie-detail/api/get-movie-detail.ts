import { httpClient } from '@/shared/api/http-client';
import { API_ENDPOINTS } from '@/shared/constants/api-endpoints';
import type { MovieDetail } from '../types/movie-detail.ts';

export const getMovieDetail = (movieId: number) =>
  httpClient
    .get(API_ENDPOINTS.MOVIE_DETAIL(movieId))
    .json<MovieDetail>();