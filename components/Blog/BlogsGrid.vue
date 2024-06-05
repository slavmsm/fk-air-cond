<template>
  <div>
    <ul>
      <li v-for="post in posts" :key="post.id">
        <nuxt-link :to="`/blog/${post.slug}`">
          <img :src="post.coverImage.url" :alt="post.coverImage.alt" />
          <h2>{{ post.title }}</h2>
          <div v-html="post.description"></div>
          <p>Category: {{ post.category.name }}</p>
          <p>Date: {{ post.date }}</p>
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "BlogsGrid",
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
  mounted() {
    console.log('Posts received:', this.posts);
  },
};
</script>

<style scoped>
/* Add any necessary styling here */
</style>
