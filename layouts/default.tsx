import { RouteDefinition, useRoutes } from 'solid-app-router';
import { For, lazy } from 'solid-js';
import { MetaProvider, Title, Link, Meta } from 'solid-meta';
import head from '../config/head';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/700.css';
import '@fontsource/ibm-plex-mono/400.css';
import '../styles/default.sass';

const route: RouteDefinition[] = [
  {
    path: '/',
    component: lazy(() => import('../pages/index')),
  },
  {
    path: '/project/:repo',
    component: lazy(() => import('../pages/project/[repo]')),
  },
  {
    path: '*all',
    component: lazy(() => import('../pages/index')),
  },
];

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
      <div class="bg-cool-gray-100 text-black dark:(bg-cool-gray-900 text-white) min-h-screen min-w-full h-full w-full font-body">
        <div class="container mx-auto px-10 md:px-20 lg:px-32">
          <Routes />
        </div>
      </div>
    </>
  );
}

export default Default;
