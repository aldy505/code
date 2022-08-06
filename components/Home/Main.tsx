import { For } from 'solid-js';
import MadeWithLove from '../MadeWithLove';
import LinkList from '../LinkList';

const image = {
  me: '/me.png',
};

const link = [
  {
    link: '#projects',
    text: 'Projects',
  },
  {
    link: 'mailto:aldy505@proton.me',
    text: 'Email',
  },
  {
    link: 'https://t.me/aldy505',
    text: 'Telegram',
  },
];

function Home() {
  return (
    <div class='h-full lg:min-h-screen flex flex-col lg:flex-row items-center justify-around'>
      <div class='flex-1 pt-12 pb-4 md:pt-0 md:pb-0'>
        <div class='flex flex-row items-center'>
          <div class='flex-initial'>
            <h1 class='text-5xl md:text-8xl font-bold py-4'>
              Reinaldy Rafli
            </h1>
          </div>
          <div class='flex-initial md:pl-4'>
            <img
              src={image.me}
              alt='My Memoji'
              class='w-full md:w-2/3 h-auto md:py-4'
            />
          </div>
        </div>

        <p class='text-base py-2 md:w-2/3'>
          Not a CS student, yet currently working in the IT industry, but most of the time I do web development. Always love to be working on a cool project 😉
        </p>

        <div class='text-sm py-2 lg:pt-8 lg:pb-0 hidden md:block'>
          <MadeWithLove />
        </div>
      </div>

      <div class='flex-1 pl-0 lg:pl-12 h-full w-full pb-4 lg:(w-auto pb-0)'>
        <ul class='list-none'>
          <For each={link}>{item =>
            <LinkList link={item.link} text={item.text} />
          }</For>
        </ul>
      </div>
    </div>
  );
}

export default Home;
