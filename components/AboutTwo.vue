<template>
  <section class="about_with_contact_area section_padding">
    <div class="container">
      <div class="row">
        <div class="col-md-6 col-sm-6">
          <div class="about_with_contact_details">
            <div class="hero-section-title">
              <i class="icon-snowflake"></i>
              <h4>ABOUT FK Airconds STORY</h4>
              <h1>Running a successful business <span>since 1986</span></h1>
            </div>
            <!--end .hero-section-title-->
          </div>
          <!-- end .about_width -->
        </div>
        <!--end .col-md-7-->
        <div class="col-md-6 col-sm-6">
          <div class="right_details">
            <p>
              Tincidunt elit magnis nulla facilisis sagittis maecenas. Sapien
              nunced amet ultrices, dolores sit ipsum velit lorem ipsum is
              simply free text purus aliquet, massa fringilla leo orcium dolors
              sit amet elit magnis amet ultrices purusrfed aliquet.
            </p>
            <div class="about_video">
              <span class="video_img">
                <a
                  href="#videostore"
                  class="video-img"
                  data-video="https://www.youtube.com/embed/A7ZkZazfvao"
                  title="Play Icon"
                  id="videolink"
                >
                  <i class="fa fa-play"></i>
                </a>
                <span id="videostore" class="mfp-hide text-center">
                  <iframe
                    src="https://www.youtube.com/embed/A7ZkZazfvao"
                    allow="autoplay;encrypted-media"
                    allowfullscreen
                  ></iframe>
                </span>
              </span>
              <span class="about_learn_more"
                >Learn More <a href="/about">About Us</a></span
              >
            </div>
            <!--end .about_video-->
          </div>
          <!--end .right_details-->
        </div>
        <!--end .col-md-5-->
      </div>
      <!--end .row-->
    </div>
    <!--end .container-->
  </section>
</template>

<script>
export default {
  name: 'AboutTwo',
  mounted () {
    $('#videolink').magnificPopup({
      type: 'inline',
      midClick: true
    })
  }
}
</script>

<style scoped></style>
