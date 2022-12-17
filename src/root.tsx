// @refresh reload
import { For, Suspense } from 'solid-js';
import {
  Body,
  ErrorBoundary,
  FileRoutes,
  Head,
  Html,
  Link,
  Meta,
  Routes,
  Scripts,
  Title,
} from 'solid-start';
import 'virtual:windi.css';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/700.css';
import '@fontsource/ibm-plex-mono/400.css';
import head from './config/head';
import './styles/default.sass';

export default function Root() {
  return (
    <Html lang='en'>
      <Head>
        <Title>{head.title}</Title>
        <Meta charset='utf-8' />
        <For each={head.link}>{link =>
          <Link rel={link.rel} href={link.href} type={link?.type ?? ''} />
        }</For>
        <For each={head.meta}>{meta =>
          <Meta name={meta?.name ?? ''} property={meta?.property ?? ''} content={meta.content} />
        }</For>
        <Meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <Body>
        <ErrorBoundary>
          <Suspense>
            <div class='bg-cool-gray-100 text-black dark:(bg-cool-gray-900 text-white) min-h-screen min-w-full h-full w-full font-body'>
              <div class='container mx-auto px-10 md:px-20 lg:px-32'>
                <Routes>
                  <FileRoutes />
                </Routes>
              </div>
            </div>
          </Suspense>
        </ErrorBoundary>
        <Scripts />
      </Body>
    </Html>
  );
}
