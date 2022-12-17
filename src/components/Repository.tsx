import { GithubLanguage } from '../types/github';

const image = {
  folder: 'folder.svg',
  star: 'star.svg',
};

function getLanguageColor(language: GithubLanguage) {
  if (!language) {
    return;
  }

  switch (language.toLowerCase()) {
    case 'go':
      return '#a1d5ed';

    case 'julia':
      return '#d35bde';

    case 'javascript':
      return '#e4f060';

    case 'typescript':
      return '#4e85de';

    case 'vue':
      return '#4ede85';

    case 'shell':
      return '#9dde4e';

    case 'html':
      return '#de704e';

    default:
      return '#bab7b6';
  }
}

interface Props {
  url: string;
  name: string;
  description: string;
  language: string;
  stars: number;
}

function Repository(props: Partial<Props>) {
  return (
    <div class='flex flex-col py-4 px-2 lg:px-0 opacity-80 hover:opacity-100 transition duration-500 ease-in-out'>
      <div class='flex-1 text-sm hover:text-blue-300 font-bold transition duration-500 ease-in-out'>
        <a href={props.url}>
          <div class='flex flex-row items-center'>
            <div class='flex-initial'>
              <img
                src={image.folder}
                class='text-black dark:text-white h-3 w-3 fill-current inline'
                alt='Repository'
              />
            </div>
            <div class='flex-initial px-4'>
              { props.name }
            </div>
          </div>
        </a>
      </div>
      <div class='flex-2 text-xs opacity-80 lg:w-2/3'>
        { props.description }
      </div>
      <div class='flex-1'>
        <div class='flex flex-row items-center'>
          <div class='flex-1 text-xs'>
            <div class='flex flex-row items-center content-center'>
              <div class='flex-initial'>
                <svg
                  v-show='language'
                  class='h-2 w-2 inline'
                  viewBox='0 0 100 100'
                >
                  <circle
                    cx='50'
                    cy='50'
                    r='40'
                    fill={getLanguageColor(props.language as GithubLanguage)}
                  />
                </svg>
              </div>
              <div class='flex-initial px-2'>
                { props.language }
              </div>
            </div>
          </div>
          <div
            v-show='stars > 0'
            class='flex-2 text-xs'
          >
            <div class='flex flex-row items-center content-center'>
              <div class='flex-initial'>
                <img
                  src={image.star}
                  class='text-white font-bold h-3 w-3 fill-current -inset-y-1'
                  alt='Stargazers'
                />
              </div>
              <div class='flex-initial px-2'>
                { props.stars }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Repository;
