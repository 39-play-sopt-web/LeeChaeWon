import { httpClient } from '@/shared/api/http-client';
import { API_ENDPOINTS } from '@/shared/constants/api-endpoints';
import type { MovieListResponse } from '../types/movie-list';
import { RATING_RANGES, type RatingFilterValue } from '../constants/rating-filter';

export const getMovieList = (
  page = 1,
  ratingFilter: RatingFilterValue = 'all',
) => {
  const { min, max } = RATING_RANGES[ratingFilter];

  return httpClient
    .get(API_ENDPOINTS.MOVIE_LIST, {
      searchParams: {
        page,
        ...(min !== undefined && { 'vote_average.gte': min }),
        ...(max !== undefined && { 'vote_average.lte': max - 0.001 }),
      },
    })
    .json<MovieListResponse>();
};