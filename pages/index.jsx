// eslint-disable-next-line no-unused-vars
import {createEffect, createMemo, createSignal, For, onMount, Show, Suspense} from 'solid-js';
import anime from 'animejs';
// eslint-disable-next-line no-unused-vars
import MadeWithLove from '../components/MadeWithLove';
// eslint-disable-next-line no-unused-vars
import Repository from '../components/Repository';
import getRepositories from '../components/GetRepositories';

const image = {
  me: 'me.png',
};

function Index() {
  const [repositories, setRepositories] = createSignal({});
  const [repoRequest, setRepoRequest] = createSignal(false);

  onMount(async () => {
    try {
      const repos = await getRepositories();
      setRepositories(repos);
      setRepoRequest(true);
      anime({
        targets: '.repository',
        opacity: [
          {value: 0, duration: 500, delay: 500},
          {value: 100, duration: 4000},
        ],
        translateY: [
          {value: 800, duration: 500, delay: 800},
          {value: 0, duration: 4000},
        ],
      });
    } catch {
      setRepoRequest(false);
    }
  });

  return (
    <div className="bg-cool-gray-900 text-white min-h-screen min-w-full h-full w-full font-body">
      <div class="container mx-auto px-10 md:px-20 lg:px-32">
        <div class="h-full lg:min-h-screen flex flex-col lg:flex-row items-center justify-content">
          <div class="flex-1 pt-12 pb-4 md:pt-0 md:pb-0">
            <div class="flex flex-row items-center">
              <div class="flex-initial">
                <h1 class="text-5xl md:text-8xl font-bold py-4">
                  Reinaldy Rafli
                </h1>
              </div>
              <div class="flex-initial md:pl-4">
                <img
                  src={image.me}
                  alt="My Memoji"
                  class="w-full md:w-2/3 h-auto md:py-4"
                />
              </div>
            </div>

            <p class="text-base py-2 md:w-2/3">
              Not a CS student, don't work in IT industry, but most of the time I do web development. Always love to be working on a cool project 😉
            </p>

            <ul class="list-none text-base py-2">
              <li>
                <a
                  href="mailto:aldy505@tutanota.com"
                  class="opacity-75 hover:opacity-100 hover:underline-light-300 hover:text-blue-100 transition duration-500 ease-in-out"
                >Email</a>
              </li>
              <li>
                <a
                  href="https://www.github.com/aldy505"
                  class="opacity-75 hover:opacity-100 hover:underline-light-300 hover:text-blue-100 transition duration-500 ease-in-out"
                >Github</a>
              </li>
              <li>
                <a
                  href="https://t.me/aldy505"
                  class="opacity-75 hover:opacity-100 hover:underline-light-300 hover:text-blue-100 transition duration-500 ease-in-out"
                >Telegram</a>
              </li>
            </ul>

            <div class="text-sm py-2 hidden md:block">
              <MadeWithLove />
            </div>
          </div>

          <div class="flex-1 pl-0 lg:pl-12">
            <Show when={repoRequest()} fallback={<div></div>}>
              <div class="repository">
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 place-content-center">
                  <For each={repositories()}>{repo =>
                    <div class="line">
                      <Repository
                        url={repo.html_url}
                        name={repo.name}
                        stars={repo.stargazers_count}
                        language={repo.language}
                        description={repo.description}
                      />
                    </div>
                  }</For>
                  <div class="line">
                    <p class="text-sm opacity-75 hover:opacity-100 hover:text-blue-100 hover:underline md:pb-0 pb-4 transition duration-500 ease-in-out">
                      <a href="https://www.github.com/aldy505">
                        Explore more on Github &mdash;&gt;
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </Show>
          </div>

          <div class="flex-initial md:hidden py-4">
            <MadeWithLove />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
