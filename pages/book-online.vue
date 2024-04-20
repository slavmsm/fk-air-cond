<template>
  <div>
    <PageHeader title="Book Online" />
    <ContactHome />
    <WhyChooseUs />
  </div>
</template>
<script>
import PageHeader from "~/components/PageHeader";
import ContactHome from "../components/ContactHome.vue";
import WhyChooseUs from "~/components/WhyChooseUs";
export default {
  components: {
    PageHeader,
    ContactHome,
    WhyChooseUs,
  },
  head() {
    return {
      title: "FK Airconds | Book Online",
    };
  },
};
</script>
