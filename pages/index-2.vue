<template>
  <div>
    <SliderTwo />
    <AboutTwo />
    <ServiceTwo />
    <Team />
    <RepairSection />
    <Counter />
    <Pricing />
    <WorkProcessTwo />
    <Gallery />
    <Clients />
    <CallToAction />
  </div>
</template>
<script>
import SliderTwo from "~/components/SliderTwo";
import AboutTwo from "~/components/AboutTwo";
import ServiceTwo from "~/components/ServiceTwo";
import Team from "~/components/Team";
import RepairSection from "~/components/RepairSection";
import Counter from "~/components/Counter";
import Pricing from "~/components/Pricing";
import WorkProcessTwo from "~/components/WorkProcessTwo";
import Gallery from "~/components/Gallery";
import Clients from "~/components/Clients";
import CallToAction from "~/components/CallToAction";
export default {
  components: {
    SliderTwo,
    AboutTwo,
    ServiceTwo,
    Team,
    RepairSection,
    Counter,
    Pricing,
    WorkProcessTwo,
    Gallery,
    Clients,
    CallToAction,
  },
  layout: "home2",
  head() {
    return {
      title: "FK AirConds | Home 2",
    };
  },
};
</script>
