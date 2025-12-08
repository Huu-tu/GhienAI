import { createBrowserRouter } from 'react-router-dom';
import {  PUBLIC_ROUTERS } from 'config/constants';
import Layout from 'components/layout'
import Base from 'pages/base';
import Blog from 'pages/blog';
import ModalAddUpdateBlog from 'pages/blog/components/ModalAddUpdateBlog';
import ModalViewBlog from 'pages/blog/components/ModalViewBlog';
import Doc from 'pages/doc';
import ModalAddUpdateDoc from 'pages/doc/components/ModalAddUpdateDoc';
import CaseStudy from 'pages/case-study';
import ModalAddUpdateCase from 'pages/case-study/components/ModalAddUpdateCase';
import ModalViewCase from 'pages/case-study/components/ModalViewCase';
import About from 'pages/about';
import Contact from 'pages/contact';

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
    path: PUBLIC_ROUTERS.DOC.INDEX,
    children: [{
      path: PUBLIC_ROUTERS.DOC.INDEX,
      element: <Doc />,
    },{
      path: PUBLIC_ROUTERS.DOC.ADD_DOC,
      element: <ModalAddUpdateDoc />,
    }],
  },{
    path: PUBLIC_ROUTERS.CASE.INDEX,
    children: [{
      path: PUBLIC_ROUTERS.CASE.INDEX,
      element: <CaseStudy />,
    },{
      path: PUBLIC_ROUTERS.CASE.ADD_CASE,
      element: <ModalAddUpdateCase />,
    },{
      path: PUBLIC_ROUTERS.CASE.VIEW_CASE,
      element: <ModalViewCase />,
    }]
  },{
    path: PUBLIC_ROUTERS.ABOUT,
    element: <About />
  },{
    path: PUBLIC_ROUTERS.CONTACT,
    element: <Contact />
  }]
}])