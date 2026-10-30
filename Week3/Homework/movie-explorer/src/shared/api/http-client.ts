import ky from 'ky';

export const httpClient = ky.create({
  baseUrl: import.meta.env.VITE_API_BASE_URL,
  searchParams: {
    language: 'ko-KR',
  },
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`
  },
  retry: 0,
})