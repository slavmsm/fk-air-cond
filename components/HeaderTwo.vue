<template>
  <div>
    <header class="header_area">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-6">
            <div class="header_left_contact">
              <ul>
                <li><i class="fa fa-phone"></i> +60-11-6441-8255</li>
                <li><i class="fa fa-envelope"></i> info@fkaircondservices.com</li>
                <li><i class="fa fa-clock-o"></i> Mon-fri: 9am - 6pm</li>
              </ul>
            </div>
          </div>
          <div class="col-md-6">
            <div class="header_left_contact header_right_contact text-right">
              <p>
                Looking for an engineer for your Aircod repair?
                <a href="#">Click Here</a>
              </p>
            </div>
          </div>
          <!-- end .col-md-6 -->
        </div>
        <!-- end .row -->
      </div>
      <!-- end .container-fluid -->
    </header>
    <div class="main_menu_area menu_style_2">
      <div class="container-fluid">
        <div class="row">
          <div class="header_nav">
            <nav class="navbar navbar-default">
              <!-- mobile display -->
              <div class="col-md-2 col-sm-5 logo_columns">
                <button type="button" class="navbar-toggle">
                  <span class="icon-menu"><i class="fa fa-bars"></i></span>
                </button>
                <a class="navbar-brand logo" href="/">
                  <img src="assets/logo/fk-aircond-landshape.svg" alt="logo" />
                </a>
              </div>
              <!-- end .col-md-2 .col-sm-5 .logo_columns -->
              <div class="col-md-6 responsive_menu">
                <div class="navbar-collapse">
                  <ul class="nav navbar-nav">
                    <li><nuxt-link to="/">Home</nuxt-link></li>
                    <li><nuxt-link to="/about">About</nuxt-link></li>
                    <li>
                      <nuxt-link to="/services">Services</nuxt-link>
                      <span class="responsive_click_menu fa fa-angle-down"></span>
                      <ul class="dropdown-menu">
                        <li>
                          <nuxt-link to="/aircond-repair">Aircond Repair</nuxt-link>
                        </li>
                        <li>
                          <nuxt-link to="/services">Aircond Maintenance</nuxt-link>
                        </li>
                        <li>
                          <nuxt-link to="/service-refrigerator"
                            >Aircond Installation</nuxt-link
                          >
                        </li>
                        <li>
                          <nuxt-link to="/service-refrigerator"
                            >Aircond Replacement</nuxt-link
                          >
                        </li>
                      </ul>
                    </li>
                    <li>
                      <nuxt-link to="/services">Chemical Service</nuxt-link>
                      <span class="responsive_click_menu fa fa-angle-down"></span>
                      <ul class="dropdown-menu">
                        <li>
                          <nuxt-link to="/service-refrigerator"
                            >Overhaul Cleaning</nuxt-link
                          >
                        </li>
                        <li>
                          <nuxt-link to="/service-refrigerator"
                            >Chemical Cleaning
                          </nuxt-link>
                        </li>
                        <li>
                          <nuxt-link to="/service-refrigerator"
                            >Repair All AirCond Brands
                          </nuxt-link>
                        </li>
                        <li>
                          <nuxt-link to="/service-refrigerator"
                            >Aircond Chemical Services</nuxt-link
                          >
                        </li>
                        <li>
                          <nuxt-link to="/service-refrigerator"
                            >Aircond Chemical Services</nuxt-link
                          >
                        </li>
                        <li>
                          <nuxt-link to="/service-refrigerator"
                            >Aircond Chemical Services</nuxt-link
                          >
                        </li>
                        <li>
                          <nuxt-link to="/service-refrigerator"
                            >Aircond Chemical Services</nuxt-link
                          >
                        </li>
                      </ul>
                    </li>
                    <li><nuxt-link to="/contact">Contact</nuxt-link></li>
                  </ul>
                  <!-- end .nav .navbar-nav -->
                </div>
                <!-- /.navbar-collapse -->
              </div>
              <!-- end .col-md-6 .responsive_menu -->

              <div class="col-md-4 col-sm-7 social_btn_column">
                <div class="hv2_header-social-right text-right">
                  <ul>
                    <li>
                      <a href="#"><i class="fa fa-twitter"></i></a>
                    </li>
                    <li>
                      <a href="#"><i class="fa fa-facebook"></i></a>
                    </li>
                    <li>
                      <a href="#"><i class="fa fa-youtube-play"></i></a>
                    </li>
                    <li>
                      <a href="#"><i class="fa fa-google-plus"></i></a>
                    </li>
                    <li class="hv2_contact_us">
                      <nuxt-link class="btn-orange" to="/book-online"
                        >Book Online</nuxt-link
                      >
                    </li>
                  </ul>
                </div>
                <!-- end hv2_header-social-right -->
              </div>
              <!-- .col-md-4 .col-sm-7 .social_btn_column -->
            </nav>
            <!-- end .navbar .navbar-default -->
          </div>
          <!-- end .header_nav -->
        </div>
        <!-- end .row -->
      </div>
      <!-- end .container-fluid -->
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderTwo",
  mounted() {
    const menu_fixed = document.querySelector(".main_menu_area");
    const topOfNav = menu_fixed.offsetTop;

    function fixed_nav() {
      if (window.scrollY >= topOfNav || window.scrollY === topOfNav) {
        document.body.style.paddingTop = menu_fixed.offsetHeight + "px";
        document.body.classList.add("fixed-scroll-nav");
      } else {
        document.body.style.paddingTop = 0;
        document.body.classList.remove("fixed-scroll-nav");
      }
    }
    window.addEventListener("scroll", fixed_nav);

    $(document).on(
      "click",
      ".main_menu_area .navbar-default .navbar-nav > li > span.responsive_click_menu:not(:only-child)",
      function (e) {
        $(this).siblings(".dropdown-menu").toggle();
        $(".dropdown-menu").not($(this).siblings()).hide();
        e.stopPropagation();
      }
    );
    $(document).on("click", ".main_menu_area .header_nav .navbar-toggle", function () {
      $(".main_menu_area .responsive_menu").toggleClass("responsive_menu_show");
    });
  },
};
</script>

<style scoped></style>
