<template>
  <section class="text-center section_padding gray_bg">
    <div class="breadcrumb_area">
      <div class="container">
        <ul class="breadcrumb">
          <li><nuxt-link to="/">Home</nuxt-link></li>
          <li>{{ title }}</li>
        </ul>
        <h1>{{ title }}</h1>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "PageHeader",
  props: {
    title: {
      type: String,
    },
  },
};
</script>

<style scoped></style>
