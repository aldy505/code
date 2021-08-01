import { useRoutes } from 'solid-app-router';
// eslint-disable-next-line no-unused-vars
import { For, lazy } from 'solid-js';
// eslint-disable-next-line no-unused-vars
import { MetaProvider, Title, Link, Meta } from 'solid-meta';
import head from '../config/head.js';
import '@fontsource/poppins';

const route = [
  {
    path: '/',
    component: () => lazy(() => import('../pages/index.jsx')),
  },
  {
    path: '/projects',
    component: () => lazy(() => import('../pages/projects.jsx')),
  },
  {
    path: '*all',
    component: () => lazy(() => import('../pages/index.jsx')),
  },
];

// eslint-disable-next-line no-unused-vars
const Routes = useRoutes(route);

function Default() {
  return (
    <>
      <MetaProvider>
        <Title>{head.title}</Title>
        <For each={head.link}>{link =>
          <Link rel={link.rel} href={link.href} type={link?.type ?? ''} />
        }</For>
        <For each={head.meta}>{meta =>
          <Meta name={meta?.name ?? ''} property={meta?.property ?? ''} content={meta.content} />
        }</For>
      </MetaProvider>
      <div class="bg-cool-gray-900 text-white min-h-screen min-w-full h-full w-full font-body">
        <div class="container mx-auto px-10 md:px-20 lg:px-32">
          <Routes />
        </div>
      </div>
    </>
  );
}

export default Default;
