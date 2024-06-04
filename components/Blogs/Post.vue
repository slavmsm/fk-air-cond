<template>
  <article class="space-y-8 dark:bg-black dark:text-gray-50">
    <img v-if="imageUrl" :src="imageUrl" alt="article cover image" class="w-full h-96 object-cover rounded-lg" />
    <div class="space-y-6">
      <h1 class="leading-tight text-5xl font-bold">{{ data.attributes.title }}</h1>
      <div class="flex flex-col items-start justify-between w-full md:flex-row md:items-center dark:text-gray-400">
        <div class="flex items-center md:space-x-2">
          <img v-if="authorImgUrl" :src="authorImgUrl" alt="author image"
            class="w-14 h-14 border rounded-full dark:bg-gray-500 dark:border-gray-700" />
          <p class="text-md dark:text-violet-400">{{ author && author.name }} • {{
            formatDate(data.attributes.publishedAt) }}</p>
        </div>
      </div>
    </div>

    <div class="dark:text-gray-100">
      <p>{{ data.attributes.description }}</p>

      <component v-for="(section, index) in data.attributes.blocks" :key="index" :is="postRenderer(section, index)" />
    </div>
  </article>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  methods: {
    postRenderer(section, index) {
      // Implement your postRenderer method logic here
      // You can use Vue components or plain HTML depending on the section.__component
    }
  },
  computed: {
    imageUrl() {
      return this.getStrapiMedia(this.data.attributes.cover.data?.attributes.url);
    },
    authorImgUrl() {
      return this.getStrapiMedia(this.data.attributes.authorsBio.data?.attributes.avatar.data.attributes.url);
    },
    author() {
      return this.data.attributes.authorsBio.data?.attributes;
    }
  },
  methods: {
    formatDate(dateString) {
      // Implement formatDate method logic here
    },
    getStrapiMedia(url) {
      // Implement getStrapiMedia method logic here
    }
  }
};
</script>

<style scoped>
/* Add your component-specific styles here */
</style>
