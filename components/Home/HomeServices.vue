<template>
  <section class="slider_service_area some_padding section_padding text-center">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="hero-section-title">
            <i class="icon-snowflake"></i>
            <h4>WHAT WE DO</h4>
            <h1>Services we offer</h1>
          </div>
          <!--end .hero-section-title-->
        </div>
        <!--end .col-md-12-->
      </div>
      <!--end .row-->
      <div class="row">
        <div class="service_slider owl-carousel">
          <div class="slider_service_box">
            <div class="slider_service_img">
              <i class="icon-freezer"></i>
            </div>
            <div class="slider_service_details">
              <nuxt-link to="/services"><h2>Maintenance</h2></nuxt-link>
              <p>
                "We specialize in aircon maintenance, ensuring satisfaction with
                repair services."
              </p>
              <nuxt-link class="btn-readmore" to="/services"
                >Read More</nuxt-link
              >
            </div>
            <!--end .slider_service_details-->
          </div>
          <!--end .slider_service_box-->
          <div class="slider_service_box">
            <div class="slider_service_img bg_2">
              <i class="icon-refix-side-by-side"></i>
            </div>
            <div class="slider_service_details">
              <nuxt-link to="/services"><h2>Installation</h2></nuxt-link>
              <p>
                "Expert AC installation for your cooling comfort and convenience
                assurance."
              </p>
              <nuxt-link class="btn-readmore" to="/services"
                >Read More</nuxt-link
              >
            </div>
            <!--end .slider_service_details-->
          </div>
          <!--end .slider_service_box-->
          <div class="slider_service_box">
            <div class="slider_service_img bg_3">
              <i class="icon-ice-cube-tray"></i>
            </div>
            <div class="slider_service_details">
              <nuxt-link to="/services"><h2>Repair</h2></nuxt-link>
              <p>
                "Quick, dependable AirCon repairs, ensuring comfort and peace of
                mind."
              </p>
              <nuxt-link class="btn-readmore" to="/services"
                >Read More</nuxt-link
              >
            </div>
            <!--end .slider_service_details-->
          </div>
          <!--end .slider_service_box-->
          <div class="slider_service_box">
            <div class="slider_service_img bg_4">
              <i class="icon-fridge"></i>
            </div>
            <div class="slider_service_details">
              <nuxt-link to="/services"><h2>Chemical Services</h2></nuxt-link>
              <p>
                "Complete chemical services enhance AirCon efficiency and
                lifespan."
              </p>
              <nuxt-link class="btn-readmore" to="/services"
                >Read More</nuxt-link
              >
            </div>
            <!--end .slider_service_details-->
          </div>
        </div>
        <!--end .service_slider-->
      </div>
      <!--end .row-->
    </div>
    <!--end .container-->
  </section>
</template>

<script>
export default {
  name: "HomeServices",
  mounted() {
    $(".service_slider").owlCarousel({
      autoHeight: true,
      autoplay: true,
      loop: true,
      nav: false,
      dots: true,
      margin: 30,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 2,
        },
        1000: {
          items: 4,
        },
      },
    });
  },
};
</script>

<style scoped></style>
