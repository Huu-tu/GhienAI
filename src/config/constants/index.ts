export * from '../../routes/router';

export const QUERY_KEY = {
  // BLOG
  GET_BLOG: 'GET_BLOG',
  GET_BLOGS: 'GET_BLOGS',
  VIEW_BLOG: 'VIEW_BLOG',

  // CASE STUDY
  GET_CASES: 'GET_CASES',
  VIEW_CASE: 'VIEW_CASE',
};

export const NETWORK_CONFIG = {
  TIMEOUT: 30000,
  USE_TOKEN: true,
  WITH_CREDENTIALS: import.meta.env.VITE_WITH_CREDENTIALS === 'true',
} as const;

