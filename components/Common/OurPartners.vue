<template>
  <div class="slider">
    <div class="slide-track">
      <div class="slide" v-for="(image, index) in images" :key="index">
        <img
          :src="image.src"
          :alt="image.alt"
          :height="image.height"
          :width="image.width"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        {
          src: "assets/images/our-partners/daikin.png",

          width: 250,
          alt: "Our Partners",
        },
        {
          src: "assets/images/our-partners/europace.png",

          width: 250,
          alt: "Our Partners",
        },
        {
          src: "assets/images/our-partners/gree.png",

          width: 250,
          alt: "Our Partners",
        },
        {
          src: "assets/images/our-partners/lg.png",

          width: 250,
          alt: "Our Partners",
        },
        {
          src: "assets/images/our-partners/midea.png",

          width: 250,
          alt: "Our Partners",
        },
        {
          src: "assets/images/our-partners/mitsubishi.png",

          width: 250,
          alt: "Our Partners",
        },
        {
          src: "assets/images/our-partners/mitsubishi1.png",

          width: 250,
          alt: "Our Partners",
        },
        {
          src: "assets/images/our-partners/panasonic.png",

          width: 250,
          alt: "Our Partners",
        },
        {
          src: "assets/images/our-partners/tcl.png",

          width: 250,
          alt: "Our Partners",
        },
        {
          src: "assets/images/our-partners/toshiba.png",

          width: 250,
          alt: "Our Partners",
        },

        {
          src: "assets/images/our-partners/daikin.png",

          width: 250,
          alt: "Our Partners",
        },
        {
          src: "assets/images/our-partners/europace.png",

          width: 250,
          alt: "Our Partners",
        },
        {
          src: "assets/images/our-partners/gree.png",

          width: 250,
          alt: "Our Partners",
        },
        {
          src: "assets/images/our-partners/lg.png",

          width: 250,
          alt: "Our Partners",
        },
        {
          src: "assets/images/our-partners/midea.png",

          width: 250,
          alt: "Our Partners",
        },
        {
          src: "assets/images/our-partners/mitsubishi.png",

          width: 250,
          alt: "Our Partners",
        },
        {
          src: "assets/images/our-partners/mitsubishi1.png",

          width: 250,
          alt: "Our Partners",
        },
        {
          src: "assets/images/our-partners/panasonic.png",

          width: 250,
          alt: "Our Partners",
        },
        {
          src: "assets/images/our-partners/tcl.png",

          width: 250,
          alt: "Our Partners",
        },
        {
          src: "assets/images/our-partners/toshiba.png",

          width: 250,
          alt: "Our Partners",
        },
      ],
    };
  },
};
</script>

<style scoped>
.slider {
  height: 100px;
  margin: auto;
  margin-bottom: 30px;
  overflow: hidden;
  position: relative;
  width: auto;
}

.slide-track {
  animation: scroll 40s linear infinite;
  display: flex;
  width: calc(250px * 14);
}

.slide {
  height: 100px;
  width: 250px;
}

@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-250px * 7));
  }
}
</style>
