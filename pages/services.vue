<template>
  <div>
    <PageHeader title="Services" />
    <Services />
    <WhyChooseUs />
    <WhyChooseUsTwo />
    <ServiceThree />
  </div>
</template>
<script>
import PageHeader from "~/components/PageHeader";
import Services from "~/components/Services";
import WhyChooseUs from "~/components/WhyChooseUs";
import WhyChooseUsTwo from "~/components/WhyChooseUsTwo";
import ServiceThree from "~/components/ServiceThree";
export default {
  components: {
    PageHeader,
    Services,
    WhyChooseUs,
    WhyChooseUsTwo,
    ServiceThree,
  },
  head() {
    return {
      title: "FK Air Cons | Services",
    };
  },
};
</script>
