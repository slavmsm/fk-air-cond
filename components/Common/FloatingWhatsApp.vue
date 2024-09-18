<template>
  <div class="floating-whatsapp">
    <a
      href="https://wa.me/601164418255"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Hello, How can we help you?"
    >
      <img
        src="/assets/icons/whatsapp.png"
        alt="WhatsApp"
        class="whatsapp-icon"
      />
    </a>
  </div>
</template>

<script>
export default {
  name: "FloatingWhatsApp",
};
</script>

<style scoped>
.floating-whatsapp {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
}

.whatsapp-icon {
  width: 60px;
  height: 60px;
  transition: transform 0.3s ease;
}

.whatsapp-icon:hover {
  transform: scale(1.1);
}
</style>
