<template>
  <section class="header_slider_section">
    <div class="header_slider_area owl-carousel">
      <div class="header_slider_bg">
        <div class="container">
          <div class="row">
            <div class="col-md-7">
              <div class="header_slide_text">
                <p>Aircond Service & Repair You Can Rely On.</p>
                <h2>Our technicians are highly skilled with superior backgrounds.</h2>
                <a href="/about" class="btn-orange">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="header_slider_bg slider_bg_2">
        <div class="container">
          <div class="row">
            <div class="col-md-7">
              <div class="header_slide_text">
                <p>Aircond Service & Repair You Can Rely On.</p>
                <h2>Our technicians are highly skilled with superior backgrounds.</h2>
                <a href="/about" class="btn-orange">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="header_slider_bg slider_bg_3">
        <div class="container">
          <div class="row">
            <div class="col-md-7">
              <div class="header_slide_text">
                <p>Aircond Service & Repair You Can Rely On.</p>
                <h2>Our technicians are highly skilled with superior backgrounds.</h2>
                <a href="/about" class="btn-orange">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "HomeBanner",
  mounted() {
    $(".header_slider_area").owlCarousel({
      items: 1,
      autoHeight: true,
      autoplay: true,
      loop: true,
      nav: false,
      dots: true,
      animateIn: "fadeIn",
      animateOut: "fadeOut",
    });
  },
};
</script>

<style scoped></style>
