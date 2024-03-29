<template>
  <div>
    <HomeBanner />
    <HomeAbout />
    <HomeServices />
    <WhyChooseUs />
    <Testimonial />
    <ContactHome />
  </div>
</template>
<script>
import HomeAbout from "~/components/Home/HomeAbout";
import ContactHome from "~/components/ContactHome";
import HomeServices from "~/components/Home/HomeServices";
import WhyChooseUs from "~/components/Home/WhyChooseUs";
import HomeBanner from "../components/Home/HomeBanner";
import Testimonial from "../components/Testimonial.vue";
export default {
  components: {
    HomeBanner,
    HomeServices,
    HomeAbout,
    WhyChooseUs,
    Testimonial,
    ContactHome,
  },
};
</script>
