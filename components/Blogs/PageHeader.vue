<template>
  <div class="my-16 w-full text-center">
    <span v-if="text" class="text-violet-400 font-bold">{{ text }}</span>
    <h2 class="text-4xl my-4 lg:text-5xl font-bold font-heading">{{ heading }}</h2>
  </div>
</template>

<script>
export default {
  name: 'PageHeader', // Provide the name option
  props: {
    heading: String,
    text: String,
  },
};
</script>

<style scoped>
/* Add scoped styles if needed */
</style>
