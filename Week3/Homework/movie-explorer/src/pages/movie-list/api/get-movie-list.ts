import { httpClient } from '@/shared/api/http-client';
import { API_ENDPOINTS } from '@/shared/constants/api-endpoints';
import type { MovieListResponse } from '../types/movie-list';

export const getMovieList = (page = 1) =>
  httpClient
    .get(API_ENDPOINTS.MOVIE_LIST, { searchParams: { page } })
    .json<MovieListResponse>();