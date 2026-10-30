import * as styles from './movie-overview.css';

interface MovieOverviewProps {
  overview: string;
}

const MovieOverview = ({ overview }: MovieOverviewProps) => {
  return (
    <section className={styles.overview}>
      <h2 className={styles.title}>줄거리</h2>
      <p className={styles.description}>
        {overview || '등록된 줄거리가 없습니다.'}
      </p>
    </section>
  );
};

export default MovieOverview;