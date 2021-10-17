import { For } from 'solid-js';
import projects from '../../config/projects';
import ProjectCard from '../Project';

function Projects() {
  return (
    <>
      <section id="projects">
        <div><h2 class="text-3xl font-bold py-2">Library</h2></div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-flow-row gap-4 py-8">
          <For each={projects.filter(o => o.type === 'library')}>
            {project => <ProjectCard {...project} />}
          </For>
        </div>
      </section>
      <section>
        <div><h2 class="text-3xl font-bold py-2">Application</h2></div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-flow-row gap-4 py-8">
          <For each={projects.filter(o => o.type === 'application')}>
            {project => <ProjectCard {...project} />}
          </For>
        </div>
      </section>

      <section class="py-4">
        <p class="text-sm text-center text-gray-100 pb-8 lg:opacity-80 hover:opacity-100 transition duration-500 ease-in-out">
          These are just a few of my projects.&nbsp;
          <a class="hover:underline" href="https://www.github.com/aldy505">Explore more on my Github</a>
        </p>
      </section>
    </>
  );
}

export default Projects;
