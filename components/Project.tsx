import { For, Show } from 'solid-js';
import Icons from './Icons';
import { Project } from '../types/project';
import { NavLink } from 'solid-app-router';
import { convertCase } from '../config/case';

function ProjectCard(project: Project) {
  return (
    <div class="rounded-lg bg-steel-100 hover:bg-wisteria-200 lg:(opacity-70 p-4) p-3 hover:opacity-100 dark:(bg-steel-900 hover:bg-wisteria-900) transition duration-500 ease-in-out">
      <div class="flex flex-col">
        <div class="flex-1 py-2">
          <NavLink href={'/project/' + convertCase(project.title)}>
            <h2 class="text-xl font-bold">{project.title}</h2>
            <p class="text-base">{project.description}</p>
          </NavLink>
        </div>
        <div class="flex-1 py-2">
          <div class="flex-col md:flex-row items-center">
            <p class="text-xs text-gray-300 inline pr-2">{project.type.toUpperCase()}</p>
            <p class="text-xs text-gray-300 inline pr-2">{project.role.toUpperCase()}</p>
          </div>
        </div>
        <div class="flex-1 py-2">
          <div class="flex flex-row flex-wrap items-center">
            <For each={project.stack}>
              {item => <div class="flex-initial pr-2"><Icons name={item}></Icons></div>}
            </For>
          </div>
        </div>
        <div class="flex-1 py-2">
          <div class="flex flex-row flex-wrap items-center">
            <Show when={project.repository}>
              <div class="flex-initial pr-2">
                <a href={project.repository}>
                  <Icons name="github"></Icons>
                </a>
              </div>
              <div class="flex-initial pr-4 text-xs">
                <a href={project.repository}>Repository</a>
              </div>
            </Show>
            <Show when={project.website}>
              <div class="flex-initial pr-2">
                <a href={project.website}>
                  <Icons name="arrow-right"></Icons>
                </a>
              </div>
              <div class="flex-initial pr-2 text-xs">
                <a href={project.website}>Website</a>
              </div>
            </Show>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
