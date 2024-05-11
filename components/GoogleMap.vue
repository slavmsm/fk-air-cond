<template>
  <div class="google-map-container">
    <iframe
      class="google-map"
      :src="mapSrc"
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
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15936.419578154826!2d101.5932178778242!3d3.0666287688505465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc4c83a42e8561%3A0x5b910ead47ab1441!2sPjs%209%2C%2047500%20Subang%20Jaya%2C%20Selangor%2C%20Malaysia!5e0!3m2!1sen!2s!4v1715431432030!5m2!1sen!2s",
    };
  },
};
</script>

<style>
.google-map-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100% !important; /* Ensure the container takes full width */
}

.google-map {
  border-radius: 10px !important;
  margin: 30px !important;
  width: 100% !important; /* Make the map take full width of its container */
  height: 500px; /* Adjust the height as needed */
}
</style>
