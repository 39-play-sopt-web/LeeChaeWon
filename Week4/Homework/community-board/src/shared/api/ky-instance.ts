import ky from 'ky';

const kyInstance = ky.create({
  prefix: import.meta.env.VITE_API_BASE_URL,
  retry: { limit: 0 },
  hooks: {
    beforeRequest: [
      ({ request }) => {
        const authorizationCode = localStorage.getItem('authorizationCode');

        if (authorizationCode) {
          request.headers.set('Authorization', authorizationCode);
        }
      },
    ],
  },
});

export default kyInstance;