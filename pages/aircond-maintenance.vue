<template>
  <div>
    <PageHeader title="Aircond Maintenance" />
    <MaintenanceDetails />
  </div>
</template>
<script>
import PageHeader from "~/components/PageHeader";
import MaintenanceDetails from "~/components/AircondMaitenance/MaintenanceDetails";
export default {
  components: {
    MaintenanceDetails,
    PageHeader,
  },
  head() {
    return {
      title: "FK Airconds | Aircond Maintenance",
    };
  },
};
</script>
