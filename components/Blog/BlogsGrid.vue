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
  data() {
    return {
      posts: [], // Initialize posts array
    };
  },
  async asyncData({ $axios }) {
    const query = `
      query MyQuery {
        allBlogs {
          id
          _publishedAt
          body {
            blocks
            links
            value
          }
          category {
            name
          }
          date
          coverImage {
            alt
            url
          }
          title
          slug
          description
        }
      }
    `;

    try {
      const response = await $axios.post('', { query }, {
        headers: {
          Authorization: `Bearer ${process.env.DATO_API_TOKEN}`,
        }
      });
      return {
        posts: response.data.data.allBlogs,
      };
    } catch (error) {
      console.error('Axios error:', error);
      return {
        posts: [],
      };
    }
  },
};
</script>

<style scoped>
/* Add any necessary styling here */
</style>
