<template>
  <div class="google-map-container">
    <iframe
      class="google-map"
      :src="mapSrc"
      height="500"
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
</template>

<script>
export default {
  name: "GoogleMap",
  data() {
    return {
      mapSrc:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16300659.570133582!2d98.90207825351774!3d4.0908094814431495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3034d3975f6730af%3A0x745969328211cd8!2sMalaysia!5e0!3m2!1sen!2s!4v1712249786188!5m2!1sen!2s",
    };
  },
};
</script>

<style>
.google-map-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.google-map {
  border: 5px solid #ae2a2d !important; /* Border color */
  border-radius: 10px !important;
  margin: 30px !important;
  width: 100% !important;
}
</style>
