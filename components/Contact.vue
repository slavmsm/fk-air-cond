<template>
  <div>
    <!-- <div class="map_section">
        <div id="map"></div>

      </div> -->

    <!--start contact section -->
    <section
      class="contact_form_area contact_form_other_style section_padding text-center"
    >
      <div class="container">
        <div class="row">
          <div class="col-md-8 col-md-offset-2">
            <div class="contact-details">
              <div class="hero-section-title">
                <i class="icon-snowflake"></i>
                <h4>CONTACT US</h4>
                <h1>Get in touch with us</h1>
              </div>
              <form action="#" method="post">
                <input
                  type="text"
                  name="name"
                  class="input_mr input_half_width gray_bg"
                  placeholder="Full name"
                />
                <input
                  type="EMAIL"
                  name="email"
                  class="input_half_width gray_bg"
                  placeholder="Your email"
                />
                <textarea
                  class="gray_bg"
                  name="content"
                  id="textarea"
                  cols="30"
                  rows="10"
                  placeholder="Write message"
                ></textarea>
                <button
                  class="btn-orange"
                  type="submit"
                  value="Request a Quote Now"
                >
                  Send Message Now
                </button>
              </form>
            </div>
            <!--end .contact-details-->
          </div>
          <!--end .col-md-8-->
        </div>
        <!--end .row-->
      </div>
      <!--end .container-->
    </section>
    <!--end .contact_form_area-->
  </div>
</template>

<script>
export default {
  name: "Contact",
  mounted() {
    if ($("#map").length) {
      initMap("map", 40.712776, -74.005974, "/assets/images/map-marker.png");
    }
  },
};
</script>

<style scoped></style>
