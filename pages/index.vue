<template>
  <div>
    <HomeBanner />
    <About />
    <HomeServices />
    <WhyChooseUs />
    <Testimonial />
    <ContactHome />
  </div>
</template>
<script>
import About from "~/components/Common/About";
import ContactHome from "~/components/ContactHome";
import HomeServices from "~/components/Home/HomeServices";
import WhyChooseUs from "~/components/Home/WhyChooseUs";
import HomeBanner from "../components/Home/HomeBanner";
import Testimonial from "../components/Testimonial.vue";
export default {
  components: {
    HomeBanner,
    HomeServices,
    About,
    WhyChooseUs,
    Testimonial,
    ContactHome,
  },
};
</script>
