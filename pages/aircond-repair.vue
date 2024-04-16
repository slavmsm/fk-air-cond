<template>
  <div>
    <PageHeader title="Aircond Repair" />
    <RepairDetails />
  </div>
</template>
<script>
import PageHeader from "~/components/PageHeader";
import RepairDetails from "~/components/AirCondRepair/RepairDetails";
export default {
  components: {
    RepairDetails,
    PageHeader,
  },
  head() {
    return {
      title: "FK Airconds | Aircond Repair",
    };
  },
};
</script>
