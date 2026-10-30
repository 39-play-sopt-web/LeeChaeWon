export interface MovieListItem {
  id: number;
  poster_path: string | null;
  vote_average: number;
  title: string;
  release_date: string;
  overview: string;
}

export const movieListMockData: MovieListItem[] = [
  {
    id: 1,
    poster_path: '/6VY1ZKgpsc8CfGsQcCGiYEgHdH0.jpg',
    vote_average: 8.5,
    title: '스파이더맨: 브랜드 뉴 데이',
    release_date: '2026-07-29',
    overview: '4년 전 소중한 사람들을 지키기 위해 모든 기억에서 사라진 피터 파커. 친절한 이웃 스파이더맨으로 돌아온다.',
  },
  {
    id: 2,
    poster_path: '/6VY1ZKgpsc8CfGsQcCGiYEgHdH0.jpg',
    vote_average: 7.3,
    title: '레지던트 이블: 0번째 밤',
    release_date: '2026-09-16',
    overview: '의료 택배 기사 브라이언은 긴급 배달을 맡아 병원으로 향한다. 그곳에서 예상치 못한 사건을 마주한다.',
  },
  {
    id: 3,
    poster_path: '/yihdXomYb5kTeSivtFndMy5iDmf.jpg',
    vote_average: 7.7,
    title: '인시디어스: 그들이 넘어...',
    release_date: '2026-08-29',
    overview: '죽은 자들의 영역이 더 먼 곳을 넘어들 수 있는 능력을 가진 자매가 마주한 공포를 그린다.',
  },
  {
    id: 4,
    poster_path: '/yihdXomYb5kTeSivtFndMy5iDmf.jpg',
    vote_average: 7.9,
    title: 'Matchbox 더 무비',
    release_date: '2026-10-05',
    overview: '유년 시절 친구들이 다시 모인다. 이들의 계획은 예상치 못한 모험으로 이어진다.',
  },
  {
    id: 5,
    poster_path: '/qqHFLg90IUSoTmSMpKOOW5RyqN3.jpg',
    vote_average: 8.0,
    title: '오디세이',
    release_date: '2026-07-15',
    overview: '10년간 이어진 트로이 전쟁을 승리로 이끈 오디세우스는 고향으로의 긴 여정을 시작한다.',
  },
  {
    id: 6,
    poster_path: null,
    vote_average: 7.3,
    title: '백',
    release_date: '2026-06-12',
    overview: '구름과 안개로 뒤덮인 산에서 펼쳐지는 생존 이야기.',
  },
  {
    id: 7,
    poster_path: null,
    vote_average: 7.2,
    title: '진실들',
    release_date: '2026-05-20',
    overview: '오래된 사건을 둘러싼 인물들의 진실이 하나씩 드러난다.',
  },
  {
    id: 8,
    poster_path: null,
    vote_average: 8.3,
    title: '러너',
    release_date: '2026-04-18',
    overview: '위험한 임무를 맡은 주인공은 도시를 가로지르는 추격전에 휘말린다.',
  },
  {
    id: 9,
    poster_path: null,
    vote_average: 6.8,
    title: '더',
    release_date: '2026-03-11',
    overview: '한 남자가 과거와 마주하며 벌어지는 이야기.',
  },
  {
    id: 10,
    poster_path: null,
    vote_average: 5.7,
    title: '레지던트 데드',
    release_date: '2026-02-01',
    overview: '도시에 퍼진 감염 사태 속에서 생존자들이 탈출을 시도한다.',
  },
];