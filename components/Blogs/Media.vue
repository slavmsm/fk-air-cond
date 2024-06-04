<template>
  <div class="flex items-center justify-center mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
    <img :src="imgUrl" :alt="altText" class="object-cover w-full h-full rounded-lg overflow-hidden" width="400"
      height="400" />
  </div>
</template>

<script>
import { getStrapiMedia } from '../utils/api-helpers';

export default {
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  computed: {
    imgUrl() {
      return getStrapiMedia(this.data.file.data.attributes.url) || '';
    },
    altText() {
      return this.data.file.data.attributes.alternativeText || 'none provided';
    }
  }
};
</script>

<style scoped>
/* Add your styles here */
</style>
