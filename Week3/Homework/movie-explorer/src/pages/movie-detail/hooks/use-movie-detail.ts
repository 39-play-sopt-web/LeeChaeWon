import { useEffect, useState } from 'react';
import { getMovieDetail } from '../api/get-movie-detail.ts';
import type { MovieDetail } from '../types/movie-detail.ts';

export const useMovieDetail = (movieId: string | undefined) => {
  const [movie, setMovie] = useState<MovieDetail | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    let isActive = true;

    const fetchMovie = async () => {
      setMovie(null);
      setIsLoading(true);
      setIsError(false);

      const id = Number(movieId);

      if (!Number.isInteger(id) || id <= 0) {
        setIsError(true);
        setIsLoading(false);
        return;
      }

      try {
        const data = await getMovieDetail(id);

        if (isActive) {
          setMovie(data);
        }
      } catch {
        if (isActive) {
          setIsError(true);
        }
      } finally {
        if (isActive) {
          setIsLoading(false);
        }
      }
    };

    fetchMovie();

    return () => {
      isActive = false;
    };
  }, [movieId]);

  return { movie, isLoading, isError };
};