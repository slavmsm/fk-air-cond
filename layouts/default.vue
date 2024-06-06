<template>
  <div>
    <Header />
    <nuxt />
    <Footer />
  </div>
</template>

<script>
import Header from "~/components/Header";
import Footer from "~/components/Footer";
export default {
  components: {
    Header,
    Footer,
  },
  head() {
    return {
      title: "FK Aircond Services",
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start();
      setTimeout(() => this.$nuxt.$loading.finish(), 500);
    });
  },
};
</script>

<style></style>
