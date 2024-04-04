<template>
  <div>
    <PageHeader title="Contact Us" />
    <Contact />
    <GoogleMap />
  </div>
</template>
<script>
import PageHeader from "~/components/PageHeader";
import Contact from "~/components/Contact";
import GoogleMap from "../components/GoogleMap.vue";
export default {
  components: {
    PageHeader,
    Contact,
    GoogleMap,
  },
  head() {
    return {
      title: "Contact Us | FK Airconds",
    };
  },
};
</script>
