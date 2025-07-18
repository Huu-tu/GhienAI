export const PUBLIC_ROUTERS = {
  BASE: '/',
  BLOG: {
    INDEX: '/blog',
    ADD_BLOG: '/blog/add-blog',
    VIEW_BLOG: '/blog/view-blog/:id',
  },
  DOC: '/doc',
  CASE: {
    INDEX: '/case-study',
    ADD_CASE: '/case-study/add-case',
    VIEW_CASE: '/case-study/view-case/:id'
  },
  REALUSE: '/application',
  ABOUT: '/about',
  CONTACT: '/contact',
} as const;

