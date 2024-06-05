<template>
  <div>
    <PageHeader title="Blogs" />
    <BlogsGrid :posts="posts" />
    <CallToAction />
  </div>
</template>

<script>
import PageHeader from "~/components/PageHeader";
import BlogsGrid from "~/components/Blog/BlogsGrid.vue";
import CallToAction from "~/components/CallToAction";

export default {
  components: {
    PageHeader,
    BlogsGrid,
    CallToAction,
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
      console.log('Fetched posts:', response.data.data.allBlogs);
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
