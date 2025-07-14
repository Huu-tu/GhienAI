import { createBrowserRouter } from 'react-router-dom';
import {  PUBLIC_ROUTERS } from 'config/constants';
import Layout from 'components/layout'
import Base from 'pages/base';
import Blog from 'pages/blog';
import ModalAddUpdateBlog from 'pages/blog/components/ModalAddUpdateBlog';
import ModalViewBlog from 'pages/blog/components/ModalViewBlog';
import Doc from 'pages/doc';
import CaseStudy from 'pages/case-study';
import About from 'pages/about';

export const routers = createBrowserRouter([{
  element: <Layout />,
  children:[{
    path: PUBLIC_ROUTERS.BASE,
    element: <Base />
  },{
    path: PUBLIC_ROUTERS.BLOG.INDEX,
    children: [{
      path: PUBLIC_ROUTERS.BLOG.INDEX,
      element: <Blog />,
    },{
      path: PUBLIC_ROUTERS.BLOG.ADD_BLOG,
      element: <ModalAddUpdateBlog />,
    },{
      path: PUBLIC_ROUTERS.BLOG.VIEW_BLOG,
      element: <ModalViewBlog />,
    }]
  },{
    path: PUBLIC_ROUTERS.DOC,
    element: <Doc />
  },{
    path: PUBLIC_ROUTERS.CASE,
    element: <CaseStudy />
  },{
    path: PUBLIC_ROUTERS.ABOUT,
    element: <About />
  }]
}])