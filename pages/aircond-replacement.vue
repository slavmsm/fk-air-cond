<template>
  <div>
    <PageHeader title="Aircond Replacement" />
    <CallToAction />
  </div>
</template>
<script>
import PageHeader from "~/components/PageHeader";
import CallToAction from "~/components/CallToAction";
export default {
  components: {
    PageHeader,
    CallToAction,
  },
  head() {
    return {
      title: "FK Airconds | Aircond Replacement",
    };
  },
};
</script>
