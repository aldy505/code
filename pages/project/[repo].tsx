import { useParams } from "solid-app-router";
import { createSignal, For, onMount, Show } from "solid-js";
import marked from 'marked';
import Navbar from "../../components/Navbar";
import { convertCase } from "../../config/case";
import projects from "../../config/projects";
import { GithubRepository } from "../../types/github";
import type { Project } from "../../types/project";
import 'solid-styled-jsx';
import css from '../../styles/repo.sass';
import Icons from "../../components/Icons";

async function fetchData(repo: string): Promise<Project> {
  const findData = projects.find(i => convertCase(i.title) === repo);

  if (!findData.repository) return {...findData, details: 'Oops, sorry. Nothing to see here yet.'};
  const repoPath = findData.repository.replace('https://github.com/', '');
  const github = await (await fetch(`https://api.github.com/repos/${repoPath}`)).json() as GithubRepository;
  const details = await (await fetch(`https://raw.githubusercontent.com/${repoPath}/${github.default_branch}/README.md`)).text();
  return {
    ...findData,
    github,
    details,
  }
}

function ProjectRepo() {
  const params = useParams<{repo: string}>();
  const [data, setData ] = createSignal<Project>();
  const [requestOk, setRequestOk] = createSignal<boolean>(false);

  onMount(async () => {
    const p = await fetchData(params.repo);
    setData(p);
    setRequestOk(true);
  })

  return (
    <div>
      <Navbar />
      <style jsx dynamic={false} global={false}>
        {`${css}`}
      </style>

      <Show when={requestOk()} fallback={<div>Please wait...</div>}>
        <h1 class="text-3xl font-bold text-left py-2">
          {data().title}
        </h1>
        <p class="text-left py-2">{data().description}</p>
        <div class="flex flex-row flex-wrap items-center">
          <For each={data().stack}>
            {item => <div class="flex-initial pr-2"><Icons name={item}></Icons></div>}
          </For>
        </div>
        <div innerHTML={marked(data().details)} class="repoContent pb-6 pt-4"></div>
      </Show>
    </div>
  )
}

export default ProjectRepo;

