<template>
  <div>
    <HomeBanner />
    <HomeAbout />
    <HomeServices />
    <WhyChooseUs />
    <ContactHome />
  </div>
</template>
<script>
import HomeAbout from "~/components/Home/HomeAbout";
import ContactHome from "~/components/ContactHome";
import HomeServices from "~/components/Home/HomeServices";
import WhyChooseUs from "~/components/Home/WhyChooseUs";
import HomeBanner from "../components/Home/HomeBanner";
export default {
  components: {
    HomeBanner,
    HomeServices,
    HomeAbout,
    WhyChooseUs,
    ContactHome,
  },
};
</script>
