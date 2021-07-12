// eslint-disable-next-line no-unused-vars
import {Route} from 'solid-app-router';
// eslint-disable-next-line no-unused-vars
import {For} from 'solid-js';
// eslint-disable-next-line no-unused-vars
import {MetaProvider, Title, Link, Meta} from 'solid-meta';
import head from '../config/head.js';

function Default() {
  return (
    <>
      <MetaProvider>
        <Route />
        <Title>{head.title}</Title>
        <For each={head.link}>{link =>
          <Link rel={link.rel} href={link.href} type={link?.type ?? ''} />
        }</For>
        <For each={head.meta}>{meta =>
          <Meta name={meta?.name ?? ''} property={meta?.property ?? ''} content={meta.content} />
        }</For>
      </MetaProvider>
    </>
  );
}

export default Default;
