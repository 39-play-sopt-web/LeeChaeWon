import { useParams } from 'react-router-dom';

const MovieDetailPage = () => {
  const { movieId } = useParams();

  return <h1>영화 상세 페이지: {movieId}</h1>;
};

export default MovieDetailPage;