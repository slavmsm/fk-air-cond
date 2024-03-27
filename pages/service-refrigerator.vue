<template>
  <div>
    <PageHeader title="Service Details" />
    <ServiceDetails />
  </div>
</template>
<script>
  import PageHeader from "~/components/PageHeader";
  import ServiceDetails from "~/components/ServiceDetails";
  export default {
    components: {
      PageHeader,
      ServiceDetails,

    },
    head(){
      return {
        title: "Refix | Service Details"
      }
    }
  }
</script>
