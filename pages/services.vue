<template>
  <div>
    <PageHeader title="Services" />
    <ServicesSection />
    <WhyChooseUs />
    <WhyChooseUsTwo />
    <!-- <ServiceThree /> -->
  </div>
</template>
<script>
import PageHeader from "~/components/PageHeader";
import ServicesSection from "~/components/Services/ServicesSection";
import WhyChooseUs from "~/components/WhyChooseUs";
import WhyChooseUsTwo from "~/components/WhyChooseUsTwo";
// import ServiceThree from "~/components/ServiceThree";
export default {
  components: {
    PageHeader,
    ServicesSection,
    WhyChooseUs,
    WhyChooseUsTwo,
    // ServiceThree,
  },
  head() {
    return {
      title: "Services | FK Airconds",
    };
  },
};
</script>
