<template>
  <div>
    <PageHeader title="Book Online" />
    <BookOnline />
    <WhyChooseUs />
  </div>
</template>
<script>
import PageHeader from "~/components/PageHeader";
import BookOnline from "~/components/BookOnline";
import WhyChooseUs from "~/components/WhyChooseUs";
export default {
  components: {
    PageHeader,
    BookOnline,
    WhyChooseUs,
  },
  head() {
    return {
      title: "FK Air Cons | Book Online",
    };
  },
};
</script>
