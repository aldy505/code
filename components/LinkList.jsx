import { createSignal } from 'solid-js';

function LinkList({ link, text, subtext }) {
  const [hoverState, setHoverState] = createSignal(false);
  return (
    <li
      class="opacity-75 hover:opacity-100 transition duration-500 ease-in-out"
      onMouseOver={() => setHoverState(true)}
      onMouseOut={() => setHoverState(false)}
    >
      <a
        href={link}
        class="hover:underline-light-300 hover:text-blue-100"
      >{text}</a>
      <p class={hoverState() ? 'inline px-3' : 'hidden'} class="transition duration-500 ease-in-out hover:opacity-90 opacity-50">— {subtext}</p>
    </li>
  );
}

export default LinkList;
