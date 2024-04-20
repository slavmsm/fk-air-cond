<template>
  <div>
    <PageHeader title="About Us" />
    <AboutSection />
    <OurPartners />
    <Counter />
    <About />
    <Testimonial />
    <CallToAction />
  </div>
</template>

<script>
import PageHeader from "~/components/PageHeader";
import AboutSection from "~/components/About/AboutSection";
import OurPartners from "../components/Common/OurPartners.vue";
import Counter from "~/components/Counter";
import Testimonial from "~/components/Testimonial";
import CallToAction from "~/components/CallToAction";
export default {
  components: {
    PageHeader,
    AboutSection,
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
