<!-- pages/blog/_slug.vue -->
<template>
  <div>
    <h1>{{ article.attributes.title }}</h1>
    <p>{{ article.attributes.description }}</p>
    <p>{{ article.attributes.createdAt }}</p>
    <p>{{ article.attributes.blocks }}</p>
    <img :src="article.attributes.cover.data.attributes.formats.large.url">
  </div>
</template>

<script>
export default {
  async asyncData({ $axios, params }) {
    try {
      const response = await $axios.get(`/articles?filters[slug][$eq]=${params.slug}&populate=*`);
      const article = response.data.data[0];
      return { article };
    } catch (error) {
      return { error: 'Article not found.' };
    }
  },
  data() {
    return {
      article: null,
      error: null,
    };
  },
};
</script>


<style scoped>
/* Add your styles here */
</style>
