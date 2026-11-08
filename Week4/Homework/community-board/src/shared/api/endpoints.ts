const API_PREFIX = '/api/v1';

export const API_ENDPOINTS = {
  posts: {
    list: `${API_PREFIX}/posts`,
    detail: (postId: number | string) => `${API_PREFIX}/posts/${postId}`,
    create: `${API_PREFIX}/posts`,
    update: (postId: number | string) => `${API_PREFIX}/posts/${postId}`,
    delete: (postId: number | string) => `${API_PREFIX}/posts/${postId}`,
  },
  members: {
    authorizationCode: `${API_PREFIX}/members/authorization-code`,
  },
} as const;
