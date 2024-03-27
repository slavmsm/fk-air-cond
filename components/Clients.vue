<template>
  <section class="client_log_area section_padding">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="hero-section-title text-center">
            <i class="icon-snowflake"></i>
            <h4>BRANDS WE REPAIR EVERY DAY</h4>
            <h1>We repair all major brands</h1>
          </div><!--end .hero-section-title-->
        </div><!--end .col-md-12-->
      </div><!--end .row-->
      <div class="client_logo_slider text-center owl-carousel">
        <img src="/assets/images/logoes/client-1.jpg" alt="client image">
        <img src="/assets/images/logoes/client-2.png" alt="client image">
        <img src="/assets/images/logoes/client-3.png" alt="client image">
        <img src="/assets/images/logoes/client-4.png" alt="client image">
        <img src="/assets/images/logoes/client-5.png" alt="client image">
        <img src="/assets/images/logoes/client-1.jpg" alt="client image">
        <img src="/assets/images/logoes/client-2.png" alt="client image">
        <img src="/assets/images/logoes/client-3.png" alt="client image">
        <img src="/assets/images/logoes/client-4.png" alt="client image">
        <img src="/assets/images/logoes/client-5.png" alt="client image">
        <img src="/assets/images/logoes/client-1.jpg" alt="client image">
      </div><!--end .client_logo_slider-->
    </div><!--end .container-->
  </section>
</template>

<script>
    export default {
      name: "Clients",
      mounted() {
        $('.client_logo_slider').owlCarousel({
          items: 4,
          autoHeight: true,
          autoplay: true,
          loop: true,
          nav: false,
          dots: true,
          margin: 20,
          responsive: {
            0: {
              items: 1
            },
            600: {
              items: 2
            },
            1000: {
              items: 4
            }
          }
        });
      }
    }
</script>

<style scoped>

</style>
