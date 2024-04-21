<template>
  <div>
    <PageHeader title="Aircond Maintenance" />
    <MaintenanceDetails />
    <CallToAction />
  </div>
</template>
<script>
import PageHeader from "~/components/PageHeader";
import MaintenanceDetails from "~/components/AircondMaitenance/MaintenanceDetails";
import CallToAction from "~/components/CallToAction";
export default {
  components: {
    MaintenanceDetails,
    PageHeader,
    CallToAction,
  },
  head() {
    return {
      title: "FK Airconds | Aircond Maintenance",
    };
  },
};
</script>
