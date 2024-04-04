<template>
  <div>
    <HeaderTwo />
    <nuxt />
    <Footer />
  </div>
</template>

<script>
import HeaderTwo from "~/components/HeaderTwo";
import Footer from "~/components/Footer";
export default {
  components: {
    HeaderTwo,
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
