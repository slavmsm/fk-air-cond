<template>
  <div>
    <PageHeader title="Blog Details" />
    <BlogDetails :post="post" />
  </div>
</template>

<script>
import PageHeader from "~/components/PageHeader";
import BlogDetails from "~/components/Blog/BlogDetails.vue";

export default {
  components: {
    PageHeader,
    BlogDetails,
  },
  async asyncData({ params, $axios }) {
    const query = `
      query Blog($slug: String!) {
        blog(filter: { slug: { eq: $slug } }) {
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
    const variables = { slug: params.slug };

    try {
      const response = await $axios.post('', { query, variables }, {
        headers: {
          Authorization: `Bearer ${process.env.DATO_API_TOKEN}`,
        }
      });
      console.log('Axios response:', response);
      return {
        post: response.data.data.blog,
      };
    } catch (error) {
      console.error('Axios error:', error);
      return {
        post: null,
      };
    }
  },
};
</script>

<style scoped>
/* Add any necessary styling here */
</style>
