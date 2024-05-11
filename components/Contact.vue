<template>
  <div>
    <!-- <div class="map_section">
        <div id="map"></div>

      </div> -->

    <!--start contact section -->
    <section
      class="contact_form_area contact_form_other_style section_padding text-center"
    >
      <div class="container section_padding">
        <div class="row">
          <div class="col-md-4 col-sm-6 col-xs-6">
            <div class="why_choose_us_details">
              <i class="fa fa-map-marker"></i>
              <h3>OUR MAIN OFFICE</h3>
              <p>Sunway PGS9 Bandar Sunway Subang Jaya Selangor, Malaysia.</p>
            </div>
            <!--end .why_choose_us_details-->
          </div>
          <!--end .col-md-2-->
          <div class="col-md-4 col-sm-6 col-xs-6">
            <div class="why_choose_us_details">
              <i class="fa fa-phone"></i>
              <h3>Phone Numbers</h3>
              <p>+60-11-6441-8255</p>
            </div>
            <!--end .why_choose_us_details-->
          </div>
          <!--end .col-md-2-->
          <div class="col-md-4 col-sm-6 col-xs-6">
            <div class="why_choose_us_details">
              <i class="fa fa-envelope"></i>
              <h3>Email</h3>
              <p>info@fkAircondservices.com</p>
            </div>
            <!--end .why_choose_us_details-->
          </div>
          <!--end .col-md-2-->
        </div>
        <!--end .row-->
      </div>
      <div class="container">
        <div class="row">
          <div class="hero-section-title">
            <i class="icon-snowflake"></i>
            <h4>CONTACT US</h4>
            <h1>Get in touch with us</h1>
          </div>
          <div class="col-lg-6 col-md-6">
            <div class="contact-details">
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
                <button class="btn-orange" type="submit" value="Request a Quote Now">
                  Send Message Now
                </button>
              </form>
            </div>
            <!--end .contact-details-->
          </div>
          <div class="col-lg-6 col-md-6">
            <div class="contact-details">
              <p class="text-justify">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non possimus
                quibusdam earum nam veniam fugit? Voluptatibus odit nihil repudiandae,
                sint vel earum unde quia obcaecati. Dolorum nihil adipisci commodi
                facilis!
              </p>
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
