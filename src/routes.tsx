import React from 'react';
import { Suspense, lazy } from 'react';
import MainLayout from './components/MainLayout';
import LoadingScreen from './components/LoadingScreen';

const Loadable =
  (Component: React.LazyExoticComponent<() => JSX.Element>) =>
  (props: Record<string, unknown>) =>
    (
      <Suspense fallback={<LoadingScreen />}>
        <Component {...props} />
      </Suspense>
    );

const Home = Loadable(lazy(async () => import('./pages/home/Home')));

const routes = [
  {
    path: '*',
    element: <MainLayout />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: '401',
        element: <Home />,
      },
      {
        path: '404',
        element: <Home />,
      },
      {
        path: '500',
        element: <Home />,
      },
      {
        path: '*',
        element: <Home />,
      },
    ],
  },
];

export default routes;
