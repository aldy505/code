import { render } from 'solid-js/web';
import 'virtual:windi.css';
// eslint-disable-next-line no-unused-vars
import { Router, useRoutes } from 'solid-app-router';
// eslint-disable-next-line no-unused-vars
import Default from './layouts/default.jsx';

render(() => (
  <Router>
    <Default />
  </Router>
), document.getElementById('root'));

