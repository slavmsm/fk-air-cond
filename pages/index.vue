<template>
  <div>
    <HomeBanner />
    <ServiceCarousel />
    <About />
    <Testimonial />
    <WhyChooseUs />
    <WhyChooseUsTwo />
    <BlogRecent />
    <ContactHome />
  </div>
</template>
<script>
import About from "~/components/About";
import BlogRecent from "~/components/BlogRecent";
import ContactHome from "~/components/ContactHome";
import ServiceCarousel from "~/components/ServiceCarousel";
import Testimonial from "~/components/Testimonial";
import WhyChooseUs from "~/components/WhyChooseUs";
import WhyChooseUsTwo from "~/components/WhyChooseUsTwo";
import HomeBanner from "../components/Home/HomeBanner";
export default {
  components: {
    HomeBanner,
    ServiceCarousel,
    About,
    Testimonial,
    WhyChooseUs,
    WhyChooseUsTwo,
    BlogRecent,
    ContactHome,
  },
};
</script>
