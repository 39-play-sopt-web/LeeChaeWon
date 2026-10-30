import { Link, useParams } from 'react-router-dom';
import { ROUTES } from '@/routes/path';
import { useMovieDetail } from './hooks/use-movie-detail.ts';
import MovieBasicInfo from './components/movie-basic-info/movie-basic-info';
import MovieHero from './components/movie-hero/movie-hero';
import MovieOverview from './components/movie-overview/movie-overview';
import * as styles from './movie-detail-page.css.ts';

const MovieDetailPage = () => {
  const { movieId } = useParams<{ movieId: string }>();
  const { movie, isLoading, isError } = useMovieDetail(movieId);

  return (
    <main className={styles.page}>
      <Link to={ROUTES.HOME} className={styles.backLink}>
        <span aria-hidden="true">←</span>
        목록으로 돌아가기
      </Link>

      {isLoading && <p>불러오는 중...</p>}
      {isError && <p>영화 정보를 불러오지 못했어요.</p>}

      {!isLoading && !isError && movie && (
        <>
          <MovieHero
            backdrop_path={movie.backdrop_path}
            poster_path={movie.poster_path}
            title={movie.title}
            vote_average={movie.vote_average}
            release_date={movie.release_date}
            runtime={movie.runtime}
            genres={movie.genres}
          />

          <MovieOverview overview={movie.overview} />

          <MovieBasicInfo
            original_title={movie.original_title}
            original_language={movie.original_language}
            production_countries={movie.production_countries}
            spoken_languages={movie.spoken_languages}
            budget={movie.budget}
            revenue={movie.revenue}
          />
        </>
      )}
    </main>
  );
};

export default MovieDetailPage;