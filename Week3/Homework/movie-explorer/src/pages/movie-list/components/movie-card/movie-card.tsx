import { Link } from 'react-router-dom';
import { ROUTES } from '@/routes/path';
import Chip from '@/shared/components/chip/chip';
import { getMovieImageUrl } from '@/shared/utils/get-movie-image-url';
import * as styles from './movie-card.css';

interface MovieCardProps {
  id: number;
  poster_path: string | null;
  vote_average: number;
  title: string;
  release_date: string;
  overview: string;
}

// 영화 상세 페이지 경로 생성
const getMovieDetailPath = (movieId: number) => {
  return ROUTES.MOVIE_DETAIL.replace(':movieId', String(movieId));
};

const MovieCard = ({
  id,
  poster_path,
  vote_average,
  title,
  release_date,
  overview,
}: MovieCardProps) => {
  return (
    <Link to={getMovieDetailPath(id)} className={styles.card}>
      <article>
        <div className={styles.poster}>
          {poster_path ? (
            <img className={styles.posterImage} src={getMovieImageUrl(poster_path)} alt={`${title} 포스터`} />
          ) : (
            <div className={styles.posterPlaceholder}>
              <span>포스터 이미지 없음</span>
            </div>
          )}
          <span className={styles.rating}>
            <Chip variant="rating">★{vote_average.toFixed(1)}</Chip>
          </span>
        </div>

        <div className={styles.info}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.releaseDate}>{release_date || '개봉일 정보가 없어요'}</p>
          <p className={styles.overview}>{overview || '줄거리 정보가 없어요'}</p>
        </div>
      </article>
    </Link>
  );
};

export default MovieCard;