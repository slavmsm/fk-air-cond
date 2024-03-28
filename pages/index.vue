<template>
  <div>
    <HomeBanner />
    <HomeServices />
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
import HomeServices from "~/components/Home/HomeServices";
import Testimonial from "~/components/Testimonial";
import WhyChooseUs from "~/components/WhyChooseUs";
import WhyChooseUsTwo from "~/components/WhyChooseUsTwo";
import HomeBanner from "../components/Home/HomeBanner";
export default {
  components: {
    HomeBanner,
    HomeServices,
    About,
    Testimonial,
    WhyChooseUs,
    WhyChooseUsTwo,
    BlogRecent,
    ContactHome,
  },
};
</script>
