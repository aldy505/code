import {lazy} from 'solid-js';
import {render} from 'solid-js/web';
// eslint-disable-next-line no-unused-vars
import {Router} from 'solid-app-router';
// eslint-disable-next-line no-unused-vars
import Default from './layouts/default.jsx';

const routes = [
  {
    path: '/',
    component: () => lazy(() => import('./pages/index.jsx')),
  },
  {
    path: '*all',
    component: () => lazy(() => import('./pages/index.jsx')),
  },
];

render(() => (
  <Router routes={routes}><Default /></Router>
), document.getElementById('app'));

