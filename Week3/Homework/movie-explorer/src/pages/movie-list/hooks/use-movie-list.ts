import { useCallback, useEffect, useRef, useState } from 'react';
import { getMovieList } from '../api/get-movie-list';
import type { RatingFilterValue } from '../constants/rating-filter';
import type { MovieListItem } from '../types/movie-list';

export const useMovieList = () => {
  const [ratingFilter, setRatingFilterState] =
    useState<RatingFilterValue>('all');
  const [movies, setMovies] = useState<MovieListItem[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [isFetchingMore, setIsFetchingMore] = useState(false);
  const [isError, setIsError] = useState(false);

  const isFetchingRef = useRef(false);

  useEffect(() => {
    let isActive = true;
    isFetchingRef.current = true;

    const fetchMovies = async () => {
      try {
        const data = await getMovieList(page, ratingFilter);

        if (isActive) {
          setMovies((currentMovies) =>
            page === 1 ? data.results : [...currentMovies, ...data.results],
          );
          setHasMore(page < data.total_pages);
        }
      } catch {
        if (isActive) setIsError(true);
      } finally {
        if (isActive) {
          isFetchingRef.current = false;
          setIsLoading(false);
          setIsFetchingMore(false);
        }
      }
    };

    fetchMovies();

    return () => {
      isActive = false;
    };
  }, [page, ratingFilter]);

  const setRatingFilter = useCallback(
    (nextFilter: RatingFilterValue) => {
      if (nextFilter === ratingFilter) return;

      setRatingFilterState(nextFilter);
      setMovies([]);
      setPage(1);
      setHasMore(true);
      setIsError(false);
      setIsLoading(true);
      setIsFetchingMore(false);
    },
    [ratingFilter],
  );

  const loadMore = useCallback(() => {
    if (isFetchingRef.current || !hasMore || isError) return;

    isFetchingRef.current = true;
    setIsFetchingMore(true);
    setPage((currentPage) => currentPage + 1);
  }, [hasMore, isError]);

  return {
    movies,
    ratingFilter,
    setRatingFilter,
    isLoading,
    isFetchingMore,
    isError,
    hasMore,
    loadMore,
  };
};