import { RouteDefinition, useRoutes } from 'solid-app-router';
import { For, lazy } from 'solid-js';
import { MetaProvider, Title, Link, Meta } from 'solid-meta';

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

      <Routes />

    </>
  );
}

export default Default;
