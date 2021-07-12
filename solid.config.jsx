import {lazy} from 'solid-js';
import {render} from 'solid-js/web';
import 'virtual:windi.css';
// eslint-disable-next-line no-unused-vars
import {Router} from 'solid-app-router';
// eslint-disable-next-line no-unused-vars
import Default from './layouts/default.jsx';

const route = [
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
  <Router routes={route}>
    <Default />
  </Router>
), document.getElementById('root'));

