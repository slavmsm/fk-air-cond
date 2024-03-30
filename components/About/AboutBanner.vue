<template>
  <section class="breadcrumb_area text-center section_padding gray_bg">
    <ul class="breadcrumb">
      <li><nuxt-link to="/">Home</nuxt-link></li>
      <li>{{ title }}</li>
    </ul>
    <h1>{{ title }}</h1>
  </section>
</template>

<script>
export default {
  name: "AboutBanner",
  props: {
    title: {
      type: String,
    },
  },
};
</script>

<style scoped></style>
