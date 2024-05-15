<template>
  <div>
    <PageHeader title="Chemical Services" />
    <ChemicalServicesDetails />
    <CallToAction />
  </div>
</template>
<script>
import PageHeader from "~/components/PageHeader";
import CallToAction from "~/components/CallToAction";
import ChemicalServicesDetails from "~/components/ChemicalServices/ChemicalServicesDetails";
export default {
  components: {
    PageHeader,
    ChemicalServicesDetails,
    CallToAction,
  },
  head() {
    return {
      title: "FK Airconds | Chemical Services",
    };
  },
};
</script>
