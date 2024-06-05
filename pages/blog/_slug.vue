<template>
  <div v-if="post">
    <h1>{{ post.title }}</h1>
    <img :src="post.coverImage.url" :alt="post.coverImage.alt" />
    <div v-html="post.description"></div>
    <div v-html="renderBody(post.body?.value.document)"></div>
    <p>Category: {{ post.category.name }}</p>
    <p>Date: {{ post.date }}</p>
  </div>
  <div v-else>Loading...</div>
</template>

<script>
export default {
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
  methods: {
    renderBody(document) {
      if (!document) return '';

      let renderedText = '';

      document.children.forEach(child => {
        if (child.type === 'paragraph') {
          renderedText += '<p>';
          child.children.forEach(span => {
            if (span.type === 'span' && span.value) {
              if (span.marks && span.marks.includes('strong')) {
                renderedText += `<strong>${span.value}</strong>`;
              } else {
                renderedText += span.value;
              }
            }
          });
          renderedText += '</p>';
        }
      });

      return renderedText;
    }
  }
};
</script>

<style>
/* Add any necessary styling here */
</style>
