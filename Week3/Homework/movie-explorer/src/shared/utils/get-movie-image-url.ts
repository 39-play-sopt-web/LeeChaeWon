const TMDB_IMAGE_BASE_URL = 'https://image.tmdb.org/t/p';

type ImageSize = 'w200' | 'w300' | 'w500' | 'original';

export const getMovieImageUrl = (
  imagePath: string,
  size: ImageSize = 'w500',
) => {
  return `${TMDB_IMAGE_BASE_URL}/${size}${imagePath}`;
};