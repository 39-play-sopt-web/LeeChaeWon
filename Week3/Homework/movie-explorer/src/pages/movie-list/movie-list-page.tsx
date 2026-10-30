import { useState } from 'react';
import MovieCard from './components/movie-card/movie-card';
import RatingFilter from './components/rating-filter/rating-filter';
import type { RatingFilterValue } from './constants/rating-filter';
import { filterMoviesByRating } from './utils/filter-movies-by-rating.ts';
import * as styles from './movie-list-page.css';
import { useMovieList } from './hooks/use-movie-list';

const MovieListPage = () => {
  const [ratingFilter, setRatingFilter] =
    useState<RatingFilterValue>('all');
  const { movies, isLoading, isError } = useMovieList();
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