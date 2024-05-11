<template>
  <div>
    <PageHeader title="Chemical Services" />
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
      title: "FK Airconds | Chemical Services",
    };
  },
};
</script>
