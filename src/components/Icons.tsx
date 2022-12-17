// Originally created by Konpa (under MIT License) and
// supported by various contributors.
// Copyright (C) 2015 Konpa
//
// All product names, logos, and brandsare property of their respective owners.
// All company, product and service names used in this website are for identification purposes only.
// Use of these names, logos, and brands does not imply endorsement.

import { Match, Switch } from 'solid-js';
import { Stack } from '../types/project';
import Bash from './Icons/Bash';
import Bootstrap from './Icons/Bootstrap';
import Bulma from './Icons/Bulma';
import C from './Icons/C';
import CPlusPlus from './Icons/CPlusPlus';
import Crystal from './Icons/Crystal';
import CSharp from './Icons/CSharp';
import Docker from './Icons/Docker';
import Go from './Icons/Go';
import Javascript from './Icons/Javascript';
import Julia from './Icons/Julia';
import Kafka from './Icons/Kafka';
import Lua from './Icons/Lua';
import MongoDB from './Icons/MongoDB';
import MySQL from './Icons/MySQL';
import Nextjs from './Icons/Nextjs';
import Nodejs from './Icons/Nodejs';
import Nuxtjs from './Icons/Nuxtjs';
import PostgreSQL from './Icons/PostgreSQL';
import Prometheus from './Icons/Prometheus';
import Redis from './Icons/Redis';
import Rust from './Icons/Rust';
import Sass from './Icons/Sass';
import Sentry from './Icons/Sentry';
import Solidjs from './Icons/Solidjs';
import Svelte from './Icons/Svelte';
import TailwindCSS from './Icons/TailwindCSS';
import Typescript from './Icons/Typescript';
import Vuejs from './Icons/Vuejs';

interface Props {
  name: Stack;
}

function Icons(props: Props) {
  return (
    <>
      <Switch fallback={<p>{String(props.name).charAt(0).toUpperCase() + String(props.name).substring(1)}</p>}>
        <Match when={props.name.toLowerCase() === 'bootstrap'}>
          <Bootstrap />
        </Match>
        <Match when={props.name.toLowerCase() === 'bulma'}>
          <Bulma />
        </Match>
        <Match when={props.name.toLowerCase() === 'docker'}>
          <Docker />
        </Match>
        <Match when={props.name.toLowerCase() === 'go'}>
          <Go />
        </Match>
        <Match when={props.name.toLowerCase() === 'javascript'}>
          <Javascript />
        </Match>
        <Match when={props.name.toLowerCase() === 'julia'}>
          <Julia />
        </Match>
        <Match when={props.name.toLowerCase() === 'lua'}>
          <Lua />
        </Match>
        <Match when={props.name.toLowerCase() === 'mongodb'}>
          <MongoDB />
        </Match>
        <Match when={props.name.toLowerCase() === 'mysql'}>
          <MySQL />
        </Match>
        <Match when={props.name.toLowerCase() === 'nextjs'}>
          <Nextjs />
        </Match>
        <Match when={props.name.toLowerCase() === 'nodejs'}>
          <Nodejs />
        </Match>
        <Match when={props.name.toLowerCase() === 'nuxtjs'}>
          <Nuxtjs />
        </Match>
        <Match when={props.name.toLowerCase() === 'postgresql'}>
          <PostgreSQL />
        </Match>
        <Match when={props.name.toLowerCase() === 'redis'}>
          <Redis />
        </Match>
        <Match when={props.name.toLowerCase() === 'rust'}>
          <Rust />
        </Match>
        <Match when={props.name.toLowerCase() === 'sass'}>
          <Sass />
        </Match>
        <Match when={props.name.toLowerCase() === 'sentry'}>
          <Sentry />
        </Match>
        <Match when={props.name.toLowerCase() === 'solidjs'}>
          <Solidjs />
        </Match>
        <Match when={props.name.toLowerCase() === 'tailwindcss'}>
          <TailwindCSS />
        </Match>
        <Match when={props.name.toLowerCase() === 'typescript'}>
          <Typescript />
        </Match>
        <Match when={props.name.toLowerCase() === 'vuejs'}>
          <Vuejs />
        </Match>
        <Match when={props.name.toLowerCase() === 'svelte'}>
          <Svelte />
        </Match>
        <Match when={props.name.toLowerCase() === 'c'}>
          <C />
        </Match>
        <Match when={props.name.toLowerCase() === 'c++'}>
          <CPlusPlus />
        </Match>
        <Match when={props.name.toLowerCase() === 'csharp'}>
          <CSharp />
        </Match>
        <Match when={props.name.toLowerCase() === 'crystal'}>
          <Crystal />
        </Match>
        <Match when={props.name.toLowerCase() === 'kafka'}>
          <Kafka />
        </Match>
        <Match when={props.name.toLowerCase() === 'prometheus'}>
          <Prometheus />
        </Match>
        <Match when={props.name.toLowerCase() === 'bash'}>
          <Bash />
        </Match>
      </Switch>
    </>
  );
}

export default Icons;
