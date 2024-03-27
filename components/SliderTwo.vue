<template>
  <section class="hv2_slider_area owl-carousel text-center">
    <div class="hv2_slider_bg">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="hero-section-title">
              <h4>COMMITTED TO TOP QUALITY SERVICES</h4>
              <h1>Refrigerator Repair Technicians</h1>
              <a href="#" class="btn-orange">Contact Us</a>
            </div><!--end .hero-section-title-->
          </div><!--end .col-md-12-->
        </div><!-- end .row -->
      </div><!-- end .container -->
    </div><!-- end .hv2_slider_bg -->
    <div class="hv2_slider_bg hv2_slider_bg2">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="hero-section-title">
              <h4>COMMITTED TO TOP QUALITY SERVICES</h4>
              <h1>Refrigerator Repair Technicians</h1>
              <a href="#" class="btn-orange">Contact Us</a>
            </div><!--end .hero-section-title-->
          </div><!--end .col-md-12-->
        </div><!-- end .row -->
      </div><!-- end .container -->
    </div><!-- end .hv2_slider_bg -->
    <div class="hv2_slider_bg hv2_slider_bg3">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="hero-section-title">
              <h4>COMMITTED TO TOP QUALITY SERVICES</h4>
              <h1>Refrigerator Repair Technicians</h1>
              <a href="#" class="btn-orange">Contact Us</a>
            </div><!--end .hero-section-title-->
          </div><!--end .col-md-12-->
        </div><!-- end .row -->
      </div><!-- end .container -->
    </div><!-- end .hv2_slider_bg -->
  </section>
</template>

<script>
    export default {
      name: "SliderTwo",
      mounted() {
        $('.hv2_slider_area').owlCarousel({
          items: 1,
          autoHeight: true,
          autoplay: true,
          loop: true,
          nav: true,
          navText: ["<i class='fa fa-angle-left' aria-hidden='true'></i>", "<i class='fa fa-angle-right' aria-hidden='true'></i>"],
          dots: false,
          animateIn: 'fadeIn',
          animateOut: 'fadeOut',
        });
      }
    }
</script>

<style scoped>

</style>
