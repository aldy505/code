import { createSignal, For, Show } from 'solid-js';
import projects from '../../config/projects';
import ProjectCard from '../Project';

function Projects() {
  const [toggleLibrary, setToggleLibrary] = createSignal<boolean>(false);
  const libraryProjects = projects.filter(project => project.type === 'library');
  const moreLibraries = libraryProjects.slice(6);

  const [toggleApplication, setToggleApplication] = createSignal<boolean>(false);
  const applicationProjects = projects.filter(project => project.type === 'application');
  const moreApplications = applicationProjects.slice(6);

  return (
    <>
      <section id='projects'>
        <div><h2 class='text-3xl font-bold py-2'>Library</h2></div>
        <div class='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-flow-row gap-4 py-8'>
          <For each={libraryProjects.slice(0, 6)}>
            {project => <ProjectCard {...project} />}
          </For>
          <Show when={moreLibraries.length > 0}>
            <Show when={toggleLibrary()} fallback={<div onClick={() => setToggleLibrary(true)} class='text-center py-4 w-full cursor-pointer self-center'>See more libraries</div>}>
              <For each={moreLibraries}>
                {project => <ProjectCard {...project} />}
              </For>
              <div onClick={() => setToggleLibrary(false)} class='text-center py-4 w-full cursor-pointer self-center'>Show less libraries</div>
            </Show>
          </Show>
        </div>
      </section>
      <section>
        <div><h2 class='text-3xl font-bold py-2'>Application</h2></div>
        <div class='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-flow-row gap-4 py-8'>
          <For each={applicationProjects.slice(0, 6)}>
            {project => <ProjectCard {...project} />}
          </For>
          <Show when={moreApplications.length > 0}>
            <Show when={toggleApplication()} fallback={<div onClick={() => setToggleApplication(true)} class='text-center py-4 w-full cursor-pointer self-center'>See more applications</div>}>
              <For each={moreApplications}>
                {project => <ProjectCard {...project} />}
              </For>
              <div onClick={() => setToggleApplication(false)} class='text-center py-4 w-full cursor-pointer self-center'>Show less applications</div>
            </Show>
          </Show>
        </div>
      </section>

      <section class='py-4'>
        <p class='text-sm text-center text-gray-100 pb-8 lg:opacity-80 hover:opacity-100 transition duration-500 ease-in-out'>
          These are just a few of my projects.&nbsp;
          <a class='hover:underline' href='https://www.github.com/aldy505'>Explore more on my Github</a>
        </p>
      </section>
    </>
  );
}

export default Projects;
