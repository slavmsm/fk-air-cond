<template>
  <div>
    <PageHeader title="Contact Us" />
    <Contact />
    <ServiceThree/>
  </div>
</template>
<script>
  import PageHeader from "~/components/PageHeader";
  import Contact from "~/components/Contact";
  import ServiceThree from "~/components/ServiceThree";
  export default {
    components: {
      PageHeader,
      Contact,
      ServiceThree,
    },
    head(){
      return {
        title: "Refix | Contact Us"
      }
    }
  }
</script>
