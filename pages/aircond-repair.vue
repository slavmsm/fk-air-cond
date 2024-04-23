<template>
  <div>
    <PageHeader title="Aircond Repair" />
    <RepairDetails />
    <CallToAction />
  </div>
</template>
<script>
import PageHeader from "~/components/PageHeader";
import RepairDetails from "../components/AirCondRepair/RepairDetails";
import CallToAction from "~/components/CallToAction";
export default {
  components: {
    RepairDetails,
    PageHeader,
    CallToAction,
  },
  head() {
    return {
      title: "FK Airconds | Aircond Repair",
    };
  },
};
</script>
