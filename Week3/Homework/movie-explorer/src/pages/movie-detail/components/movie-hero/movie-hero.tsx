import Chip from '@/shared/components/chip/chip';
import { getMovieImageUrl } from '@/shared/utils/get-movie-image-url';
import * as styles from './movie-hero.css';

interface Genre {
  id: number;
  name: string;
}

interface MovieHeroProps {
  backdrop_path: string | null;
  poster_path: string | null;
  title: string;
  vote_average: number;
  release_date: string;
  runtime: number | null;
  genres: Genre[];
}

const MovieHero = ({
  backdrop_path,
  poster_path,
  title,
  vote_average,
  release_date,
  runtime,
  genres,
}: MovieHeroProps) => {
  return (
    <section className={styles.hero}>
      {backdrop_path && (
        <img
          className={styles.backdropImage}
          src={getMovieImageUrl(backdrop_path, 'original')}
          alt=""
        />
      )}

      <div className={styles.content}>
        {poster_path && (
          <img
            className={styles.poster}
            src={getMovieImageUrl(poster_path, 'w500')}
            alt={`${title} 포스터`}
          />
        )}

        <div className={styles.movieInfo}>
          <h1 className={styles.title}>{title}</h1>

          <div className={styles.metadata}>
            <Chip variant="rating">★ {vote_average.toFixed(1)}</Chip>
            <span>{release_date || '개봉일 미정'}</span>
            {runtime !== null && <span>{runtime}분</span>}
          </div>

          <ul className={styles.genres}>
            {genres.map((genre) => (
              <li key={genre.id}>
                <Chip variant="genre">{genre.name}</Chip>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default MovieHero;