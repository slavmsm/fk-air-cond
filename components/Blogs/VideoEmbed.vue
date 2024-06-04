<template>
  <div class="video-embed relative pb-56.25 h-72 lg:h-[450px] overflow-hidden my-8">
    <iframe v-if="embedUrl" :src="embedUrl" :width="data.width || '100%'" :height="data.height || '100%'" title="video"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen
      class="absolute top-0 left-0 w-full h-full"></iframe>
    <div v-else class="text-red-500">Invalid video URL</div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  computed: {
    embedUrl() {
      return this.getEmbedUrl(this.data.url);
    }
  },
  methods: {
    getEmbedUrl(videoUrl) {
      const youtubeRegex = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|watch\?v%3D)([\w-]{11}).*/;
      const youtubeMatch = videoUrl.match(youtubeRegex);
      if (youtubeMatch && youtubeMatch[2].length === 11) {
        return `https://www.youtube.com/embed/${youtubeMatch[2]}`;
      }
      // Add support for other video platforms here
      return null;
    }
  }
};
</script>

<style scoped>
/* Add your styles here */
</style>
