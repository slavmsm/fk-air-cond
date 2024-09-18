<template>
  <div>
    <Header />
    <nuxt />
    <FloatingWhatsapp />
    <Footer />
  </div>
</template>

<script>
import Header from "~/components/Header";
import Footer from "~/components/Footer";
// import FloatingWhatsapp from "~/components/Common/FloatingWhatsapp";
import FloatingWhatsapp from "~/components/Common/FloatingWhatsApp.vue";

export default {
  components: {
    Header,
    FloatingWhatsapp,
    Footer,
  },
  data() {
    return {
      headData: null,
    };
  },
  async fetch() {
    try {
      const response = await this.$axios.$get(
        "https://admin-fk.vercel.app/api/head"
      );
      this.headData = response;
    } catch (error) {
      console.error("Error fetching head data:", error);
    }
  },
  head() {
    if (!this.headData) {
      return { title: "Loading..." };
    }

    return {
      title: this.headData.title || "Default Title",
      meta: this.headData.meta.map((meta) => ({
        hid: meta.name || meta.property,
        name: meta.name,
        property: meta.property,
        content: meta.content,
      })),
      link: this.headData.link.map((link) => ({
        rel: link.rel,
        href: link.href,
      })),
      script: [
        {
          hid: "gtag",
          innerHTML: this.headData.gTag,
        },
      ],
      noscript: [{ innerHTML: this.headData.noscript }],
      __dangerouslyDisableSanitizers: ["script"],
    };
  },
};
</script>

<style></style>
