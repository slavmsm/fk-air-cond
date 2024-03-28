<template>
  <div>
    <HomeBanner />
    <HomeServices />
    <About />
    <WhyChooseUs />
    <ContactHome />
  </div>
</template>
<script>
import About from "~/components/About";
import ContactHome from "~/components/ContactHome";
import HomeServices from "~/components/Home/HomeServices";
import WhyChooseUs from "~/components/Home/WhyChooseUs";
import HomeBanner from "../components/Home/HomeBanner";
export default {
  components: {
    HomeBanner,
    HomeServices,
    About,
    WhyChooseUs,
    ContactHome,
  },
};
</script>
