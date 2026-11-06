import ky from 'ky';

const http = ky.create({
  prefix: import.meta.env.VITE_API_BASE_URL,
  retry: {
    limit: 0,
  },
});

export default http;