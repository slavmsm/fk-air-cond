<template>
  <section class="header_slider_section">
    <div class="header_slider_area owl-carousel">
      <div class="header_slider_bg">
        <div class="container">
          <div class="row">
            <div class="col-md-7">
              <div class="header_slide_text">
                <p>Committed to top quality services</p>
                <h1>Freezer, ice maker and refrigerator repair services</h1>
                <a href="#" class="btn-orange">Book Online</a>
              </div><!--end .header_slide_text-->
            </div><!--end .col-md-7-->
          </div><!--end .row-->
        </div><!--end .container-->
      </div><!--end .header_slider_bg-->
      <div class="header_slider_bg slider_bg_2">
        <div class="container">
          <div class="row">
            <div class="col-md-7">
              <div class="header_slide_text">
                <p>Committed to top quality services</p>
                <h1>Freezer, ice maker and refrigerator repair services</h1>
                <a href="#" class="btn-orange">Book Online</a>
              </div><!--end .header_slide_text-->
            </div><!--end .col-md-7-->
          </div><!--end .row-->
        </div><!--end .container-->
      </div><!--end .header_slider_bg-->
      <div class="header_slider_bg">
        <div class="container">
          <div class="row">
            <div class="col-md-7">
              <div class="header_slide_text">
                <p>Committed to top quality services</p>
                <h1>Freezer, ice maker and refrigerator repair services</h1>
                <a href="#" class="btn-orange">Book Online</a>
              </div><!--end .header_slide_text-->
            </div><!--end .col-md-7-->
          </div><!--end .row-->
        </div><!--end .container-->
      </div><!--end .header_slider_bg-->
    </div><!--end .header_slider_area-->
  </section>
</template>

<script>
    export default {
      name: "Slider",
      mounted() {
        $('.header_slider_area').owlCarousel({
          items: 1,
          autoHeight: true,
          autoplay: true,
          loop: true,
          nav: false,
          dots: true,
          animateIn: 'fadeIn',
          animateOut: 'fadeOut',
        });
      }
    }
</script>

<style scoped>

</style>
