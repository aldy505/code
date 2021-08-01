// eslint-disable-next-line no-unused-vars
import { NavLink } from 'solid-app-router';
// eslint-disable-next-line no-unused-vars
import { For, Show } from 'solid-js';
// eslint-disable-next-line no-unused-vars
import Icons from '../components/Icons';
import projects from '../config/projects';

function Projects() {
  return (
    <>
      <section className="w-full flex flex-col md:flex-row justify-between py-6 items-center">
        <div className="flex-3">
          <NavLink href="/">
            <h1 className="text-3xl font-bold inline-block">Reinaldy Rafli </h1>
            <img
              src="/me.png"
              alt="My Memoji"
              class="w-14 h-auto md:py-4 inline pl-4"
            />
          </NavLink>
        </div>
        <div className="flex-1 text-right py-2 text-2xl">Projects</div>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-flow-row gap-4 py-8">
        <For each={projects}>
          {project =>
            <div className="p-4 rounded-lg bg-steel-900 hover:bg-wisteria-800 transition duration-500 ease-in-out">
              <div className="flex flex-col">
                <div className="flex-1 py-2">
                  <h2 className="text-xl font-bold">{project.title}</h2>
                  <p className="text-base">{project.description}</p>
                </div>
                <div className="flex-1 py-2">
                  <div className="flex-col md:flex-row items-center">
                    <p className="text-xs text-gray-300 inline pr-2">{project.type.toUpperCase()}</p>
                    <p className="text-xs text-gray-300 inline pr-2">{project.role.toUpperCase()}</p>
                  </div>
                </div>
                <div className="flex-1 py-2">
                  <div className="flex flex-row flex-wrap items-center">
                    <For each={project.stack}>
                      {item => <div className="flex-initial pr-2"><Icons name={item}></Icons></div>}
                    </For>
                  </div>
                </div>
                <div className="flex-1 py-2">
                  <div className="flex flex-row flex-wrap items-center">
                    <Show when={project.repository}>
                      <div className="flex-initial pr-2">
                        <a href={project.repository}>
                          <Icons name="github"></Icons>
                        </a>
                      </div>
                      <div className="flex-initial pr-4 text-xs">
                        <a href={project.repository}>Repository</a>
                      </div>
                    </Show>
                    <Show when={project.website}>
                      <div className="flex-initial pr-2">
                        <a href={project.website}>
                          <Icons name="arrow-right"></Icons>
                        </a>
                      </div>
                      <div className="flex-initial pr-2 text-xs">
                        <a href={project.website}>Website</a>
                      </div>
                    </Show>
                  </div>
                </div>
              </div>
            </div>
          }
        </For>
      </section>

      <section className="py-4">
        <p className="text-sm text-center text-gray-100 pb-8 lg:opacity-80 hover:opacity-100 transition duration-500 ease-in-out">
          These are just a few of my projects.
          Explore more on my <a className="hover:underline" href="https://www.github.com/aldy505">Github</a>
        </p>
      </section>
    </>
  );
}

export default Projects;
