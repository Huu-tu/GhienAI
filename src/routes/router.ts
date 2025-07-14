export const PUBLIC_ROUTERS = {
  BASE: '/',
  BLOG: {
    INDEX: '/blog',
    ADD_BLOG: '/blog/add-blog',
    VIEW_BLOG: '/blog/view-blog/:id',
  },
  DOC: '/doc',
  CASE: '/case',
  REALUSE: '/application',
  ABOUT: '/about',
  CONTACT: '/contact',
} as const;

