import { render } from 'solid-js/web';
import 'virtual:windi.css';
import { Router } from 'solid-app-router';
import Default from './layouts/default';

render(() => (
  <Router>
    <Default />
  </Router>
), document.getElementById('root'));

