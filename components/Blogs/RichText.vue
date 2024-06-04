<template>
  <section class="rich-text py-6 dark:bg-black dark:text-gray-50">
    <vue-markdown :source="data.body" :options="{ breaks: true, gfm: true }" />
  </section>
</template>

<script>
import VueMarkdown from 'vue-markdown';

export default {
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  components: {
    VueMarkdown
  }
};
</script>

<!-- Add any necessary styles -->
<style scoped>
/* Add your styles here */
</style>
