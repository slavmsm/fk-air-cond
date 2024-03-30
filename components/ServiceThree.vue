<template>
  <section
    class="service_style_2_area hv2_service_with_details section_padding text-center gray_bg"
  >
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
        <div class="col-md-4 col-sm-6">
          <div class="service_style_2_details">
            <i class="icon-freezer"></i>
            <nuxt-link to="/service-refrigerator"><h2>Ice Maker</h2></nuxt-link>
            <p class="mb_50">
              We are specialized in repairing your refrigerators. We promise to
              deliver satisfaction.
            </p>
            <nuxt-link class="btn-blue" to="/service-refrigerator"
              >Read More</nuxt-link
            >
          </div>
          <!--end .service_style_2_details-->
        </div>
        <!--end .col-md-4-->
        <div class="col-md-4 col-sm-6">
          <div class="service_style_2_details">
            <i class="icon-FK Air Cons-side-by-side"></i>
            <nuxt-link to="/service-refrigerator"
              ><h2>Refrigerator</h2></nuxt-link
            >
            <p class="mb_50">
              We are specialized in repairing your refrigerators. We promise to
              deliver satisfaction.
            </p>
            <nuxt-link class="btn-blue" to="/service-refrigerator"
              >Read More</nuxt-link
            >
          </div>
          <!--end .service_style_2_details-->
        </div>
        <!--end .col-md-4-->
        <div class="col-md-4 col-sm-6">
          <div class="service_style_2_details">
            <i class="icon-fridge"></i>
            <nuxt-link to="/service-refrigerator"
              ><h2>Cold Coolers</h2></nuxt-link
            >
            <p class="mb_50">
              We are specialized in repairing your refrigerators. We promise to
              deliver satisfaction.
            </p>
            <nuxt-link class="btn-blue" to="/service-refrigerator"
              >Read More</nuxt-link
            >
          </div>
          <!--end .service_style_2_details-->
        </div>
        <!--end .col-md-4-->
      </div>
      <!--end .row-->
    </div>
    <!--end .container-->
  </section>
</template>

<script>
export default {
  name: "ServiceThree",
};
</script>

<style scoped></style>
