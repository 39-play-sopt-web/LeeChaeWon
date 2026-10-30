import MovieCard from './components/movie-card/movie-card';
import RatingFilter from './components/rating-filter/rating-filter';
import { useInfiniteScroll } from './hooks/use-infinite-scroll.ts';
import { useMovieList } from './hooks/use-movie-list.ts';
import * as styles from './movie-list-page.css.ts';

const MovieListPage = () => {
  const {
    movies,
    ratingFilter,
    setRatingFilter,
    isLoading,
    isFetchingMore,
    isError,
    hasMore,
    loadMore,
  } = useMovieList();

  const loadMoreRef = useInfiniteScroll({
    onIntersect: loadMore,
    enabled: hasMore && !isLoading && !isFetchingMore && !isError,
  });

  return (
    <main className={styles.page}>
      <h1 className={styles.title}>영화 둘러보기</h1>

      <RatingFilter value={ratingFilter} onChange={setRatingFilter} />

      {isLoading && movies.length === 0 && <p>불러오는 중...</p>}

      {isError && (
        <p>영화 목록을 불러오지 못했어요.</p>
      )}

      {!isLoading && !isError && movies.length === 0 && (
        <p>해당 평점대의 영화가 없어요.</p>
      )}

      <ul className={styles.movieList}>
        {movies.map((movie) => (
          <li key={movie.id}>
            <MovieCard {...movie} />
          </li>
        ))}
      </ul>

      {isFetchingMore && <p>더 불러오는 중...</p>}

      {hasMore && (
        <div
          ref={loadMoreRef}
          aria-hidden="true"
        />
      )}
    </main>
  );
};

export default MovieListPage;