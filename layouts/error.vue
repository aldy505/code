<template>
  <div class="bg-cool-gray-900 text-white min-h-screen min-w-full h-full w-full font-body">
    <div class="container mx-auto px-10 md:px-20 lg:px-32">
      <h1 class="text-3xl font-bold">
        Oh no, something went wrong.
      </h1>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    this.$router.push('/');
  },
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
};
</script>
