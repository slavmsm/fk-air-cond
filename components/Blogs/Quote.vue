<template>
  <div class="flex flex-col items-center mx-12 lg:mx-0 py-44">
    <h2 v-if="title" class="my-4">{{ title }}</h2>
    <div class="relative text-center">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor"
        class="absolute top-0 -left-4 w-4 h-4 dark:text-gray-700">
        <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
        <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
      </svg>
      <p class="px-6 py-1 text-lg italic">{{ body }}</p>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor"
        class="absolute bottom-0 -right-4 w-4 h-4 dark:text-gray-700">
        <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
        <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
      </svg>
    </div>
    <span class="w-12 h-1 my-2 rounded-lg dark:bg-violet-400"></span>
    <p v-if="author">{{ author }}</p>
    <p v-else>Unknown</p>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  computed: {
    title() {
      return this.data.title || '';
    },
    body() {
      return this.data.body || '';
    },
    author() {
      return this.data.author || '';
    }
  }
};
</script>

<style scoped>
/* Add your styles here */
</style>
