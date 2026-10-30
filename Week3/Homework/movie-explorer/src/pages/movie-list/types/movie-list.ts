export interface MovieListItem {
  id: number;
  title: string;
  original_title: string;
  original_language: string;
  overview: string;
  release_date: string;
  poster_path: string | null;
  backdrop_path: string | null;
  vote_average: number;
  vote_count: number;
  popularity: number;
  genre_ids: number[];
  adult: boolean;
  video: boolean;
}

export interface MovieListResponse {
  page: number;
  results: MovieListItem[];
  total_pages: number;
  total_results: number;
}