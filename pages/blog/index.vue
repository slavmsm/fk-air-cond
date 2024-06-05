<template>
  <div>
    <PageHeader title="Blogs" />
    <BlogsGrid />
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
  head() {
    return {
      title: "Blogs | FK Aircond Services",
    };
  },
};
</script>

<style scoped>
/* Add any necessary styling here */
</style>
