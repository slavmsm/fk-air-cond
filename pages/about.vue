<template>
  <div>
    <PageHeader title="About Us" />
    <RepairSectionTwo />
    <Counter />
    <Team />
    <About />
    <Testimonial />
    <CallToAction />
  </div>
</template>

<script>
  import PageHeader from "~/components/PageHeader";
  import RepairSectionTwo from "~/components/RepairSectionTwo";
  import Counter from "~/components/Counter";
  import Team from "~/components/Team";
  import About from "~/components/About";
  import Testimonial from "~/components/Testimonial";
  import CallToAction from "~/components/CallToAction";
  export default {
    components: {
      PageHeader,
      RepairSectionTwo,
      Counter,
      Team,
      About,
      Testimonial,
      CallToAction,

    },
    head(){
      return {
        title: "Refix | About Us"
      }
    }
  }
</script>
