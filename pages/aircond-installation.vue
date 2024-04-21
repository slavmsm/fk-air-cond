<template>
  <div>
    <PageHeader title="Aircond Installation" />
    <InstallationDetails />
    <CallToAction />
  </div>
</template>
<script>
import PageHeader from "~/components/PageHeader";
import InstallationDetails from "~/components/AircondInstallation/InstallationDetails";
import CallToAction from "~/components/CallToAction";
export default {
  components: {
    InstallationDetails,
    PageHeader,
    CallToAction,
  },
  head() {
    return {
      title: "FK Airconds | Aircond Installation",
    };
  },
};
</script>
