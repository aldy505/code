<template>
  <div class="flex flex-col py-4 px-2 lg:px-0 hover:opacity-100">
    <div class="flex-1 text-sm hover:text-blue-300 font-bold">
      <a :href="url">
        <div class="flex flex-row items-center">
          <div class="flex-initial">
            <img
              :src="image.folder"
              class="text-white h-3 w-3 fill-current inline"
              alt="Repository"
            >
          </div>
          <div class="flex-initial px-4">
            {{ name }}
          </div>
        </div>
      </a>
    </div>
    <div class="flex-2 text-xs opacity-80 lg:w-2/3">
      {{ description }}
    </div>
    <div class="flex-1">
      <div class="flex flex-row items-center">
        <div class="flex-1 text-xs">
          <div class="flex flex-row items-center content-center">
            <div class="flex-initial">
              <svg
                v-show="language"
                class="h-2 w-2 inline"
                viewBox="0 0 100 100"
              >
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  :fill="getLanguageColor()"
                />
              </svg>
            </div>
            <div class="flex-initial px-2">
              {{ language }}
            </div>
          </div>
        </div>
        <div
          v-show="stars > 0"
          class="flex-2 text-xs"
        >
          <div class="flex flex-row items-center content-center">
            <div class="flex-initial">
              <img
                :src="image.star"
                class="text-white font-bold h-3 w-3 fill-current -inset-y-1"
                alt="Stargazers"
              >
            </div>
            <div class="flex-initial px-2">
              {{ stars }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Repository',
  props: {
    url: {
      type: String,
      required: true,
      default: '',
    },
    name: {
      type: String,
      required: true,
      default: '',
    },
    stars: {
      type: Number,
      required: false,
      default: null,
    },
    description: {
      type: String,
      required: false,
      default: '',
    },
    language: {
      type: String,
      required: false,
      default: '',
    },
  },
  data() {
    return {
      image: {
        folder: 'folder.svg',
        star: 'star.svg',
      },
      languageColor: 'white',
    };
  },
  methods: {
    getLanguageColor() {
      if (!this.language) {
        return;
      }

      switch (this.language.toLowerCase()) {
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
    },
  },
};
</script>
