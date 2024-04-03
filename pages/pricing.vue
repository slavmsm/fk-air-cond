<template>
  <div>
    <PageHeader title="Pricing" />
    <Pricing />
    <Faq />
    <WorkProcessTwo />
  </div>
</template>
<script>
import PageHeader from "~/components/PageHeader";
import Pricing from "~/components/Pricing";
import Faq from "~/components/Faq";
import WorkProcessTwo from "~/components/WorkProcessTwo";
export default {
  components: {
    Pricing,
    PageHeader,
    Faq,
    WorkProcessTwo,
  },
  head() {
    return {
      title: "FK AirConds | FAQ",
    };
  },
};
</script>
