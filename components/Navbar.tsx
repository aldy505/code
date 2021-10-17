import { NavLink } from 'solid-app-router';
import { onMount } from 'solid-js';

function Navbar() {

  onMount(async () => {

  })
  
  return (
    <section class="w-full flex flex-col md:flex-row justify-between py-6 items-center">
        <div class="flex-3">
          <NavLink href="/">
            <h1 class="text-3xl font-bold inline-block">Reinaldy Rafli </h1>
            <img
              src="/me.png"
              alt="My Memoji"
              class="w-14 h-auto md:py-4 inline pl-4"
            />
          </NavLink>
        </div>
        <div class="flex-1 text-right py-2 text-2xl">Projects</div>
      </section>
  );
}

export default Navbar;
