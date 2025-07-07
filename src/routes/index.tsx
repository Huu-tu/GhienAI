import { createBrowserRouter } from 'react-router-dom';
import {  PUBLIC_ROUTERS } from 'config/constants';
import Layout from 'components/layout'
import Base from 'pages/base';

export const routers = createBrowserRouter([{
  element: <Layout />,
  children:[{
    path: PUBLIC_ROUTERS.BASE,
    element: <Base />
  }]
}])