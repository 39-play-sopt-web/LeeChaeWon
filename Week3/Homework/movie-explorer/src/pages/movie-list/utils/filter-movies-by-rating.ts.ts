import type { RatingFilterValue } from '../constants/rating-filter';

const ratingRanges: Record<
  RatingFilterValue,
  { min?: number; max?: number }
> = {
  all: {},
  '9+': { min: 9 },
  '8-9': { min: 8, max: 9 },
  '7-8': { min: 7, max: 8 },
  '6-7': { min: 6, max: 7 },
  'under-6': { max: 6 },
};

export const filterMoviesByRating = <T extends { vote_average: number }>(
  movies: T[],
  selectedFilter: RatingFilterValue,
): T[] => {
  const range = ratingRanges[selectedFilter];

  return movies.filter((movie) => {
    const meetsMinimum =
      range.min === undefined || movie.vote_average >= range.min;
    const meetsMaximum =
      range.max === undefined || movie.vote_average < range.max;

    return meetsMinimum && meetsMaximum;
  });
};