<template>
  <div>
    <PageHeader title="About Us" />
    <RepairSectionTwo />
    <OurPartners />
    <Counter />
    <About />
    <Testimonial />
    <CallToAction />
  </div>
</template>

<script>
import PageHeader from "~/components/PageHeader";
import RepairSectionTwo from "~/components/RepairSectionTwo";
import OurPartners from "../components/Common/OurPartners.vue";
import Counter from "~/components/Counter";
import About from "~/components/Common/About";
import Testimonial from "~/components/Testimonial";
import CallToAction from "~/components/CallToAction";
export default {
  components: {
    PageHeader,
    About,
    RepairSectionTwo,
    OurPartners,
    Counter,
    Testimonial,
    CallToAction,
  },
  head() {
    return {
      title: "About Us | FK Aircond Services",
    };
  },
};
</script>
