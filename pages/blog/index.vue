<template>
  <div>
    <h1>Blog</h1>
    <div v-if="error" class="error">{{ error }}</div>
    <ul v-else>
      <li v-for="article in articles" :key="article.id">
        <nuxt-link :to="'/blog/' + article.attributes.slug">
          <h2>{{ article.attributes.title }}</h2>
          <p>{{ article.attributes.description }}</p>
          <img
            v-if="article.attributes.cover && article.attributes.cover.data && article.attributes.cover.data.attributes.url"
            :src="article.attributes.cover.data.attributes.url" />
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { getArticles } from '@/services/articleService';

export default {
  data() {
    return {
      articles: [],
      error: null,
    };
  },
  async asyncData({ $axios }) {
    try {
      const data = await getArticles($axios);
      return {
        articles: data.data,
      };
    } catch (error) {
      return {
        error: 'Failed to fetch articles.',
      };
    }
  },
};
</script>

<style scoped>
.error {
  color: red;
}
</style>
