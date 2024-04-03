<template>
  <div>
    <PageHeader title="About Us" />
    <RepairSectionTwo />
    <Counter />
    <About />
    <Testimonial />
    <CallToAction />
  </div>
</template>

<script>
import PageHeader from "~/components/PageHeader";
import RepairSectionTwo from "~/components/RepairSectionTwo";
import Counter from "~/components/Counter";
import About from "~/components/Common/About";
import Testimonial from "~/components/Testimonial";
import CallToAction from "~/components/CallToAction";
export default {
  components: {
    PageHeader,
    About,
    RepairSectionTwo,
    Counter,
    Testimonial,
    CallToAction,
  },
  head() {
    return {
      title: "About Us | FK AirCond Services",
    };
  },
};
</script>
