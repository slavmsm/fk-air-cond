<template>
  <section class="header_slider_section">
    <div class="header_slider_area owl-carousel">
      <div class="header_slider_bg">
        <div class="container">
          <div class="row">
            <div class="col-md-7">
              <div class="header_slide_text">
                <p>Committed to top quality services</p>
                <h2>
                  Expert solutions for air conditioning: Maintenance,
                  Installation, Repair, Chemical Services.
                </h2>
                <a href="/contact" class="btn-orange">Book Online</a>
              </div>
              <!--end .header_slide_text-->
            </div>
            <!--end .col-md-7-->
          </div>
          <!--end .row-->
        </div>
        <!--end .container-->
      </div>
    </div>
    <!--end .header_slider_area-->
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
