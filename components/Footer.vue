<template>
  <footer class="footer_section section_padding">
    <div class="container">
      <div class="row">
        <div class="col-md-3 col-sm-6">
          <div class="footer_box">
            <img src="assets/logo/fk-aircon-logo.svg" alt="Footer Logo" />
            <p>
              FK AirCond Services, based in Malaysia, offers maintenance,
              installation, repair, and chemical services for all your air
              conditioning needs. Trusted expertise.
            </p>
          </div>
          <!--end .footer_box-->
        </div>
        <!--end .col-md-3-->
        <div class="col-md-3 col-sm-6">
          <div class="footer_box service">
            <h3>Services</h3>
            <ul>
              <li><a href="/services">Aircon Maintenance</a></li>
              <li><a href="/services">Aircon Installation</a></li>
              <li><a href="/services">Aircon Repair</a></li>
              <li><a href="/services">Aircon Chemical Services</a></li>
            </ul>
          </div>
          <!--end .footer_box-->
        </div>
        <!--end .col-md-3-->
        <div class="col-md-3 col-sm-6">
          <div class="footer_box">
            <h3>Useful Links</h3>
            <ul>
              <li><a href="/about">About Us</a></li>
              <li><a href="/privacy-policy">Privacy Policy</a></li>
              <li><a href="/terms-and-conditions">Terms and Conditions</a></li>
            </ul>
          </div>
          <!--end .footer_box-->
        </div>
        <!--end .col-md-3-->
        <div class="col-md-3 col-sm-6">
          <div class="footer_box">
            <h3>Contact Us</h3>
            <span
              ><i class="fa fa-map-pin"></i>
              <a href="mailto:layerdrops@gmail.com"
                >Shop 001, Street 001, Malaysia.</a
              >
            </span>
            <span class="support_email"
              ><i class="fa fa-envelope"></i>
              <a href="mailto:layerdrops@gmail.com">needhelp@fkaircond.com</a>
            </span>
            <span class="support_num"
              ><i class="fa fa-phone-square"></i>
              <a href="">666 888 0000</a></span
            >
          </div>
          <!--end .footer_box-->
        </div>
        <!--end .col-md-3-->
      </div>
      <!--end .row-->
    </div>
    <!--end .container-->

    <!-- copyright section -->
    <div class="copyright_area">
      <div class="container">
        <div class="row">
          <div class="col-md-6 col-sm-12">
            <div class="copyright_left">
              <ul class="social_media">
                <li>
                  <a href="#"><i class="fa fa-twitter"></i></a>
                </li>
                <li>
                  <a href="#"><i class="fa fa-facebook"></i></a>
                </li>
                <li>
                  <a href="#"><i class="fa fa-linkedin"></i></a>
                </li>
                <li>
                  <a href="#"><i class="fa fa-youtube-play"></i></a>
                </li>
              </ul>
              <p>
                &copy; copyright {{ getCurrentYear() }} - FK Aircond Services.
              </p>
            </div>
            <!--end .copyright_left-->
          </div>
          <!--end .col-md-6-->
          <div class="col-md-6 col-sm-12">
            <div class="copyright_right">
              <ul class="menu">
                <li>
                  <a href="https://wahabsharif.me/" target="_blank"
                    >Design and Developed with Passion by
                    <img
                      src="/assets/images/wahab-sharif-logo-4-neon.svg"
                      alt="Developer Logo"
                  /></a>
                </li>
              </ul>
            </div>
            <!--end .copyright_right-->
          </div>
          <!--end .col-md-6-->
        </div>
        <!--end .row-->
      </div>
      <!--end .container-->
    </div>
    <!--end .copyright_area-->
  </footer>
</template>

<script>
export default {
  name: "Footer",
  methods: {
    getCurrentYear() {
      return new Date().getFullYear();
    },
  },
};
</script>

<style scoped></style>
