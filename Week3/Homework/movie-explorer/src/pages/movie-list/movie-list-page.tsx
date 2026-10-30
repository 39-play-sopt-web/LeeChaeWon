import { useEffect, useState } from 'react';
import { getMovieList } from './api/get-movie-list';
import MovieCard from './components/movie-card/movie-card';
import RatingFilter from './components/rating-filter/rating-filter';
import type { RatingFilterValue } from './constants/rating-filter';
import type { MovieListItem } from './types/movie-list';
import { filterMoviesByRating } from './utils/filter-movies-by-rating.ts';
import * as styles from './movie-list-page.css';

const MovieListPage = () => {
  const [ratingFilter, setRatingFilter] =
    useState<RatingFilterValue>('all');
  const [movies, setMovies] = useState<MovieListItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const data = await getMovieList();
        setMovies(data.results);
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovies();
  }, []);

  const filteredMovies = filterMoviesByRating(movies, ratingFilter);

  return (
    <main className={styles.page}>
      <h1 className={styles.title}>영화 둘러보기</h1>

      <RatingFilter value={ratingFilter} onChange={setRatingFilter} />

      {isLoading && <p>불러오는 중...</p>}
      {isError && <p>영화 목록을 불러오지 못했어요</p>}
      {!isLoading && !isError && filteredMovies.length === 0 && (
        <p>해당 평점대의 영화가 없어요</p>
      )}

      <ul className={styles.movieList}>
        {filteredMovies.map((movie) => (
          <li key={movie.id}>
            <MovieCard {...movie} />
          </li>
        ))}
      </ul>
    </main>
  );
};

export default MovieListPage;