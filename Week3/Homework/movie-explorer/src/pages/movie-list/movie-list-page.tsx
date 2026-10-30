import { useState } from 'react';
import MovieCard from './components/movie-card/movie-card';
import RatingFilter from './components/rating-filter/rating-filter';
import { movieListMockData } from './constants/movie-list-mock-data';
import type { RatingFilterValue } from './constants/rating-filter';
import { filterMoviesByRating } from './utils/filter-movies-by-rating.ts';
import * as styles from './movie-list-page.css';

const MovieListPage = () => {
  const [ratingFilter, setRatingFilter] =
    useState<RatingFilterValue>('all');

  const filteredMovies = filterMoviesByRating(movieListMockData, ratingFilter);

  return (
    <main className={styles.page}>
      <h1 className={styles.title}>영화 둘러보기</h1>

      <RatingFilter value={ratingFilter} onChange={setRatingFilter} />

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