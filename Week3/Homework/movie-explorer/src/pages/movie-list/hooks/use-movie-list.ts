import { useEffect, useState } from 'react';
import { getMovieList } from '../api/get-movie-list';
import type { MovieListItem } from '../types/movie-list';

export const useMovieList = () => {
  const [movies, setMovies] = useState<MovieListItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    let isActive = true;

    const fetchMovies = async () => {
      try {
        const data = await getMovieList();

        if (isActive) {
          setMovies(data.results);
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

    fetchMovies();

    return () => {
      isActive = false;
    };
  }, []);

  return { movies, isLoading, isError };
};