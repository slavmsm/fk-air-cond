<template>
  <div>
    <Slider />
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
  import Slider from "~/components/Slider";
  import ServiceCarousel from "~/components/ServiceCarousel";
  import About from "~/components/About";
  import Testimonial from "~/components/Testimonial";
  import WhyChooseUs from "~/components/WhyChooseUs";
  import WhyChooseUsTwo from "~/components/WhyChooseUsTwo";
  import BlogRecent from "~/components/BlogRecent";
  import ContactHome from "~/components/ContactHome";
  export default {
    components: {
      Slider,
      ServiceCarousel,
      About,
      Testimonial,
      WhyChooseUs,
      WhyChooseUsTwo,
      BlogRecent,
      ContactHome,

    },

  }
</script>
