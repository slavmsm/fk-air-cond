<template>
  <div>
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
                  class="input_mr gray_bg"
                  placeholder="Full name"
                />
                <input
                  type="EMAIL"
                  name="email"
                  class="gray_bg"
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
                "FK Aircond offers comprehensive HVAC solutions tailored to your needs.
                Our expert team provides top-notch services including air conditioner
                repair, installation, maintenance, replacement, and specialized chemical
                services. Whether you need a quick fix, a new unit installed, or routine
                maintenance, trust FK Aircond to keep your indoor climate comfortable
                year-round."
              </p>
            </div>
            <div class="contact-social">
              <ul class="social_media">
                <li>
                  <a href="https://www.facebook.com/fkaircondservices/" target="_blank"
                    ><i class="fa fa-facebook"></i
                  ></a>
                </li>
                <li>
                  <a href="https://www.instagram.com/fkaircondservices/" target="_blank"
                    ><i class="fa fa-instagram"></i
                  ></a>
                </li>
                <li>
                  <a href="https://www.youtube.com/@FKAircondServices" target="_blank"
                    ><i class="fa fa-youtube-play"></i
                  ></a>
                </li>
              </ul>
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
};
</script>

<style scoped>
.contact-social .social_media li {
  display: inline-block;
  margin-top: 10px;
}

.contact-social .social_media li a {
  display: block;
  background: #225685;
  color: #ffffff;
  border-radius: 50%;
  font-size: 16px;
  width: 45px;
  height: 45px;
  text-align: center;
  line-height: 45px;
  margin-right: 5px;
  position: relative;
  z-index: 1;
  -webkit-transition: 0.3s;
  -o-transition: 0.3s;
  transition: 0.3s;
}

.contact-social .social_media li a:hover {
  background: #a73434;
  color: #ffffff;
}

.contact-social .social_media {
  margin-right: 7px;
}

.contact-social .social_media li a:hover:before {
  -webkit-transform: scale(1);
  -ms-transform: scale(1);
  transform: scale(1);
}

.contact-social {
  display: flex;
  align-items: center;
}
</style>
