<template>
  <div class="slide-container">
    <swiper :options="swiperOptions">
      <swiper-slide v-for="(fadeImage, index) in data.files.data" :key="index">
        <img v-if="fadeImage.attributes.url" :src="getStrapiMedia(fadeImage.attributes.url)"
          class="w-full h-96 object-cover rounded-lg" :alt="fadeImage.attributes.alternativeText || 'Image'">
      </swiper-slide>
      <div class="swiper-pagination"></div>
    </swiper>
  </div>
</template>

<script>
import 'swiper/css/swiper.css';
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import { getStrapiMedia } from '../utils/api-helpers';

export default {
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  components: {
    Swiper,
    SwiperSlide
  },
  computed: {
    swiperOptions() {
      return {
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      };
    }
  },
  methods: {
    getStrapiMedia(url) {
      // Implement your getStrapiMedia function logic here
      // For now, just return the URL directly
      return url;
    }
  }
};
</script>

<!-- Add any necessary styles -->
<style scoped>
/* Add your styles here */
</style>
